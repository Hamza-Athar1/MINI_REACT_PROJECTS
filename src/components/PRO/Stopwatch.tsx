import { useState, useRef } from "react";
import "../Style/animations.css";
function Stopwatch() {
  const [timeh, setTimeh] = useState<number>(0);
  const [timem, setTimem] = useState<number>(0);
  const [times, setTimes] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  function startStopwatch() {
    setIsActive(true);
    intervalRef.current = window.setInterval(() => {
      setTimes((prevTimes) => {
        if (prevTimes === 59) {
          setTimem((prevTimem) => {
            if (prevTimem === 59) {
              setTimeh((prevTimeh) => prevTimeh + 1);
              return 0;
            }
            return prevTimem + 1;
          });
          return 0;
        }
        return prevTimes + 1;
      });
    }, 1000);
  }

  function stopStopwatch() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setIsActive(false);
  }

  function resetStopwatch() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setIsActive(false);
    setTimeh(0);
    setTimem(0);
    setTimes(0);
  }

  return (
    <div className={`fade-in`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">Stopwatch</h1>
          <p className="lead" style={{ textAlign: "center" }}>
            A stopwatch to measure the time between its activation and
            deactivation
          </p>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "clamp(60px, 15vw, 150px)" }}>
          {timeh.toString().padStart(2, "0") + " : "}
          {timem.toString().padStart(2, "0") + " : "}
          {times.toString().padStart(2, "0")}
        </p>
      </div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="bt1"
          style={{ marginRight: "10px" }}
          onClick={isActive ? stopStopwatch : startStopwatch}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <button
          style={{ marginRight: "10px" }}
          className="bt1"
          onClick={resetStopwatch}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
