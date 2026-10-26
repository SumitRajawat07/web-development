import React from 'react'
import { useState } from 'react'

const App = () => {
  
  useState
  const [state, setState] = useState('sumit')

  const clickedbtn = ()=> {
    setState('pratvi')
    console.log(user)
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={clickedbtn}>Change user!</button>
    </div>
  )
}

export default App
