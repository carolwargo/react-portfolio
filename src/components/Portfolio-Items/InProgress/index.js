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

          padding: "2rem",
          borderRadius: "5px",
        }}
      >
        <div>
          <Card
            style={{
              backgroundColor: "#292828",
              padding: "1rem",
              color: "white",
            }}
          >
            {/*<Card.Img variant="top" src="your-image-url-here" />*/}
            <Card.Body style={{ backgroundColor: "#3d3d3d", padding: "2rem" }}>
              <Card.Title>#van-life</Card.Title>
              <Card.Text>
                <strong>DESCRIPTION:</strong> "van-life" is a full-stack
                application that allows users to advertise vans for rental;
                Users can create a profile, post their van for sale, view their
                dashboard, or simply search for vans to rent. "Nesting" creates a hierarchy of routes that allows for more granular control over different sections or components of the application, which can lead to a more organized and efficient user interface.
                <br></br>
                <strong>MOTIVATION:</strong> To gain intimate knowledge of
                Router 6 navigation, routing & rendering- Specifically nested
                route layouts using APIs coupled to URL segments and data.
                <br></br>
                <strong>PURPOSE & INTENT:</strong> "The goal is to implement
                React Router6 Nesting strategies in projects with intricate user
                interfaces and multi-level navigation to optimize user
                experience by efficiently managing data retrieval."{" "}
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
        </div>
        <div>
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
                <strong>DESCRIPTION:</strong> "Contacts-router6" uses a
                client-side routing system for React applications. This functionality is made possible by React's
                "react-router-dom" library provides the tools needed to allow
                navigation between different views or components based on the
                URL. Each route is associated with specific components & logic
                for rendering and handling user interactions.
                <br></br>
                <strong>MOTIVATION:</strong> To create a versatile "staple component" that can be easily utilized in future projects. That also allow for adaptable style variations to suit specific applications.
<br></br>

                <strong>PURPOSE & INTENT:</strong> Future implementation in
                projects to provide end-users, streamlined contact data
                retrieval, through efficient & intuitive client-side routing
                strategies."
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
        </div>
      </Row>
    </div>
  );
}
