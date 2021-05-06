import React, { Component } from 'react'

export default class CalcResults extends Component {
    constructor() {
        super() 

        this.state = {
            result : "0"
        }
        
    }
    formattedDisplay = () => {
        const { display } = this.state.result
        return display.toLocaleString() 
    }
    
    
    
    render() {
        let { result } = this.props
        return (
            <div className="result">
                
                <p>{result.toLocaleString()}</p>
                
            </div>
        )
    }
}
