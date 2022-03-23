import React, { useState,useEffect } from "react";
import './App.css';

const App = () => {
  const[counter, setCounter] = useState(0)
const useEffectAPI = () =>{
  const App= async() => {
  const response = await fetch('https://gorest.co.in/public/v1/todos');
  const data = await response.json();
  console.log(data);
}
useEffect(() => {
  App();
});

}
    const handleClick1 = () => {
    setCounter(counter + 3)
  }
  const handleClick2 = () => {
    setCounter(counter -3)
  }

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center",
      fontsize: '400%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%'
    }}>
    Counter App
    <div style ={{
      fontSize: '400%',
      position: 'relative',
      top: '10vh',
    }}>
      {counter}

    </div>
    <div className="buttons">
    <button style={{
      fontSize: '100%',
      position: 'relative',
      top: '20vh',
      marginRight: '5px',
      backgroundColor: 'green',
      borderRadius: '8%',
      color: 'white',
     }}
     onClick={handleClick1}>Increment</button>
     <button style= {{
       fontSize: '100%',
       position: 'relative',
       top: '20vh',
       marginLeft: '5px',
       backgroundColor: 'red',
       borderRadius: '8%',
       color: 'white', 
     }}
     
     onClick={handleClick2}>Decrement</button>
     </div>
     </div>
      
  )
}

export default App;



