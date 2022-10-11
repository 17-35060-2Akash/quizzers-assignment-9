import React, { useState } from 'react';
import './Question.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



const Question = ({ question, idx }) => {
    const [open, setOpen] = useState(false);

    console.log(question.question);
    let ques = question.question;
    ques = ques.replace('<p>', '');
    ques = ques.replace('</p>', '');

    return (
        <div className='py-3'>
            <Card className="text-center">
                <Card.Header className='pb-5' style={{ backgroundColor: '#ff1f59' }}>
                    <div className='fs-3 py-2 mt-2 me-2 d-flex align-items-center justify-content-end'>
                        {
                            open ?
                                <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faEye}></FontAwesomeIcon> :
                                <FontAwesomeIcon onClick={() => setOpen(!open)} icon={faEyeSlash}></FontAwesomeIcon>
                        }
                    </div>
                    <div className='px-5 mx-5'>
                        <p className='display-6 text-light'><span className='fw-semibold'>Question-{idx + 1}: </span> {ques}</p>
                    </div>

                </Card.Header>
                <Card.Body>

                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default Question;