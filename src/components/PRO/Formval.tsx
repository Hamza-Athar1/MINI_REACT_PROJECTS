import { useState } from "react";
import "../Style/BMI.css";
import "../Style/animations.css";
import "bootstrap/dist/css/bootstrap.min.css";
import validator from "validator";
import { Modal, Button } from "react-bootstrap";

function FormVal() {
  const [mail, setMail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleClose = () => setShowModal(false);

  const valid = () => {
    console.log(mail);
    if (mail !== "" && validator.isEmail(mail)) {
      setModalContent("Valid Email");
    } else {
      setModalContent("Invalid Email");
    }
    setShowModal(true);
  };

  return (
    <div className={`fade-in`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">Form Validation</h1>
          <p
            className="lead"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            An email checker for validating email addresses.
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form-container"
      >
        <div
          className="input-button-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            className="inp"
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <button
            className="bt1"
            onClick={valid}
            style={{ borderRadius: "50px", marginLeft: "-25px" }}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Render the modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Result</Modal.Title>
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

export default FormVal;
