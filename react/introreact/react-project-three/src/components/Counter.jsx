import React, {useState} from 'react'
import './Counter.css'
const Counter = () => {

   const [count, setCount] = useState(26);

  return (
    <div className='counter-container'>
          <p id = 'para'> click me {count} times    </p>
          <button onClick={() => {setCount(count+1)}}> click me   </button>
    </div>
  )
}

export default Counter
