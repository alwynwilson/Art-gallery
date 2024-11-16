import React from "react";
import Header from "../components/Header";
import { Row, Col, Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div>
        <h3 className="text-center mt-5">Our Artwork Collections</h3>
        <Row>
          <Col className="mb-4" sm={12} md={6} lg={4}>
            <div className="m-5 shadow" style={{ background: "grey" }}>
              <Card className="bg-dark p-3 rounded-3">
                <Card.Img height={"300px"} variant="top" src="" />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <p className="text-light">detaisl</p>
                    <button className="btn">
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LandingPage;
