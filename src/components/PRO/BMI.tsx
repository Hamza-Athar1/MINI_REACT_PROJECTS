import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Style/BMI.css";
import "../Style/animations.css";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function BMI() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("Result");

  function handleHeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const heightValue = parseInt(event.target.value);
    setHeight(heightValue);
  }

  function handleWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const weightValue = parseInt(event.target.value);
    setWeight(weightValue);
  }

  function calc() {
    if (height > 0 && weight > 0) {
      const bmi = parseInt((weight / (height / 100) ** 2).toFixed(2));

      setModalTitle("BMI Result");
      if (bmi < 18.5)
        setModalContent(`Your BMI is ${bmi}. You are UNDERWEIGHT.`);
      else if (bmi >= 18.5 && bmi < 24.9)
        setModalContent(`Your BMI is ${bmi}. You are NORMAL.`);
      else if (bmi >= 24.9 && bmi < 29.9)
        setModalContent(`Your BMI is ${bmi}. You are OVERWEIGHT.`);
      else if (bmi >= 29.9)
        setModalContent(`Your BMI is ${bmi}. You are OBESE.`);
      else setModalContent(`Your BMI is ${bmi}`);
    } else {
      setModalTitle("Invalid Input");
      setModalContent("Please enter valid height and weight values.");
    }
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div className={`fade-in`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">BMI Index</h1>
          <p className="lead" style={{ textAlign: "center" }}>
            A BMI scale used to measure the body fat based on height and weight.
          </p>
        </div>
      </div>
      <div className="container-fluid" id="form" style={{ marginTop: "50px" }}>
        <label htmlFor="in1">Height: </label>
        <input
          className="inp"
          placeholder="Cm"
          id="in1"
          type="number"
          onChange={handleHeightChange}
          style={{ marginBottom: "10px" }}
        />
        <label htmlFor="in2">Weight: </label>
        <input
          className="inp"
          placeholder="Kg"
          id="in2"
          type="number"
          onChange={handleWeightChange}
        />
        <br />
      </div>
      <div className="container-fluid" id="result">
        <button id="bt1" onClick={calc} style={{ marginTop: "-20px" }}>
          Calculate
        </button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BMI;
