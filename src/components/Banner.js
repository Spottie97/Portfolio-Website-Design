import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/wizard-header.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["C# Developer","Unity Developer","Game Designer","UI/UX Designer","C++ Developer"];
    const[text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(() =>{
            tick();
        }, delta);

        return () => { clearInterval(ticker)};

    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return(
        <section className="banner" id ="home">
            <Container>
                <Row className ="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {( {isVisible}) =>
                        <div className={isVisible ? "animate_animated animate__fadeInDownBig" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`I'm Reinhardt Erasmus: `}<span className="wrap">{text}</span></h1>
                            <p>Welcome to the inner workings of my mind, sit back and relax as I take you on an adventure of discovery, magic and mystery. Where to start? Ahh yes.. In a hole in the ground lived a game developer. Not just any game developer, this particular one had a dream, a dream to one day be one of the greatest of his kind. </p>
                            <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src ={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}