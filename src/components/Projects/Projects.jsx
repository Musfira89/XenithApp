import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/ux0.jpg";
import projImg2 from "../../assets/img/ux1.jpg";
import projImg3 from "../../assets/img/ux2.jpg";
import projImg4 from "../../assets/img/ux3.jpg";
import projImg5 from "../../assets/img/ux4.jpg";
import projImg6 from "../../assets/img/ux5.jpg";
import projImg7 from "../../assets/img/web0.jpg";
import projImg8 from "../../assets/img/web1.jpg";
import projImg9 from "../../assets/img/web2.jpg";
import projImg10 from "../../assets/img/graphic0.jpg";
import projImg11 from "../../assets/img/graphic1.jpg";
import projImg12 from "../../assets/img/graphic2.jpg";

import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const uxprojects = [
    {
      title: "Design 0",
      imgUrl: projImg1,
    },
    {
      title: "Design 1",
      imgUrl: projImg2,
    },
    {
      title: "Design 2",
      imgUrl: projImg3,
    },
    {
      title: "Design 3",
      imgUrl: projImg4,
    },
    {
      title: "Design 4",
      imgUrl: projImg5,
    },
    {
      title: "Design 5",
      imgUrl: projImg6,
    },
  ];
  const webDevProjects = [
    {
      title: "Web Project 0",
      imgUrl: projImg7,
    },
    {
      title: "Web Project 1",
      imgUrl: projImg8,
    },
    {
      title: "Web Project 2",
      imgUrl: projImg9,
    },
  ];
  const graphicProjects = [
    {
      title: "Design 0",
      imgUrl: projImg10,
    },
    {
      title: "Design 1",
      imgUrl: projImg11,
    },
    {
      title: "Design 2",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Our Projects</h2>
                  <p>
                    With a team of skilled developers and designers, we have
                    already started working on various exciting projects. From
                    creating stunning website designs to developing
                    fully-functional web applications, we are committed to
                    delivering high-quality results that exceed our clients'
                    expectations.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">UX\UI Designs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Graphic Designs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {uxprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {webDevProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {graphicProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
