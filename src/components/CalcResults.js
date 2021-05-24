import React, { Component } from 'react'

export default class CalcResults extends Component {
    // There's no need for this component to have state... it's being passed the result as a prop!
    // You can skip putting it in state and formatting that state. You're doing a great job by
    // simply formatting the prop using `.toLocaleString`.
    constructor() {
        super() 

        // this.state = {
        //     result : "0"
        // }
        
    }
    // formattedDisplay = () => {
    //     const { display } = this.state.result
    //     return display.toLocaleString() 
    // }
    
    
    
    render() {
        let { result } = this.props
        // let resultToDisplay;
        // if (result.includes("+")) {
        //     resultToDisplay = result
        // }
        // else { 
        //     resultToDisplay = Number(result).toLocaleString()
        // }
        return (
            <div className="result">
            
                <p>{result.toLocaleString()}</p>
                
            </div>
        )
    }
}
