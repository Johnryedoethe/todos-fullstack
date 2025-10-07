import { useState } from "react"

export function Fetch() {
  const [targetName, setTargetName] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [count, setCount] = useState(0)

  async function fetchData() {
    const name = targetName.trim()
    if (name === "") {
      setErrorMsg("Please enter a name")
      return
    }

    setErrorMsg("")

    const res = await fetch(`https://api.agify.io/?name=${name}`)
    if (res.ok) {
      const data = await res.json()
      if (data.age) {
        setName(data.name)
        setAge(data.age)
        setCount(data.count)
      } else {
        setErrorMsg("User not found")
      }
    } else {
      setErrorMsg("Error fetching data: " + await res.text())
    }
  }

  const updateEditName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetName(e.target.value)
  }

  return (
    <>
      <h2>Fetch Component</h2>

      <input
        type="text"
        value={targetName}
        onChange={updateEditName}
        placeholder="enter a name..."
      />

      <button
        onClick={fetchData}
        disabled={targetName === ""}
      >
        Fetch
      </button>

      {errorMsg !== "" && <p style={{ color: "red" }}>{errorMsg}</p>}

      {name !== "" && (
        <ul>
          <li>name: {name}</li>
          <li>age: {age}</li>
          <li>person count: {count}</li>
        </ul>
      )}
    </>
  )
}
