import React from 'react'

const Timer = () => {
    let timer = 'Off'
  return (
    <div>
       <span>Timer</span>
       <br/>
    <label>
        <input type="radio" value="Off" name="timer" /> Off
    </label>
    <br/>
    <label>
        <input type="radio" value="5Sec" name="timer" /> 5 sec
    </label>
    <br/>
    <label>
        <input type="radio" value="10Sec" name="timer" /> 10 sec
    </label>    
    </div>
  )
}

export default Timer
