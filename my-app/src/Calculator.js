import React from 'react'
import CalculatorComponents from "./components/CalculatorComponents"
import Input from "./components/Input"
import * as math from "mathjs"
 class Calculator extends React.Component{
     constructor(){
         super ()
         this.state = {
             display:"",
         }
         this.handleClick = this.handleClick.bind(this)
         this.handleEqual = this.handleEqual.bind(this)
     }
     handleClick(event){
         const{value} = event.target
         if(this.state.display.length < 10){
         this.setState(prevState=>{
             return{
            display: prevState.display + value 
             }
          })
        }
        else{
            alert("You have reached the max character limit!")
            this.setState(prevState => {return{display: prevState.display}})
        }

     }
     handleEqual(){
        if(math.evaluate(this.state.display).toString().length > 10){
            const new_display =  math.evaluate(this.state.display).toString()
            var string = new_display.substring(0,10);
         this.setState({display : string})
        }else {
            this.setState({display : math.evaluate(this.state.display)})
        }
     }

     handleClear = () => {
         this.setState({display:""})
     }
     
    render(){
        return(
            <div>
                <Input display = {this.state.display} />
                <CalculatorComponents handleClear = {this.handleClear} handleEqual={this.handleEqual}handleClick = {this.handleClick} data={this.state}/>
            </div>
        )
    }
}
export default Calculator