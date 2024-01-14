import React from "react";
import "./formInput.scss";
function FormInput({ labelName, optionInput }) {
  // console.log("length",optionInput.value.length)
  return (
    <div className="group">
      <input className="form-input" {...optionInput} />

      <label
        className={`form-input-label ${
          optionInput?.value?.length ? "shrink" : ""
        } `}
      >
        {labelName}
      </label>
    </div>
  );
}
export default FormInput;
