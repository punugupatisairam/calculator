import React from 'react'

function Keypad({handleClick,handleClear,calculate,handleDelete}) {
  return (
    <div className='Keypad'>
       <div className='row'>
       <button className='top-operator' onClick={()=>{handleClear()}} >AC</button>
       <button className='top-operator'onClick={()=>{handleDelete("D")}}>D</button>
       <button className='top-operator'onClick={()=>{handleClick("%")}}>%</button>
       <button className='Operator' onClick={()=>{handleClick("+")}}>+</button>
      </div>  
      <div className='row'>
       <button className='Digit' onClick={()=>{handleClick("1")}} >1</button>
       <button className='Digit'onClick={()=>{handleClick("2")}}>2</button>
       <button className='Digit'onClick={()=>{handleClick("3")}}>3</button>
       <button className='Operator' onClick={()=>{handleClick("-")}}>-</button>
      </div>  
      <div className='row'>
       <button className='Digit' onClick={()=>{handleClick("4")}}>4</button>
       <button className='Digit' onClick={()=>{handleClick("5")}}>5</button>
       <button className='Digit'onClick={()=>{handleClick("6")}}>6</button>
       <button className='Operator' onClick={()=>{handleClick("*")}}>*</button>
      </div>
       <div className='row'>
       <button className='Digit' onClick={()=>{handleClick("7")}}>7</button>
       <button className='Digit' onClick={()=>{handleClick("8")}}>8</button>
       <button className='Digit' onClick={()=>{handleClick("9")}}>9</button>
       <button className='Operator'onClick={()=>{handleClick("/")}}>/</button>
      </div>  
      <div className='row'>
       <button className='Digit' onClick={()=>{handleClick("0")}}>0</button>
       <button className='fun-key' onClick={()=>{handleClick("00")}}>00</button>
       <button className='Digit' onClick={()=>{handleClick(".")}}>.</button>
       <button className='Operator' onClick={()=>{calculate()}}>=</button>
      </div>  
    </div>
  )
}

export default Keypad