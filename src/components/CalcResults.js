import React, { Component } from 'react'

export default class CalcResults extends Component {
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
