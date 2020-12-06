import React, { Component } from "react";
import FirstComponent from "./components/learning-components/FirstComponent";
import SecondComponent from "./components/learning-components/SecondComponent";
import ThirdComponent from "./components/learning-components/ThirdComponent";
import Counter from "./components/counters/Counter";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter> </Counter>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="learningComponents">
        <FirstComponent> </FirstComponent> 
        <SecondComponent> </SecondComponent>
        <SecondComponent> </SecondComponent>
        <ThirdComponent> </ThirdComponent>
      </div>
    );
  }
}

export default App;
