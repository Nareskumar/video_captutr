
import './App.css'
import { useEffect, useState } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'

function App() {
  //  const [count, setCount] = useState(0);
  //  const [total, setTotal] = useState(1);
  //  useEffect( () => {

  //   alert(" will run every time")


  //  })

  // useEffect( () => {

  //   alert("only first render")
          


  // }, [] )

  // useEffect( () => {

  //   alert("run when count updated  before rendering the updated value")
          


  // }, [count] )


  // useEffect( () => {

  //   alert("run when count, total updated  before rendering the updated value")
          


  // }, [count][total] )

  
  // useEffect( () => {

  //   alert("run when count updated  before rendering the updated value")
  //   return () => {
  //      alert ("count is unmounted from UI");

  //   }      


  // }, [count] )



  //  function handleClick() {
  //    setCount(count+1);


  //  }
    
  //  function handleClickTotal() {
  //   setTotal(total+1);


  // }




   





    

  return (
    <div>
          <ResizeComponent/>
         {/* <TimerComponent/> */}
         {/* <LoggerComponent/> */}
         {/* <DataFetcher/> */}

       {/* <button onClick={handleClick}> 

        update count

       </button>
       <br/> 

       Count is : {count}

       <br/>
       <button onClick={handleClickTotal}> 

        update Total

       </button>
       <br/> 

       Total is : {total}
       




 */}



    </div>
  )
}

export default App
