import React from 'react'



function InputCity({onSubmitHandler,city,onInputHandler}){
    return(
      
      <div className='input-box'>
      <input className='input-text' type= "text"
       value = {city}
       onChange = {onInputHandler}
       placeholder = "City Name"
       />
        <br/> <br/>
        <button className='input-button' type='submit' onClick={onSubmitHandler}>
                Search
        </button>
      </div>
)}
export default InputCity;