import React, { Component } from "react";

export default class CalcResults extends Component {


  render() {
    let result = String(this.props.result);
    let operation;
    if (result.includes("+")) {
      operation = "+";
    } else if (result.includes("-")) {
      operation = "-";
    } else if (result.includes("*")) {
      operation = "*";
    } else if (result.includes("/")) {
      operation = "/";
    }

    let resultArr = result.split(operation);
    console.log(resultArr);

    let newResultArr = resultArr.map((num) => {
      return Number(num).toLocaleString();
    });

    return (
      <div className="result">
        <p>{newResultArr.join(operation)}</p>
      </div>
    );
  }
}

//number 0 is showing up after operation is pressed
//when console.logged, it shows up as a new index
//have to figure out how to cancel