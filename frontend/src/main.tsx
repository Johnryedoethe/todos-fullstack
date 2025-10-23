import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Counter } from './Counter'
import { Fetch } from './Fetch'
import { Hello, ListExample } from './Hello'
import { NamedFetchWrapper } from './NamedFetchWrapper'
import { FrontendOnlyTodos } from './FrontendOnlyTodos'

import { BackendTodos } from './BackendTodos'

function FrontendDemos() {
  return (
    <>
      <NamedFetchWrapper />

      <hr />

      <Fetch />

      <hr />

      <Counter />

      <hr />

      <ListExample />

      <hr />

      <Hello name="Leo" age={14} />
      <Hello name="Tin" age={18} />

      <hr />

      <FrontendOnlyTodos />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FrontendDemos /> */}

    <BackendTodos />
  </StrictMode>
)
