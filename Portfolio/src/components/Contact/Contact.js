import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Optional background particle effect

function Contact() {
    return (
        <Container fluid className="Contact-section" style={{ paddingTop: "70px" }}>
            <Container>
                <h1
                    className="contact-heading text-center mb-5"
                    style={{
                        fontSize: "2.5rem",
                        color: "#343a40",
                        marginBottom: "40px",
                    }}
                >
                    Get in <strong style={{ color: "#6c63ff" }}>Touch</strong>
                </h1>

                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div
                            style={{
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                padding: "20px",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    color: "#6c63ff",
                                    marginBottom: "20px",
                                }}
                            >
                                We'd love to hear from you! Please fill out the form below, and
                                we'll get back to you as soon as possible.
                            </p>

                            {/* Responsive iframe container */}
                            <div style={{ position: "relative", width: "100%", paddingBottom: "150%" }}>
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSfZVH11xYp1JPVct7Hmz-QjdzYwmMQp5nOLNepy4iweBMMNrA/viewform?embedded=true"
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        border: "0",
                                    }}
                                    title="Google Form"
                                >
                                    Loading…
                                </iframe>
                            </div>

                            <Particle />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
