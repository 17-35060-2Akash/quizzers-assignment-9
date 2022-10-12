import React from 'react';
import './About.css';
import img1 from '../../images/11.jpg'
import img2 from '../../images/12.jpg'
import img3 from '../../images/13.jpg'
import logoimg from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStickyNote } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='container'>
            <div className='picture-container container'>
                <div className='container-left'>
                    <img src={img1} alt="" className='img-fluid' />
                    <img src={img2} alt="" className='img-fluid' />
                </div>
                <div className='container-right'>
                    <img src={img3} alt="" className='img-fluid' />
                    <div>
                        <img src={logoimg} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className='pt-5'>
                    <p className='display-5 mx-4 text-end mt-5'>See why administrators love  <span className='quiz-templeate-title display-3'>Quizzers</span> Logo  for their teachers and students.</p>
                </div>
                <div className='pt-5'>
                    <p className='display-5 text-warning fw-semibold assesment-title mt-5'>Why do professionals <br /> trust us?</p>
                    <div className='features-list text-start ps-5' >
                        <h4 className='display-6 pb-2'><FontAwesomeIcon icon={faCheck} className='rounded-circle icon-check'></FontAwesomeIcon> Interactive Lessons</h4>
                        <h4 className='display-6 pb-2'><FontAwesomeIcon icon={faCheck} className='rounded-circle icon-check'></FontAwesomeIcon> Revolutionary Quiz materials</h4>
                        <h4 className='display-6 pb-2'><FontAwesomeIcon icon={faCheck} className='rounded-circle icon-check'></FontAwesomeIcon> Low-stakes competition</h4>
                        <h4 className='display-6 pb-2'><FontAwesomeIcon icon={faCheck} className='rounded-circle icon-check'></FontAwesomeIcon> Daily status monitoring and session</h4>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default About;