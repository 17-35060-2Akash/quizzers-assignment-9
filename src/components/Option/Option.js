import React from 'react';
import { Col, Form } from 'react-bootstrap';
import './Option.css';

const Option = ({ option }) => {
    console.log(option);
    return (
        <Col>
            <div className='border border-2 rounded-3 mx-auto pt-2 option'>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3 ps-4 pe-1 fs-2 fw-lighter d-flex justify-content-start align-items-center">
                        <Form.Check
                            type={type}
                            name="group1"
                            id={`default-${type}`}
                            label={option}
                        />
                    </div>
                ))}

            </div>
        </Col>
    );
};

export default Option;