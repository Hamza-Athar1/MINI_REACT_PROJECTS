import React, { useState, useEffect } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import "../Style/animations.css";
function Weather() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (loading) {
      fetchData();
    }
  }, [loading]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_KEY
        }&q=${country || "Pakistan"}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => setShowModal(false);

  const handleCountryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const load = () => {
    if (loading) {
      return <Spinner animation="border" variant="primary" />;
    }
    if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
    }
    if (data) {
      return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <h1 className="display-4">{data.location.name}</h1>
            <p className="lead" style={{ textAlign: "center" }}>
              {data.location.country}
            </p>
            <p>{data.current.temp_c}°C</p>
            <img src={data.current.condition.icon} alt="weather icon" />
            <p>{data.current.condition.text}</p>
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
          <h1 className="display-4">Weather</h1>
          <p
            className="lead"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            Enter a country or city to get current weather information
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
          placeholder="Enter country or city"
          className="inp"
          onChange={handleCountryInput}
          style={{
            width: "80%",
            maxWidth: "300px",
            textAlign: "center",
            marginRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        />
        <button
          className="bt1"
          onClick={() => setLoading(true)}
          style={{ borderRadius: "50px", width: "150px" }}
        >
          Get Weather
        </button>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>{load()}</div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {"Unknown error occurred! Check your api key or internet connection"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Weather;
