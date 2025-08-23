import { useState } from 'react'

type Task = {
  id: string
  text: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const [newTaskText, setNewTaskText] = useState("")

  const onAddTaskClick = () => {
    if (newTaskText.trim() !== "") {
      const newTask = {
        id: Math.random().toString(36).substring(2, 15),
        text: newTaskText.trim()
      }
      setTasks([...tasks, newTask])
      setNewTaskText("")
    }
  }

  const onNewTaskTextEdit = (e: any) => setNewTaskText(e.target.value)

  const onDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(t => t.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <>
      <h1>Todo list</h1>

      <input
        type="text"
        placeholder="Add a new task"
        value={newTaskText}
        onChange={onNewTaskTextEdit}
      />

      <button onClick={onAddTaskClick}>Add</button>

      <h2>Tasks</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.id}</span>
            <span>{task.text}</span>

            <button onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
