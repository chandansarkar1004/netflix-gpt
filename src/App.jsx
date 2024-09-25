import { useState } from 'react'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <h1 className='text-3xl'>Namaste React</h1>
    </div>
  )
}

export default App
