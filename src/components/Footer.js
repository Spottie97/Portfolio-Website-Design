import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.png";
//import icons
import navIcon1 from '../assets/img/linkedinNav.svg';
import navIcon2 from '../assets/img/twitterNav.svg';
import navIcon3 from '../assets/img/instaNav.svg';
export const Footer = () =>{

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/reinhardt-erasmus-48076921a/"><img src={navIcon1}/></a>
                            <a href="https://twitter.com/ttvspottie"><img src={navIcon2}/></a>
                            <a href="https://www.instagram.com/young_but_beardless/"><img src={navIcon3}/></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}