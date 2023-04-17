import React, {useState}from "react";

import './CourseInput.css';


 const Courseinput = (props) => {
     const [enteredValue, setEnteredValue] = useState("");

     const goalInputChangeHandler = (event) => {
       setEnteredValue(event.target.value);
     };

     const formSubmitHandler = (event) => {
       event.preventDefault();
       props.onAddGoal(enteredValue);
     };

    return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>Course Goal</label>
          <input type=" text" onChange={goalInputChangeHandler} />
        </div>
        <button type="submit">Add Goal</button>
      </form>
    );
};

export default Courseinput;