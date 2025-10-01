import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { Todos } from './Todos'

// import { Hello, ListExample } from './Hello'

import { Counter } from './Counter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Counter />

    {/* <ListExample />

    <Hello name="Leo" age={14} />
    <Hello name="Tin" age={18} /> */}

    {/* <Todos /> */}
  </StrictMode>,
)
