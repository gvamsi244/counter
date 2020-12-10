import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <h1> Counter Machine </h1>
        <table cellSpacing="0px" className="buttonGridTable">
          <tr>
            <td> <CounterButton by={+1} incrementMethod={this.increment}> </CounterButton> </td>
            <td> <CounterButton by={-1} incrementMethod={this.increment}> </CounterButton> </td>
          </tr>

          <tr>
            <td> <CounterButton by={+5} incrementMethod={this.increment}> </CounterButton> </td>
            <td> <CounterButton by={-5} incrementMethod={this.increment}> </CounterButton> </td>
          </tr>

          <tr>
            <td> <CounterButton by={+10} incrementMethod={this.increment}> </CounterButton> </td>
            <td> <CounterButton by={-10} incrementMethod={this.increment}> </CounterButton> </td>
          </tr>

          <tr>
            <td> <CounterButton by={+50} incrementMethod={this.increment}> </CounterButton> </td>
            <td> <CounterButton by={-50} incrementMethod={this.increment}> </CounterButton> </td>
          </tr>

          <tr>
            <td> <CounterButton by={+100} incrementMethod={this.increment}> </CounterButton> </td>
            <td> <CounterButton by={-100} incrementMethod={this.increment}> </CounterButton> </td>
          </tr>
          <div><br /></div>
          <span className="countDisplayField"> {this.state.counter} </span>
          <div>
            <br/>
            <button className="resetButton" onClick={this.reset}> Reset </button>
          </div>
        </table>
        <div><br /></div><div><br /></div>
        <footer className="copyRightsFooter"> &copy; Copyright 2020-2022 by Vamsi. All Rights Reserved.</footer>

      </div>
    );
  }

  increment(by) {
    console.log(`Inside increment method ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }

  reset(){
    console.log("Entered Reset Method");
    this.setState({ counter:0})
  }
}

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }
  //Define initial state in a constructor
  render() {
    return (
      <div className="counterButton">
        <br></br>
        <br></br>
        <button onClick={this.increment}> {this.props.by} </button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.by,
    });
    this.props.incrementMethod(this.props.by);
  }
}


Counter.defaultProps = {
  by: 1,
};
Counter.propTypes = {
  by: PropTypes.number,
};
export default Counter;
