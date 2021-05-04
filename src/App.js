import './App.css';
import React from 'react'
import Keypad from './components/Keypad'
import CalcResults from './components/CalcResults'

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {
      if (button === "="){
        this.calculate()
      }

      else if (button === "C") {
        this.reset()
      }

      else if (button === "CE") {
        this.backspace()
      }

      else {
        this.setState({
          result: this.state.result + button
        })
      }
    }

    calculate = () => {
      this.setState({
        result : (eval(this.state.result) || "") + ""
      })
    }

    reset = () => {
      this.setState ({
        result: ""
      })
    }

    backspace = () => {
      this.setState({
        result: this.state.result.slice(0,-1)
      })
    }

    render() {
        return (
                <div className="calculator-body">
                    <h2>basic betty calculator</h2>
                    <CalcResults result={this.state.result}/>
                    <Keypad onClick={this.onClick}/>
                </div>
        );
    }
}


export default App;
