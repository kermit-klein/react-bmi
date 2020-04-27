import React, { Component } from "react";
import Form from "./components/Form";
import { calculateBmi } from "./helpers/bmihelper";
import "./App.css";

class App extends Component {
  state = {
    weight: "",
    height: "",
  };

  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = (e) => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.height,
      this.state.weight
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
      <div>
        <Form
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
}
export default App;
