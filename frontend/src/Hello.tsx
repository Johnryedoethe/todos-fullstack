type HelloProps = {
  name: string
  age: number
}

// export function Hello(helloProps: HelloProps) {
//   const name = helloProps.name
//   const age = helloProps.age
//   return <h1>Hello {name}, you're {age} years old</h1>
// }

// "Destruct" syntax
export function Hello({name, age}: HelloProps) {
  return <h1>Hello {name}, you're {age} years old</h1>
}

export function ListExample() {
  const tasks = ["Task 1", "Task 2"]

  return (
    <>
      <h1>Hello list</h1>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </>
  )
}
