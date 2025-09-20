import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/animations.css";
function RandomJoke() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => {
          setJoke(data.value);
          setLoading(false);
        });
    }
  }, [loading]);

  function load() {
    if (loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    } else
      return (
        <button className="bt1" onClick={() => setLoading(true)}>
          Get Joke
        </button>
      );
  }

  return (
    <div className={`fade-in`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">Random Joke</h1>
          <p
            className="lead"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              textAlign: "center",
            }}
          >
            Generates a random joke from the Chuck Norris API.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <h1>{joke}</h1>
        <p></p>
      </div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        {load()}
      </div>
    </div>
  );
}
export default RandomJoke;
