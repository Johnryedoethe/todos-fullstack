import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Counter } from './Counter'
import { Fetch } from './Fetch'
import { Hello, ListExample } from './Hello'
import { NamedFetchWrapper } from './NamedFetchWrapper'
import { Todos } from './Todos'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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

    <Todos />
  </StrictMode>,
)
