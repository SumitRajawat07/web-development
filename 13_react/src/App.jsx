import React from 'react'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
    
    <Navbar title = 'sumit'  color = 'red'  links = {['home' ,'about' ,'class' ,'extra']} />
    <Navbar title = 'ram'    color = 'blue'   links = {['home' ,'about' ,'class' ,'extra']} />
    <Navbar title = 'syam'   color = 'black'  links = {['home' ,'about' ,'class' ,'extra']} />
    <Navbar title = 'raklhi' color = 'orange'  links = {['home' ,'about' ,'class' ,'extra']} />
    <Navbar title = 'ravan'  color = 'green'  links = {['home' ,'about' ,'class' ,'extra']} />
    </div>
  )
}

export default App
