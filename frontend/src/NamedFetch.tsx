import { useState, useEffect } from "react"

type NamedFetchProps = {
  name: string
}

export function NamedFetch({name: targetName}: NamedFetchProps) {
  const [errorMsg, setErrorMsg] = useState("")

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [count, setCount] = useState(0)

  const fetchData = async () => {
    const res = await fetch(`https://api.agify.io/?name=${targetName}`)
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

  useEffect(() => {
    const name = targetName.trim()
    if (name === "") {
      setErrorMsg("Please enter a name")
      return
    }

    setErrorMsg("")

    fetchData()
  }, [targetName])

  return (
    <>
      <h2>Named Fetch</h2>

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
