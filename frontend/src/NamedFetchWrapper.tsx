import { useState } from "react"

import { NamedFetch } from './NamedFetch'

export function NamedFetchWrapper() {
  const [editName, setEditName] = useState("")
  const [targetName, setTargetName] = useState("")

  const updateEditName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value)
  }

  return (
    <>
      <h2>Named Fetch Wrapper</h2>

      <input
        type="text"
        value={editName}
        onChange={updateEditName}
        placeholder="enter a name..."
      />

      <button
        onClick={() => setTargetName(editName.trim())}
        disabled={editName === ""}
      >
        Fetch
      </button>

      <NamedFetch name={targetName} />
    </>
  )
}
