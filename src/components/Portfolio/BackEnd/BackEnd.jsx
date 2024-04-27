import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";



import Notes from "../../../assets/images/Portfolio/Notes.png";
import Desk from "../../../assets/images/Portfolio/Desk.png";
import Horizen from "../../../assets/images/Portfolio/Horizen.png";
import SVG from "../../../assets/images/Portfolio/SVG.png";
import README from "../../../assets/images/Portfolio/README.png";
import JATE from "../../../assets/images/Portfolio/JATE.png";

const cardData = [
  {
    id: 1,
    title: "FORGET-ME-NOTES",
    text: " Forget-Me-NOTES is a note taking application used to WRITE, SAVE and DELETE tasks we can't afford to forget...",
    githubLink: "https://github.com/carolwargo/forget-me-NOTES",
    link: "https://forget-me-note-taker.herokuapp.com/",
    image: Notes,
  },
  {
    id: 2,
    title: "DESK-JOCKEY-DAYPLANNER",
    text: "Desk-Jockey-Dayplanner is a calendar application that allows a User to save events, for each hour of the work day...",
    githubLink: "https://carolwargo.github.io/Desk_Jockey-dayplanner/",
    link: "https://www.example.com",
    image: Desk,
  },

  {
    id: 3,
    title: "HORIZEN-CODE-REFACTOR",
    text: "The refactor was implemented to follow WCAG accessibility standards, optimize search engines & limit liability...",
    githubLink: "https://carolwargo.github.io/Code-Refactor-Horisen/",
    link: "https://github.com/carolwargo/Code-Refactor-Horisen",
    image: Horizen,
  },

  {
    id: 4,
    title: "SV.GENIE",
    text: "SV.Genie is a Node.js CLI that takes in user input, such as color, shape & text to generate a logo & save it as an SVG file...",
    githubLink: "https://github.com/carolwargo/SV-Genie",
    link: "https://github-production-user-asset-6210df.s3.amazonaws.com/84477950/243877758-2f1526f8-e92b-4211-9efb-d7c87e234701.webm",
    image: SVG,
  },

  {
    id: 5,
    title: "README-GENERATOR",
    text: "README-Generator takes in User input to generate a well-structured README.md file saving time for developers...",
    githubLink: "https://github.com/carolwargo/09-README-generator",
    link: "https://www.example.com",
    image: README,
  },

  {
    id: 6,
    title: "TEXT-EDITOR-IN-CHIEF",
    text: "Text_Editor-In-Chief is a browser-based text editor that allows Users to create and edit text documents seamlessly...",
    githubLink: "https://github.com/carolwargo/Text_Editor-in-Chief",
    link: "https://www.example.com",
    image: JATE,
  },
];

export default function PortfolioItems() {
  return (
    <div>
      {/* START of "COMPLETED" ROW */}
      <Row>
        <div>
          {/*COMPLETED CARDS START */}
          <Row className="card-row " style={{ margin: "auto", padding:"1rem" }}>
            {cardData.map((card) => (
              <Col
                className="card-col"
                key={card.id}
                md={4}
                style={{
                  backgroundColor: "black",
                }}
              >
                <Card
                  className="mb-4"
                  style={{
                    backgroundColor: "#292828",
                    textAlign: 'center',
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                 
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body style={{ backgroundColor: "#3d3d3d" }}>
                  <Card.Title style={{ color: "#E1E1E1", fontFamily:'poppins', textDecoration:'underline' }}>
                    {card.title}
                  </Card.Title>
                    <Card.Text
                      style={{
                        fontFamily: "poppins",
                        textAlign: 'center',
                        fontSize: ".9rem",
                        
                      }}
                    >
                      {card.text}
                    </Card.Text>
                    <Button
                      className="button w3-round-xlarge"
                      variant="primary"
                      href={card.githubLink}
                      size="md"
                      style={{
                        fontFamily: "poppins",
                        backgroundColor: "#000000",
                        color: "#E1E1E1",
                        borderColor: "#E1E1E1",
                      }}
                    >
                      <FaGithub /> Github
                    </Button>
                    <Button
                      variant="link"
                      href={card.link}
                      target="_blank"
                      className="text-light"
                    >
                      App Function
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Row>
      {/* END IN PROGRESS ROW */}
    </div>
  );
}
