import React from "react";

const Form = (props) => {
  const placeholder_w = props.imperial ? "Weight in lbs" : "Weight in kg";
  const placeholder_h = props.imperial ? "Height in inch" : "Height in cm";

  return (
    <div className="ui container">
      <h1>The Ultimate BMI Calculator</h1>
      <form class="ui form" onSubmit={props.onSubmitHandler}>
        <div class="field">
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
        </div>
        <div class="field">
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
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input
              type="checkbox"
              id="imperial"
              name="imperial"
              onChange={props.onChangeCheck}
            />
            <label>Use imperial units</label>
          </div>
        </div>
        <button id="calculate" class="ui button" type="submit">
          Calculate BMI
        </button>
      </form>
    </div>
  );
};

export default Form;
