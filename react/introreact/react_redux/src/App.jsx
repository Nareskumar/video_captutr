import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import './redux/store.js'
import { useState } from 'react';
import {increment, decrement, reset, incrementByAmount} from './features/counter/counterSlice';

function App() {
  const [amount, setAmount] = useState(0);
  const count= useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function nk()
  {
     dispatch(increment());


  }

function rs()

{

  dispatch(decrement());


}

function js()

{

  dispatch(reset());


}
function kv()

{

  dispatch(incrementByAmount(amount));


}


  
  return (
    
              // <p> Hello ji   </p>    
    
    <div className = 'container'>
      <button onClick ={nk} > + </button>

      <p> Count:{count} </p>

      <button onClick ={rs} > - </button>
       <br/>
       <br/>
      <button onClick ={js} > Reset </button>
      <br/>
      <br/>
      <input type = 'Number'
      value={amount}
      placeholder='Enter Amount'
      onChange={(e)=> setAmount(e.target.value)} />

      <br/>
      <br/>
      <button onClick ={kv} > Inc by Amount </button>

    </div>          

   
  )
}

export default App
