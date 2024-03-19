import React, { useState } from 'react';
import './QuizType.css';
import CreateQuizType from './CreateQuizType';



const CreateQuiz = ({quizActive, setQuizActive, handleContinue}) => {
    const [quizName, setQuizName] = useState('');
    const [quizType, setQuizType] = useState('Q&A');

    const handleCreateQuiz = () => {
        if (quizName && quizType) {
            setQuizActive(!quizActive)
            handleContinue()
        } else {
            alert('Please enter quiz name and select quiz type.');
        }
    };

    const handleCancel = () => {
        setQuizActive(!quizActive)
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter quiz name"
                    value={quizName}
                    onChange={(e) => setQuizName(e.target.value)}
                />
                <div>
                    <label className={quizType === 'Q&A' ? 'active' : ''}>
                        <input
                            type="radio"
                            value="Q&A"
                            checked={quizType === 'Q&A'}
                            onChange={() => setQuizType('Q&A')}
                        />
                        Q&A
                    </label>
                    <label className={quizType === 'Poll' ? 'active' : ''}>
                        <input
                            type="radio"
                            value="Poll"
                            checked={quizType === 'Poll'}
                            onChange={() => setQuizType('Poll')}
                        />
                        Poll
                    </label>
                </div>
                <div>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleCreateQuiz}>Continue</button>
                </div>
            </div>
            {false && <CreateQuizType quizType={quizType} />}
        </>
    );
};

export default CreateQuiz;