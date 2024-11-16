import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    sessionStorage.clear()
    navigate("/login");
  }
  return (
    <div className="m-5">
      <div className="d-flex ms-auto">
        <h2>Dashboard</h2>
        <div className="ms-auto">
          <button className="btn btn-info mx-2" onClick={handleShow}>
            Add Item
          </button>
          <button className="btn btn-danger mx-2" onClick={handleLogout}>Log out</button>
        </div>
      </div>
      <div class="mt-5">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Art's Name</th>
              <th>Artist's Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Car</td>
              <td>Aman</td>
              <td><img width={'20px'} height={'20px'} src=""/></td>
              <td>600</td>
              <td>
                <button className="btn">
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Art</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <Form.Label className="mt-2">Art's Name</Form.Label>
            <Form.Control type="text" id="art-name" />
            <Form.Label className="mt-2">Artist Name</Form.Label>
            <Form.Control type="text" id="artist-name" />
            <Form.Label className="mt-2">Image Link</Form.Label>
            <Form.Control type="text" id="image-link" />
            <Form.Label className="mt-2">Price</Form.Label>
            <Form.Control type="number" id="price" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
