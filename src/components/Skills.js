import { Col, Container, Row } from "react-bootstrap";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

//Images Import
import meter80 from "../assets/img/Meter80.png";
import meter90 from "../assets/img/Meter90.png";
import meter75 from "../assets/img/Meter75.png";
import meter70 from "../assets/img/Meter70.png";
import meter60 from "../assets/img/Meter60.png";




export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                         Skills
                        </h2>
                        <p>
                         Below are some of my unique skills and talents I use to navigate this treacherous environment.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                         <div className="item">
                            <img src={meter90} alt="Image" />
                            <h5>
                             Unity Development
                            </h5>
                         </div>
                         <div className="item">
                            <img src={meter75} alt="Image" />
                            <h5>
                             Game Design
                            </h5>
                         </div>
                         <div className="item">
                            <img src={meter90} alt="Image" />
                            <h5>
                             C# Development
                            </h5>
                         </div>
                         <div className="item">
                            <img src={meter80} alt="Image" />
                            <h5>
                             C++ Development
                            </h5>
                         </div>
                         <div className="item">
                            <img src={meter75} alt="Image" />
                            <h5>
                             UI/UX Designer
                            </h5>
                         </div>
                         <div className="item">
                            <img src={meter70} alt="Image" />
                            <h5>
                             Animation/FX Development
                            </h5>
                         </div>
                         <div className="item">
                            <img src={meter90} alt="Image" />
                            <h5>
                             Teamwork
                            </h5>
                         </div>
                         <div className="item">
                            <img src={meter75} alt="Image" />
                            <h5>
                             Source Control: Git
                            </h5>
                         </div>
                        </Carousel>
                    </div>
                </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )

}