import React, { Component } from 'react'

export default class Keypad extends Component {
    render() {
        return (
            <div className="button">

                <button className="±" onClick={e => this.props.onClick(e.target.className)}>±</button>
                <button className="CE" onClick={e => this.props.onClick(e.target.className)}>CE</button>
                <button className="C" onClick={e => this.props.onClick(e.target.className)}>C</button><br/>

                <button className="1" onClick={e => this.props.onClick(e.target.className)}>1</button>
                <button className="2" onClick={e => this.props.onClick(e.target.className)}>2</button>
                <button className="3" onClick={e => this.props.onClick(e.target.className)}>3</button>
                <button className="+" onClick={e => this.props.onClick(e.target.className)}>+</button><br/>

                <button className="4" onClick={e => this.props.onClick(e.target.className)}>4</button>
                <button className="5" onClick={e => this.props.onClick(e.target.className)}>5</button>
                <button className="6" onClick={e => this.props.onClick(e.target.className)}>6</button>
                <button className="-" onClick={e => this.props.onClick(e.target.className)}>-</button><br/>

                <button className="7" onClick={e => this.props.onClick(e.target.className)}>7</button>
                <button className="8" onClick={e => this.props.onClick(e.target.className)}>8</button>
                <button className="9" onClick={e => this.props.onClick(e.target.className)}>9</button>
                <button className="*" onClick={e => this.props.onClick(e.target.className)}>x</button><br/>

                <button className="." onClick={e => this.props.onClick(e.target.className)}>.</button>
                <button className="0" onClick={e => this.props.onClick(e.target.className)}>0</button>
                <button className="=" onClick={e => this.props.onClick(e.target.className)}>=</button>
                <button className="/" onClick={e => this.props.onClick(e.target.className)}>÷</button><br/>
                
            </div>
        )
    }
}
