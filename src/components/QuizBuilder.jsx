import React, { useState } from 'react';
import CreateQuizType from './CreateQuizType'; // Assuming CreateQuizType is a separate component

const QuizBuilder = ({ propsActiveQuizType, propsSetActiveQuizType, showQuizPublish, setShowQuizPublish}) => {
    const [activeQuizTypes, setActiveQuizTypes] = useState([{ active: true }]);

    const handleCancel = () => {
        propsSetActiveQuizType(!propsActiveQuizType)
    }
    const handleCreate = () => {
        setShowQuizPublish(!showQuizPublish)
        propsSetActiveQuizType(!propsActiveQuizType)
    }

    const handleAddQuizType = () => {
        if (activeQuizTypes.length < 5) {
            setActiveQuizTypes([...activeQuizTypes, { active: true }]); // Add a new quiz type with active state
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
        <div>
            {activeQuizTypes.map((quizType, index) => (
                <div key={index} className="quiz-type">
                    <span onClick={() => handleSetActiveQuizType(index)}>
                        Quiz {index + 1}
                    </span>
                    {index !== 0 && <button onClick={() => handleRemoveQuizType(index)}>x</button>}
                </div>
            ))}
            <button onClick={handleAddQuizType} disabled={activeQuizTypes.length >= 5}>
                Add Quiz
            </button>
            <div className="quiz-types">
                {activeQuizTypes.map((quizType, index) => (
                    <div key={index} className="quiz-type">

                        {quizType.active && (
                            <CreateQuizType
                                keyValue={index}
                                propsActiveQuizType={quizType.active}
                                propsSetActiveQuizType={handleSetActiveQuizType.bind(null, index)} // Bind index to handleSetActiveQuizType for correct context
                            />
                        )}

                    </div>
                ))}
            </div>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleCreate}>Create Quiz</button>
        </div>
    );
};

export default QuizBuilder;
