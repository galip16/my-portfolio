import React from "react";
import "./Welcome.scss";
import { Card, Container } from "react-bootstrap";
import developerLogo from "./developer.gif";

function Welcome() {
  return (
    <>
      <div className="welcome">
        <Container>
          <Card bg="white" className="welcome__items">
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem", marginTop: "2vh" }}>
                Fullstack Web Developer
              </Card.Title>
              <Card.Subtitle className="m-4 text-muted">
                . . . Galip SAVUT . . .
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "2rem" }}>
                I code pretty simple things and find solutions to problems using
                my creativity. <br /> <b> I love what I do. </b>
              </Card.Text>
              <Card.Img
                variant="top"
                className="welcome__logo"
                src={developerLogo}
              />
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Welcome;
