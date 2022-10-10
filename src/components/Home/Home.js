import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import carousel4 from "../../images/carousel4.jpg";


const Home = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>1K + Courses and Quizes</h3>
                        <p>Build skills with courses and degrees with real time support.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Quizes By Expert Instructors</h3>
                        <p>For professional development, career benefits. Examine yourself with daily updates questionnaire. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Lifetime Access</h3>
                        <p>Get to Quizzers anytime to check previous materials with updates.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;