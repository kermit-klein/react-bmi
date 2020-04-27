import React from "react";

const Form = (props) => {
  const placeholder_w = props.imperial ? "Weight in lbs" : "Weight in kg";
  const placeholder_h = props.imperial ? "Height in inch" : "Height in cm";

  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder={placeholder_w}
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder={placeholder_h}
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <input
        type="checkbox"
        id="imperial"
        name="imperial"
        onChange={props.onChangeCheck}
      />
      <label>imperial</label>
      <br />
      <button id="calculate">Calculate BMI</button>
    </form>
  );
};

export default Form;
