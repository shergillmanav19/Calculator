import React from 'react'
import "./CalculatorComponents.css"
function CalculatorComponents(props){

    return(
        <div className="calculator">
          <div className="calc-wrapper">
          <div className = "row"> 
            <button className="button" onClick=  {props.handleClick} value="1">1</button> 
            <button className="button" onClick=  {props.handleClick} value="2">2</button > 
            <button className="button" onClick=  {props.handleClick} value="3">3</button> 
            <button className="button-operator" onClick=  {props.handleClick} value="/">/</button> 
            <br />
            </div>
            <div className = "row">
            <button className="button" onClick = {props.handleClick} value="4">4</button> 
            <button className="button" onClick = {props.handleClick} value="5">5</button> 
            <button className="button" onClick = {props.handleClick} value="6">6</button> 
            <button className="button-operator" onClick=  {props.handleClick} value="*">x</button> 
            <br />
            </div>
            <div className = "row">
            <button className="button" onClick = {props.handleClick} value="7">7</button>
            <button className="button" onClick = {props.handleClick} value="8">8</button> 
            <button className="button" onClick = {props.handleClick}value="9">9</button> 
            <button className="button-operator" onClick=  {props.handleClick} value="-">-</button> 
            <br />
            </div>
            <div className = "row">
            <button className="button" onClick = {props.handleClick} value="0">0</button>
            <button className="button" onClick = {props.handleClick} value=".">.</button> 
            <button className="button-equal" onClick=  {props.handleEqual} value="=">=</button> 
            <button className="button-operator" onClick = {props.handleClick}value="+">+</button> 
            
            
            <br />
            </div>
            <div className = "row">
            <button className="button-clear" onClick={props.handleClear} value= "" >Clear</button>
            
            <br />
            </div>
          </div>
        </div>
    )

}
export default CalculatorComponents