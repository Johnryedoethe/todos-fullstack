import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Task } from './types';

const app = express();
app.use(express.json());

// In-memory storage for tasks
let tasks: Task[] = [];

// Create: POST /tasks
app.post('/tasks', (req: Request, res: Response) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    const newTask: Task = {
        id: uuidv4(),
        text
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Read: GET /tasks
app.get('/tasks', (_: Request, res: Response) => {
    res.json(tasks);
});

// Update: PUT /tasks/:id
app.put('/tasks/:id', (req: Request, res: Response) => {
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

// Delete: DELETE /tasks/:id
app.delete('/tasks/:id', (req: Request, res: Response) => {
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
