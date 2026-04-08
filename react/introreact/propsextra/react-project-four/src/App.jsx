import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(1);

    function handleClick() {
      setCount(count+1);
      
    }


  return (
    
      <div>

      <Button handleClick = {handleClick} text = "click me" >
      <h1> {count}</h1>



    </Button>
        




          {/* <Card name = "apj">

         <h1> Today is sunny day  </h1>
         <p>  I am going to delhi  </p>
         <p>  vally has beautiful flowers </p>

          </Card> 


          <Card>
            
               <h1> green is good color.   </h1>
            
          </Card>   */}
         
      </div>

  )
}

export default App
