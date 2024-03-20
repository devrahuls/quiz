import React, { useState } from 'react';
// import CreateQuizType from './CreateQuizType';



const CreateQuiz = ({ quizActive, setQuizActive, handleContinue }) => {
    const [quizName, setQuizName] = useState('');
    const [quizType, setQuizType] = useState('');
    const [selectedQuizType, setSelectedQuizType] = useState(''); //to handle radio button selection and style it accordingly

    const handleCreateQuiz = () => {
        if (quizName && quizType) {
            setQuizActive(!quizActive)
            handleContinue()
        } else {
            alert('Please enter quiz name and select quiz type.');
        }
    };
    console.log(quizType);
    const handleCancel = () => {
        setQuizActive(!quizActive)
    };

    return (
        <>
            <div className="bg-white p-8 rounded shadow-lg">
                <input type="text" placeholder="Quiz name" value={quizName} onChange={(e) => setQuizName(e.target.value)}
                    className="w-full bg-gray-100 px-16 py-2 rounded shadow focus:outline-none focus:ring-1 focus:bg-white focus:ring-[#60b94a]" />
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-gray-700">Quiz type:</p>
                    <div className="flex gap-4">
                        <label className={`flex items-center cursor-pointer rounded-md shadow border border-gray-100 p-1 px-4 ${selectedQuizType === 'Q&A' ? 'bg-[#60b94a] text-white' : ''}`}>
                            <input type="radio" value="Q&A" checked={quizType === 'Q&A'} onChange={() => { setQuizType('Q&A'); setSelectedQuizType('Q&A'); }} className="hidden" />
                            Q&A
                        </label>
                        <label className={`flex items-center cursor-pointer rounded-md shadow border border-gray-100 p-1 px-4 ${selectedQuizType === 'Poll' ? 'bg-[#60b94a] text-white' : ''}`}>
                            <input type="radio" value="Poll" checked={quizType === 'Poll'} onChange={() => { setQuizType('Poll'); setSelectedQuizType('Poll'); }} className="hidden" />
                            Poll
                        </label>
                    </div>
                </div>


                <div className="flex items-center mt-8 justify-between">
                    <button onClick={handleCancel}
                        className="bg-white-300 text-black-700 px-4 py-2 border-1 shadow rounded hover:bg-gray-200 focus:outline-none">Cancel</button>
                    <button onClick={handleCreateQuiz} className="bg-[#60b94a] text-white px-4 py-2 rounded hover:bg-[#60b94a] focus:outline-none ml-2">Continue</button>
                </div>
            </div>

            {false && <CreateQuizType quizType={quizType} />}
        </>
    );
};

export default CreateQuiz;