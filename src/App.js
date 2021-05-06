import './App.css';
import React from 'react'
import Keypad from './components/Keypad'
import CalcResults from './components/CalcResults'

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            result: "0"
        }
    }


    onClick = button => {
      if (button === "="){
        this.calculate()
        }
      

      else if (button === "C") {
        this.setState ({
          result : "0"
        })
      }

      else if (button === "CE") {
        this.setState ({
          result : this.state.result.slice(0,-1)
        })
      }

      else if (button === "±") {
        this.setState({result : this.state.result * -1})

      }

      else {
        if (this.state.result ==="0"){
          this.setState ({
            result : button
          })
        } else {
          this.setState({
            result : this.state.result + button
          })
        }
      }
    }

    calculate = () => {
      let mathResult
      try{
        mathResult = eval(this.state.result)
      } catch (e) {
        mathResult = "0"
        alert("ERROR")
      }
      this.setState({
        result : mathResult
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
