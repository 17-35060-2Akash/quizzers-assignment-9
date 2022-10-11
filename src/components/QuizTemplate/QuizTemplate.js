import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizTemplate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const QuizTemplate = () => {
    const quiz = useLoaderData().data;
    const questions = quiz.questions;
    // console.log(quiz);

    const [selectedOption, setSelectedOption] = useState('');
    const [count, setCount] = useState(0);

    const handleEvaluation = (e, correctAnswer) => {
        const buttonValue = e.target.value;
        setSelectedOption(buttonValue);
        if (correctAnswer === buttonValue) {
            toast.info('Your Answer is Correct!');
            setCount(count + 1);
        }
        else {
            toast.error('Your Answer is incorrect!');
        }

    }
    const evaluate = () => {
        Swal.fire(`
                   Quiz on ${quiz.name}

                   You have scored ${count} points.

                   Total Questions:  ${questions.length}
                   
                   `);
    }

    return (
        <div className='quiz-template-container'>
            <h1 className='display-5 pt-5 pb-2'>Quiz on {quiz.name}</h1>
            <p className='fs-3 pb-5'>Questions: {questions.length}</p>
            <div className="questions-container container">
                {
                    questions.map((question, idx) => <Question
                        key={question.id}
                        question={question}
                        idx={idx}
                        handleEvaluation={handleEvaluation}></Question>)
                }
            </div>
            {/* <div className="evaluation-panel">
                <h2>Evaluation</h2>
            </div> */}
            <ToastContainer position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover></ToastContainer>

            <div className='py-5'>
                <button onClick={() => evaluate()} className='btn rounded-4 btn-submit'><span className='fs-2 '>Submit</span></button>
            </div>
        </div>
    );
};

export default QuizTemplate;