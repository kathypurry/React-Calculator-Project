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
