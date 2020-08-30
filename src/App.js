import React from 'react'; 
import './App.css'; 
import Score from './Score';

const word = "Hello";

function App() {
  return ( 
    <div className="Background"> 
      <Score value={word}/>
    </div> 
  ); 
} 

export default App;