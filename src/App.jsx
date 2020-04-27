import React, { Component } from "react";
import Form from "./components/Form";
import { calculateBmi } from "./helpers/bmihelper";
import Message from "./components/Message";
import "./App.css";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    imperial: false,
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height,
      this.state.imperial
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  onChangeCheck = () => {
    this.setState({ imperial: !this.state.imperial });
  };

  render() {
    return (
      <div id="bmiform">
        <Form
          weight={this.state.weight}
          height={this.state.height}
          imperial={this.state.imperial}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          onChangeCheck={this.onChangeCheck}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    );
  }
}
export default App;
