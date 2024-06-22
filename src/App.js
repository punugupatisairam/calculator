import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import './App.css';
import Keypad from './Keypad';
import React from 'react';

function App() {
  let [input,setInput]=React.useState('');
  function handleClick(value){
    setInput(input+value)
  }
  function calculate() {
    try {
      let outputVal = eval(input);
      setInput(outputVal.toString());
    } catch (e) {
      setInput("Error");
    }
  }
  function handleClear(){
    setInput("")
  }
  function handleDelete(){
    if (input.length > 0) {
      setInput(input.slice(0, -1));
    }
  }
  
  return (
    <div className="Container">
          <h1 >Calculator</h1>
          <div className='Calculator'>
            <input type='text' value={input} className='output'/>
            <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear} handleDelete={handleDelete}></Keypad>
          </div>
    </div>
  );
}

export default App;
