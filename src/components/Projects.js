import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import interlinkd from "../assets/projects/interlinkd.png";
import lumnio from "../assets/projects/lumino.png";
import minespace from "../assets/projects/minespace.png";
import osproject from "../assets/projects/osproject.png"
import portfolio from "../assets/projects/portfolio.png";
import seventyfive from "../assets/projects/seventyfive.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "InterLinkd",
      description: "Messaging and networking platform",
      imgUrl: interlinkd,
    },
    {
      title: "Lumnio",
      description: "Digital Clock",
      imgUrl: lumnio,
    },
    {
      title: "Minespace",
      description: "Parallax Login Website",
      imgUrl: minespace,
    },
    {
      title: "Portfolio",
      description: "Portfolio",
      imgUrl: portfolio,
    },
    {
      title: "SeventyFive",
      description: "An Attendance App",
      imgUrl: seventyfive,
    },
    {
      title: "Intelligent Process Termination",
      description: "Operating System Project",
      imgUrl: osproject,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <br></br> */}
                <p>Explore a portfolio of diverse projects </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Web Development (MERN) | Android Development | Operating System </p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Discover my Sensors & IoT projects, where innovation meets practical application, demonstrating my ability to integrate smart technology into real-world solutions</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <p>hello</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
