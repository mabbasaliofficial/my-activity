import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-container">
      <h1>How does React work?</h1>
      <p>
        ReactJS divides the UI into isolated reusable pieces of code known as components. React
        components work similarly to JavaScript functions as they accept arbitrary inputs called
        properties or props. It's possible to have as many components as necessary without
        cluttering your code.
      </p>
      <h1>What is the difference between props and state</h1>
      <p>
        <b>Props : </b>The Data is passed from one component to another. It is Immutable (cannot be
        modified). Props can be used with state and functional components. Props are read-only.
      </p>
      <p>
        <b>State : </b> The Data is passed within the component only. It is Mutable ( can be
        modified). State can be used only with the state components/class component (Before 16.0).
        State is both read and write.
      </p>
      <h1>What does the use effect do without data loading?</h1>
      <p>
        The useEffect Hook allows you to perform side effects in your components. Some examples of
        side effects are without data loading :directly updating the DOM, and timers. useEffect accepts
        two arguments. The second argument is optional.
      </p>
    </div>
  );
};

export default Question;
