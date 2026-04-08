import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA';

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Love"});
  const [theme, setTheme] = useState('light');

  return (


     <ThemeContext.Provider value = {{theme, setTheme}}>
      <div id = 'container'  style={{backgroundColor: theme ==='light'?"beige":"black"}}>
        <ChildA/>  
        
      </div> 
        

     </ThemeContext.Provider>

    // <UserContext.Provider value = {user}>
    //     <ChildA/>
    // </UserContext.Provider>
    
  )
}

export default App
export {ThemeContext}
