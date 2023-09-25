import React from "react";

import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default function InProgress() {
  return (
    <div className="in-progress ">
      <Row
        xs={1}
        md={2}
        className="g-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          borderRadius: "5px",
        }}
      >
        <Card
          style={{
            backgroundColor: "#292828",
            padding: "18px",
            color: "white",
          }}
        >
          {/*<Card.Img variant="top" src="your-image-url-here" />*/}
          <Card.Body style={{ backgroundColor: "#3d3d3d", padding: "2rem" }}>
            <Card.Title>#van-life</Card.Title>
            <Card.Text>
              <strong>DESCRIPTION:</strong> "van-life" is a full-stack
              application that allows users to create a profile, post their van
              for sale,view their dashboard, or simply search for vans to rent.
              The application utilizes all the benefits of React Router6 "Nested
              Routes", eliminating the need of a backend server.
              <br></br>
              <strong>MOTIVATION:</strong> To gain intimate knowledge of Router
              6 navigation, routing & rendering- Specifically nested route
              layouts using APIs coupled to URL segments and data.
              <br></br>
              <strong>PURPOSE & INTENT:</strong> "The goal is to implement React
              Router6 Nesting strategies in projects with intricate user
              interfaces and multi-level navigation to optimize user experience
              by efficiently managing data retrieval."{" "}
            </Card.Text>
            <Button
              className="button"
              variant="primary"
              href={"https://github.com/carolwargo/van-life"}
              size="md"
              style={{
                fontFamily: "poppins",
                backgroundColor: "#000000",
                color: "#E1E1E1",
                borderColor: "#E1E1E1",
              }}
            >
              <FaGithub /> Github Repo
            </Button>
            <Button
              variant="link"
              href={"https://github.com/carolwargo/van-life"}
              target="_blank"
              className="text-light"
            >
              View Code
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            backgroundColor: "#292828",
            padding: "18px",
            color: "white",
          }}
        >
          {/*<Card.Img variant="top" src="your-image-url-here" />*/}
          <Card.Body style={{ backgroundColor: "#3d3d3d", padding: "2rem" }}>
            <Card.Title>Contacts-Router6</Card.Title>
            <Card.Text>
              <strong>DESCRIPTION:</strong>"Contacts-router6" utilizes a
              client-side routing system for a React application, allowing it to
              navigate between different views or components based on the URL.
              Each route is associated with specific components and logic for
              rendering and handling user interactions. The react-router-dom
              library provides the necessary tools to achieve this client-side
              routing functionality
              <br></br>
              <strong>MOTIVATION: </strong> A Router 6 "Staple Component" that
              can be used for multiple projects with style varations,
              eliminating repetition of function.
              <br></br>
              <strong>PURPOSE & INTENT:</strong> Future implementation in
              projects to provide end-users, streamlined contact data retrieval,
              through efficient & intuitive client-side routing strategies."
            </Card.Text>
            <Button
              className="button"
              variant="primary"
              href={"https://github.com/carolwargo/van-life"}
              size="md"
              style={{
                fontFamily: "poppins",
                backgroundColor: "#000000",
                color: "#E1E1E1",
                borderColor: "#E1E1E1",
              }}
            >
              <FaGithub /> Github Repo
            </Button>
            <Button
              variant="link"
              href={"https://github.com/carolwargo/van-life"}
              target="_blank"
              className="text-light"
            >
              View Code
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}
