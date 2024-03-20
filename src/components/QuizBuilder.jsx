import React, { useState } from 'react';
import CreateQuizType from './CreateQuizType'; // Assuming CreateQuizType is a separate component

const QuizBuilder = ({ propsActiveQuizType, propsSetActiveQuizType, showQuizPublish, setShowQuizPublish }) => {
    const [activeQuizTypes, setActiveQuizTypes] = useState([{ active: true }]);
    const [quizTypee, setQuizType] = useState('Q&A')

    const handleCancel = () => {
        propsSetActiveQuizType(!propsActiveQuizType)
    }
    const handleCreate = () => {
        setShowQuizPublish(!showQuizPublish)
        propsSetActiveQuizType(!propsActiveQuizType)
    }

    const handleAddQuizType = () => {
        if (activeQuizTypes.length < 5) {
            // setActiveQuizTypes([...activeQuizTypes, { active: true }]); // Add a new quiz type with active state
            const newQuizTypes = activeQuizTypes.map(quizType => ({ ...quizType, active: false }));
            newQuizTypes.push({ active: true });
            setActiveQuizTypes(newQuizTypes);
        }
    };

    const handleRemoveQuizType = (index) => {
        const newQuizTypes = [...activeQuizTypes];
        newQuizTypes.splice(index, 1);
        setActiveQuizTypes(newQuizTypes);
    };

    const handleSetActiveQuizType = (index) => {
        const newQuizTypes = [...activeQuizTypes];
        newQuizTypes.forEach((quizType, i) => (quizType.active = i === index));
        setActiveQuizTypes(newQuizTypes);
    };

    return (
        <div className='bg-white p-8 rounded shadow-2xl'>
            <div className='flex gap-4 justify-between items-center'>
                <div className='flex'>
                    <div className='flex items-center gap-2 '>
                        {activeQuizTypes.map((quizType, index) => (
                            <div key={index}>
                                <span onClick={() => handleSetActiveQuizType(index)} className='border rounded-full shadow-md p-2 px-4 cursor-pointer'>
                                    {index + 1}
                                </span>
                                {index !== 0 && <button onClick={() => handleRemoveQuizType(index)} className='text-sm absolute mb-6'>x</button>}
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddQuizType} disabled={activeQuizTypes.length >= 5}
                        className='text-gray-400 text-4xl ml-2'
                    >
                        +
                    </button>
                </div>
                <div>
                    <p className='font-semibold text-gray-500'>Max 5 Questions</p>
                </div>
            </div>
            <div className="quiz-types">
                {activeQuizTypes.map((quizType, index) => (
                    <div key={index} className="quiz-type">

                        {quizType.active && (
                            <CreateQuizType
                                keyValue={index}
                                // propsActiveQuizType={quizType.active}
                                // propsSetActiveQuizType={handleSetActiveQuizType.bind(null, index)} // Bind index to handleSetActiveQuizType for correct context
                                // quizType={quizType.active ? 'Q&A' : 'Poll'}
                                quizType={quizTypee}
                            />
                        )}

                    </div>
                ))}
            </div>
            <div className='flex justify-around'>
                <button onClick={handleCancel}
                    className="bg-white-300 text-black-700 px-16 py-2 border-1 shadow-md rounded hover:bg-gray-200 focus:outline-none"
                >Cancel</button>
                <button onClick={handleCreate}
                    className="bg-[#60b94a] text-white px-16 py-2 rounded hover:bg-[#60b94a] focus:outline-none ml-2"
                >Create Quiz</button>
            </div>
        </div>
    );
};

export default QuizBuilder;
