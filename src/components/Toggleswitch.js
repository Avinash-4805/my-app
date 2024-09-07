import React, { useState } from 'react';
import './Toggleswitch.css';
import { IoIosSwitch } from "react-icons/io";

function Toggleswitch() {
  
  const [isOn, setIsOn] = useState(false)
  const switchState = isOn ? 'on' : 'off'
  const toggleBgColor = {backgroundColor: isOn ? '#4caf50' : '#f44336'}
  const handalTogleSwitch = () => {
    setIsOn(!isOn)
  }
  return (
    <>
    <h1 style={{color:'#000', textAlign:'center'}}>Toggle Switch <IoIosSwitch style={{color:'red', textAlign:'center'}} /></h1>
      <div className='toggle-switch' style={toggleBgColor} onClick={handalTogleSwitch}>
        <div className={`switch ${switchState}`}>
          <span className='switch-state'>{switchState}</span>
        </div>
      </div>
    </>
  )
}

export default Toggleswitch
