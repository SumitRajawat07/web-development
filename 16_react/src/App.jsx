import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num , setNum]  = useState(0)
  return (
    <div>
      <h1>{num}</h1>

      
      <button onClick={() => {
        setNum(num+10)
      }}>increase</button>

      <button onClick={() => {
        setNum(num-10)
      }}>decrease</button>

      <button onClick={() => {
        setNum(num*10)
      }}>multiply</button>

      <button onClick={() => {
        setNum(num/10)
      }}>divide</button>


    </div>
  )
}

export default App
App