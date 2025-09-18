import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Style/Counter.css";
import "../Style/animations.css";
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }
  function decrement() {
    setValue(value - 1);
  }

  return (
    <div className={`fade-in`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">Counter</h1>
          <p className="lead" style={{ textAlign: "center" }}>
            A counter to keep track of the number of times a button is clicked.
          </p>
        </div>
      </div>
      <div className="container-fluid" id="pcount">
        <p>{value}</p>
      </div>
      <div id="but" className="container-fluid">
        <button className="bt1" onClick={increment}>
          Increment
        </button>
        <button className="bt1" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
export default Counter;
