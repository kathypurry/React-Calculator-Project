import React, { Component } from 'react'

export default class Keypad extends Component {
    render() {
        return (
            <div className="button">

                <button class="±" onClick={e => this.props.onClick(e.target.class)}>±</button>
                <button class="CE" onClick={e => this.props.onClick(e.target.class)}>CE</button>
                <button class="C" onClick={e => this.props.onClick(e.target.class)}>C</button><br/>

                <button class="1" onClick={e => this.props.onClick(e.target.class)}>1</button>
                <button class="2" onClick={e => this.props.onClick(e.target.class)}>2</button>
                <button class="3" onClick={e => this.props.onClick(e.target.class)}>3</button>
                <button class="+" onClick={e => this.props.onClick(e.target.class)}>+</button><br/>

                <button class="4" onClick={e => this.props.onClick(e.target.class)}>4</button>
                <button class="5" onClick={e => this.props.onClick(e.target.class)}>5</button>
                <button class="6" onClick={e => this.props.onClick(e.target.class)}>6</button>
                <button class="-" onClick={e => this.props.onClick(e.target.class)}>-</button><br/>

                <button class="7" onClick={e => this.props.onClick(e.target.class)}>7</button>
                <button class="8" onClick={e => this.props.onClick(e.target.class)}>8</button>
                <button class="9" onClick={e => this.props.onClick(e.target.class)}>9</button>
                <button class="*" onClick={e => this.props.onClick(e.target.class)}>x</button><br/>

                <button class="." onClick={e => this.props.onClick(e.target.class)}>.</button>
                <button class="0" onClick={e => this.props.onClick(e.target.class)}>0</button>
                <button class="=" onClick={e => this.props.onClick(e.target.class)}>=</button>
                <button class="/" onClick={e => this.props.onClick(e.target.class)}>÷</button><br/>
                
            </div>
        )
    }
}
