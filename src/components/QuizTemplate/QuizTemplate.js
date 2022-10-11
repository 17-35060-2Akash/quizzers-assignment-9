import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizTemplate.css';

const QuizTemplate = () => {
    const quiz = useLoaderData().data;
    const questions = quiz.questions;
    // console.log(quiz);
    return (
        <div className='quiz-template-container'>
            <h1 className='display-5 pt-5 pb-2'>Quiz on {quiz.name}</h1>
            <p className='fs-3 pb-5'>Questions: {questions.length}</p>
            <div className="questions-container container">
                {
                    questions.map((question, idx) => <Question
                        key={question.id}
                        question={question}
                        idx={idx}></Question>)
                }
            </div>
            {/* <div className="evaluation-panel">
                <h2>Evaluation</h2>
            </div> */}
        </div>
    );
};

export default QuizTemplate;