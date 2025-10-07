import { useState } from "react"

export function Fetch() {

  const [targetName, setTargetName] = useState("")

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [count, setCount] = useState(0)

  async function fetchData() {
    const res = await fetch(`https://api.agify.io/?name=${targetName}`)
    const data = await res.json()
    setName(data.name)
    setAge(data.age)
    setCount(data.count)
  }

  return (
    <>
      <div>Fetch Component</div>
      <input type="text" value={targetName} onChange={((e) => setTargetName(e.target.value))} placeholder="enter a name..."></input>
      <button onClick={fetchData}>Fetch</button>

      {name !== "" && (
        <>
          <p>name: {name}</p>
          <p>age: {age}</p>
          <p>person count: {count}</p>
        </>
      )}
    </>
  )
}
