import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import carousel4 from "../../images/carousel4.jpg";
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import { Row } from 'react-bootstrap';


const Home = () => {
    const topics = useLoaderData().data;

    return (
        <div >
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='display-5'>1K+ Courses and Quizes</h3>
                            <p className='fs-5'>Build skills with courses and degrees with real time support.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='display-5'>Quizes By Experts</h3>
                            <p className='fs-5'>Examine yourself with daily updates questionnaire. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='display-5'>Lifetime Access</h3>
                            <p className='fs-5'>Get to Quizzers anytime to check previous materials with updates.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h2 className='py-5 mt-4 display-4 home-title'>Complete these {topics.length} <br />Quiz Challanges of today</h2>
            <Row xs={1} sm={1} md={2} lg={4} className='topics-container g-4 px-5 py-4 pb-5 mb-5 '>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}></Topic>)
                }
            </Row>
        </div>
    );
};

export default Home;