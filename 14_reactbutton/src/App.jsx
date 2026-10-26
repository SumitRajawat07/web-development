import React from 'react'

const App = () => {

  function btnclicked() {
    console.log("button is clicked")
  }
  return (

    <div>
      <button onClick={btnclicked}
       className= 'active:scale-95 bg-blue-300 text-black font-bold m-2 ' >clicked me!</button>
    </div>
  )
}

export default App
