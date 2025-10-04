import { useState } from "react"

export function Fetch() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  async function fetchData() {
    const res = await fetch("https://api.agify.io/?name=alice")
    const data = await res.json()
    setName(data.name)
    setAge(data.age)
  }

  return (
    <>
      <div>Fetch Component</div>
      <button onClick={fetchData}>Fetch</button>

      {name !== "" && (
        <>
          <p>age: {name}</p>
          <p>name: {age}</p>
        </>
      )}
    </>
  )
}
