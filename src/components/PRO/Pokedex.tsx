import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "../Style/animations.css";
function Pokedex() {
  const [Poke, setPoke] = useState("pikachu");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (loading) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${Poke}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Pokemon not found");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setError(null);
        })
        .catch((error) => {
          setData(null);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, Poke]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoke(e.target.value.toLowerCase());
  };

  function load() {
    if (loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    } else {
      return (
        <button
          className="bt1"
          onClick={() => setLoading(true)}
          style={{ borderRadius: "50px", marginLeft: "-25px" }}
        >
          Check
        </button>
      );
    }
  }

  const handleData = () => {
    if (data) {
      return (
        <>
          <div
            className="jumbotron jumbotron-fluid"
            style={{ marginTop: "20px" }}
          >
            <div className="container-fluid">
              <h1 className="display-4">{data.name.toUpperCase()}</h1>
              <p className="lead" style={{ textAlign: "center" }}>
                {"ID: " + data.id}
              </p>
            </div>
          </div>

          <div
            className="container-fluid"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={data.sprites.front_default}
              alt={data.name}
              style={{ width: "80%", maxWidth: "400px" }}
            />
          </div>

          <div
            className="container-fluid"
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <h2>Abilities</h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {data.abilities.map((ability: any, index: number) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Types</h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {data.types.map((type: any, index: number) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );
    } else if (error) {
      return (
        <div
          className="jumbotron jumbotron-fluid"
          style={{ marginTop: "30px" }}
        >
          <div className="container-fluid">
            <h1 className="display-4">Pokemon Not Found</h1>
            <p className="lead" style={{ textAlign: "center" }}>
              Recheck spelling or try another pokemon
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`fade-in`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">Pokedex</h1>
          <p className="lead" style={{ textAlign: "center" }}>
            Search your pokemon by its name or number
          </p>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <input
          type="text"
          className="inp"
          placeholder="Search Pokemon"
          onChange={handleInput}
        />
        {load()}
      </div>
      {handleData()}
    </div>
  );
}

export default Pokedex;
