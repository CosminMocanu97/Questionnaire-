import React from "react";
import { Sublist } from "../interfaces/questionProps";
import Checkbox from "./checkboxInput";
import TextField from "./input";
import Radio from "./radioInput";

const Question = (props: Sublist) => {
  return (
    <React.Fragment>
      <p> {props.question} </p>
      {props.type === "input" && (
        <div className="inputContainer">
          <TextField value={props.value} onChange={props.onChange} placeholder="Example: John Doe" />
        </div>
      )}

      {props.type === "checkbox" && (
        <div className="checkboxContainer">
          {props.options.map((option, index) => (
            <Checkbox
              key={option}
              checked={props.state.includes(option)}
              label={props.options[index]}
              onChange={() => props.onChange(option)}
            />
          ))}
        </div>
      )}

      {props.type === "radio" && (
        <div className="radioContainer">
          {props.options.map((option, index) => (
            <Radio
              key={index}
              name={option}
              value={option}
              label={option}
              checked={props.state === option}
              onChange={props.onChange}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Question;
