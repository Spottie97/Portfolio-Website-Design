import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/linkedinNav.svg';
import navIcon2 from '../assets/img/twitterNav.svg';
import navIcon3 from '../assets/img/instaNav.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=> {
            if (window.scrollY > 50)
            {
                setScrolled(true);

            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return() => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {

        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span classname = "navbar-toggle-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink ==="home" ? "active navbar-link":"navbar-link"} onClick = {() => onUpdateActiveLink("home")}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink ==="skills" ? "active navbar-link":"navbar-link"} onClick = {() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                <Nav.Link href="#project" className={activeLink ==="project" ? "active navbar-link":"navbar-link"} onClick = {() => onUpdateActiveLink("project")}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href='https://www.linkedin.com/in/reinhardt-erasmus-48076921a/'><img src={navIcon1} alt=""/></a>
                    <a href='https://twitter.com/ttvspottie'><img src={navIcon2} alt=""/></a>
                    <a href='https://www.instagram.com/young_but_beardless/'><img src={navIcon3} alt=""/></a>
                </div>
                <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}