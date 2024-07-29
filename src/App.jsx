import { useState } from 'react'
import './App.css'
import FORM from './FORM';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <FORM></FORM>
    </>
  )
}

export default App
