export function BackendTodos() {
  const listTasks = async () => {
    // const response = await fetch("http://localhost:3000/tasks")

    const response = await fetch("http://localhost:5173/api/tasks")
    const data = await response.json()
    console.log(data)
  }

  const addTask = async () => {
    // const response = await fetch("http://localhost:3000/tasks", {
    const response = await fetch("http://localhost:5173/api/tasks", {
      method: "POST",
      body: JSON.stringify({ text: "New Task from Frontend" }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <h1>Backend Todos</h1>

      <button onClick={listTasks}>List tasks</button>

      <button onClick={addTask}>Add a task</button>
    </>
  )
}
