import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 function handleClick() {

  alert("I am clicked")


 }
function handleMouseover() {
 
  alert (" para pe mouse ayo h ")
  

}

function handleInputChange(e)
{

  //  console.log("input change hua h");
  console.log("Value till now:" , e.target.value);

}

function handleSubmit(e)
{

    e.preventDefault();
  // I am writing my custom behaviour   
   alert("form submit kr du kya");

}

  return (
    <div>
      <button onClick={() => 
        alert("hlo how are you")}>

           click 

      </button>


      {/* <p onMouseOver={handleMouseover} style={{color: "red", border:"2px solid black"}}>
          I am going Udaipur.
      </p>
      <button onClick={handleClick}>
        click me
      </button> */}
    </div>
      
  )
}

export default App
