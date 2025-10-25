import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

// Requests need to set header Content-Type: application/json
app.use(express.json());

interface Task {
    id: string;
    text: string;
}

// In-memory storage for tasks
let tasks: Task[] = [];

app.post('/api/tasks', (req: Request, res: Response) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    const newTask: Task = {
        id: uuidv4(),
        text
    };

    tasks.push(newTask);
    res.status(201).json({id: newTask.id});
});

app.get('/api/tasks', (_: Request, res: Response) => {
    res.json(tasks);
});

app.patch('/api/tasks/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    const taskIndex = tasks.findIndex((task: Task) => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], text };
    res.json(tasks[taskIndex]);
});

app.delete('/api/tasks/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex((task: Task) => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks = tasks.filter((task: Task) => task.id !== id);
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
