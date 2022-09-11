import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import spellbannerProject from "../assets/img/circle-spell-banner.png";
//Image imports
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';
export const Projects = () => {

    const projects = [
        {
            title: "Project 1",
            description: " ",
            imgUrl: projImg1,
        },
        {
            title: "Project 2",
            description: " ",
            imgUrl: projImg2,
        },
        {
            title: "Project 3",
            description: " ",
            imgUrl: projImg3,
        },
        {
            title: "Project 4 ",
            description: " ",
            imgUrl: projImg1,
        },
        {
            title: "Project 5 ",
            description: " ",
            imgUrl: projImg2,
        },
        {
            title: "Project 6 ",
            description: " ",
            imgUrl: projImg3,
        }

    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible}) =>
                        <div className={isVisible ? "animate_animated animate__lightSpeedInRight" : ""}>
                     <h2>
                        Projects
                     </h2>
                     <p>
                        Behold...my adventures lay ahead, but be warned..the path you seek to follow contains many trials and tribulation. Enter at your own risk.
                     </p>
                     </div>}
                     </TrackVisibility>
                     <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills md-5 justify-content-center align-item-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">C++ Project</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">C# Project</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">2D Mini Games</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) =>{
                                            return(
                                                <ProjectCard 
                                                 key={index}
                                                  {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects.map((project, index) =>{
                                            return(
                                                <ProjectCard key={index}
                                                {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        projects.map((project, index) =>{
                                            return(
                                                <ProjectCard key={index}
                                                {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                     </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}