import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/crud.PNG";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Redux.png";
import chatify from "../../Assets/Projects/zenclass.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/forgot.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Guvi Zenclass Model (MERN Stack)"
              description="I designed a Guvi Zen class model with sign-in features, allowing access to various classes and related resources. This project enhances the online learning experience by integrating essential class functionalities."
              ghLink="https://github.com/SetSat/FrontEnd.git"
              ghLink2="https://github.com/SetSat/BackEnd.git"
              demoLink="https://zenclassbysetsat.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Email OTP Password Reset"
              description="Implemented a robust password reset feature that enhances security by sending an OTP to the user's email. This ensures a safe and efficient process for users to reset their passwords."
              ghLink="https://github.com/SetSat/Password-Frontend.git"
              ghLink2="https://github.com/SetSat/Password-Backend.git"
              demoLink="https://passwordresetbysathish.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Redux Cart Management"
              description="This project utilizes React Redux Toolkit to create a dynamic cart page, allowing users to manage per-item quantity with automatic updates to total quantity and amount."
              ghLink="https://github.com/SetSat/cart_redux.git"
              demoLink="https://reduxcartbysathish.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Product Management System using MERN Stack"
              description="Developed a robust Product Management System using the MERN stack, enabling users to add, view, update, and delete products with details like name, price, and barcode. Ensured seamless frontend-backend interaction and a user-friendly, responsive design."
              ghLink="https://github.com/SetSat/Product_management_system-frontend.git"
              ghLink2="https://github.com/SetSat/Product-Management-Backend.git"
              demoLink="https://productmanagementbysetsat.netlify.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
