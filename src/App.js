import './App.css';
import React from 'react'
import Keypad from './components/Keypad'
import CalcResults from './components/CalcResults'

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            result: "0" ,
            pressedEqual : false,
        }
    }


    onClick = button => {
      if (button === "="){
        this.setState({
          pressedEqual : true,
        })
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

        //When numbers are pressed, this code is triggered.
      else {
        if (this.state.result ==="0" || this.state.pressedEqual ){
          this.setState ({
            result : button,
            pressedEqual: false,
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
        console.log(typeof this.state.result)
        mathResult = eval(this.state.result)
        console.log(typeof mathResult)
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
