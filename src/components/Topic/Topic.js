import React from 'react';
import './Topic.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Topic = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        <Col>
            <Card className='border-0 topic-cards mb-3'>
                <Card.Img variant="top" src={logo} style={{ backgroundColor: '#baffff' }} />
                <Card.Body className='d-flex flex-column justify-content-center align-items-start mt-2'>
                    <Card.Title className='text-primary fw-bold'>{name}</Card.Title>
                    <Card.Text className='fw-semibold text-dark'>
                        Questions: <span className='text-primary'>{total}</span>
                    </Card.Text>
                </Card.Body>
                <Button variant="outline-primary" className='m-3 mt-1 py-2 fw-semibold d-flex justify-content-center align-items-center'>
                    Start Quiz
                    <FontAwesomeIcon icon={faArrowRight} className='ms-2'></FontAwesomeIcon>
                </Button>
            </Card>
        </Col>
    );
};

export default Topic;