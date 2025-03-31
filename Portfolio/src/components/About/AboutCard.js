import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Aishwarya Gangad</span>
            from <span className="purple"> Pune, India.</span>
            <p>
          A passionate and dedicated final-year Electronics and Telecommunication student at Sinhgad College of Engineering, batch of 2025. With a strong foundation in coding and a keen interest in electronics and hardware-related fields, I thrive on learning new skills and creating innovative projects.
        </p>
        
        <h3>Education</h3>
        <p>
          - Sinhgad College of Engineering - Bachelor of Engineering in Electronics and Telecommunication (2025)
        </p>
        
        <h3>Professional Experience</h3>
        <p>
          - Java Developer Intern: Gained hands-on experience in Java development, worked on multiple projects, and learned to write efficient and scalable code.
        </p>
        
        <h3>Other Interests</h3>
        <p>
          Apart from coding, some other activities that I love to do!
        </p>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
