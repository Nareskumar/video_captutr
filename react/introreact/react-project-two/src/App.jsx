import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import lionpic from './assets/lion.jpg'
import elepic from './assets/elephant.png'
import camelpic from './assets/camel.jpg'

import './App.css'
import UserCard from './components/UserCard'

function App() {
  

  return (
     <div className='container'>  
     <UserCard name = "Lion" desc="M hu jungle ka Raja" image ={lionpic} style = {{"border-radius":"10px"}}/>
     <UserCard name = "Hathi" desc="M hu Hathi Raja" image={elepic} style = {{"border-radius":"10px"}}/>
     <UserCard name = "Camel" desc="M hu Registan ka jahaj" image = {camelpic} style = {{"border-radius":"10px"}}/>
     

     </div> 
  )
}

export default App
