import React from 'react'
import "./Input.css"

function Input(props){
    return(
        
<div className = "wrapper">
        <div className="input"> 
            {props.display}
            </div>
           </div>
    )
}
export default Input