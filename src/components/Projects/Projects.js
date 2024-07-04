import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/product.png";

import editor from "../../Assets/Projects/Redux.png";
import chatify from "../../Assets/Projects/zenclass.png";

import bitsOfCode from "../../Assets/Projects/googleouth.png";
import finance from "../../Assets/finance.png"

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
              imgPath={finance}
              isBlog={false}
              title="Wealth Journey(Mern)-Redux"
              description="Navigate your financial future with Wealth Journey, your personalized guide to managing income, expenses, and achieving financial wellness."
              ghLink="https://github.com/SetSat/Wealth_Journey_Frontend.git"
              ghLink2="https://github.com/SetSat/Wealth_Journey_Backend.git"
              demoLink="https://wealthjourneybysetsat.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Secure React Authentication System with Google OAuth, OTP Verification, and Redux Toolkit"
              description="A secure React-based MERN stack authentication system featuring OTP-based signup and password reset, sleek UI with Google OAuth, Redux Toolkit for state management, and Ant Design for polished UX."
              ghLink="https://github.com/SetSat/Login-Clint.git"
              ghLink2="https://github.com/SetSat/Login-Server.git"
              demoLink="https://googleauthbysetsat.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Product Management System with Enhanced Authentication and Redux Toolkit Integration using MERN Stack"
              description="Developed a robust Product Management System using the MERN stack, featuring enhanced authentication capabilities including OTP-based signup and password reset. Implemented Redux Toolkit for efficient state management, allowing users to seamlessly add, view, update, and delete products with details like name, price, and barcode in a user-friendly, responsive design"
              ghLink="https://github.com/SetSat/Product_management_system-frontend.git"
              ghLink2="https://github.com/SetSat/Product-Management-Backend.git"
              demoLink="https://productmanagementbysetsat.netlify.app/"
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




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
