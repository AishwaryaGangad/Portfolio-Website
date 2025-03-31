import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import editor from "../../Assets/Projects/codeEditor.png";

import Splash from "../../Assets/Projects/Splash.jpg";
import Empser from "../../Assets/Projects/Empser.png";
import prt from "../../Assets/Projects/prt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Splash}
              isBlog={false}
              title="College Finder"
              description="The College Finder application is designed to help students find suitable colleges based on their scores and preferences. It matches
students' academic performance with college admission criteria to suggest the best-fit colleges."
              ghLink="https://github.com/Prathmesh3177/College-Finder.git"
              demoLink="https://github.com/Prathmesh3177/Employee-management-system.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Empser}
              isBlog={false}
              title="Employee Service"
              description="This project is a full-stack application for managing employee information. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on employee data including name, phone, and email. The front-end is developed using React JS, while the back-end is built with Spring Boot. An SQL database is used to store the employee data."
              ghLink="https://github.com/Prathmesh3177/Employee-management-system.git"
              demoLink="https://github.com/Prathmesh3177/Employee-management-system.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Electricit Billing System"
              description="The electricity billing system application is designed to manage and automate the billing process for an electricity utility company. It
allows for efficient handling of customer data, electricity consumption records, and billing details"
              ghLink="https://github.com/Prathmesh3177/Electricity-Billing-System.git"
              demoLink="https://github.com/Prathmesh3177/Electricity-Billing-System.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prt}
              isBlog={false}
              title="Portfoilo"
              description=""
              ghLink="https://github.com/Prathmesh3177"
              demoLink="https://github.com/Prathmesh3177"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
