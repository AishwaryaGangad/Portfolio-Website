import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

const blogs = [
 
  {
    title: "To-Do List App",
    description:
      "A Flutter-based application for task management, featuring dynamic task creation and display using cards.",
    link: "#", // Add your blog link or GitHub link here
  },
];

function Blogs() {
  return (
    <Container
      fluid
      className="Blogs-section"
      style={{ paddingTop: "70px",paddingBottom: "150px" }} // Adding padding to the top
    >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs & Projects</strong>
        </h1>
        <Row>
          {blogs.map((blog, index) => (
            <Col md={4} key={index} className="blog-card">
              <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
