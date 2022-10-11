import React, { useState } from 'react';
import './Question.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Option from '../Option/Option';
import { Form, Row } from 'react-bootstrap';




const Question = ({ question, idx, handleEvaluation }) => {
    const [open, setOpen] = useState(false);

    let ques = question.question;
    ques = ques.replace('<p>', '');
    ques = ques.replace('</p>', '');

    const options = question.options;
    const correctAnswer = question.correctAnswer;


    return (
        <div className='py-3'>
            <Card className="text-center">
                <Card.Header className='pb-5' style={{ backgroundColor: '#ff1f59' }}>
                    <div className='fs-3 py-2 mt-2 me-2 d-flex align-items-center justify-content-end'>
                        {
                            open ?
                                <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faEye}></FontAwesomeIcon>
                                :
                                <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faEyeSlash}></FontAwesomeIcon>
                        }
                    </div>
                    <div className='px-5 mx-5'>
                        <p className='display-6 text-light'><span className='fw-semibold'>Question-{idx + 1}: </span> {ques}</p>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row xs={1} sm={1} md={1} lg={2} className='options-container g-4 p-4'>
                            {
                                options.map((option, idx) => <Option
                                    key={idx}
                                    option={option}
                                    handleEvaluation={handleEvaluation}
                                    correctAnswer={correctAnswer}></Option>)
                            }
                        </Row>
                    </Form>

                </Card.Body>
                <Card.Footer className={`${open ? 'footer-container-opened' : 'footer-container'}`}>
                    {
                        open ?
                            <p className='text-white fs-2 fw-lighter pt-2 '>Correct Answer: {correctAnswer}</p>
                            :
                            <p></p>
                    }
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Question;