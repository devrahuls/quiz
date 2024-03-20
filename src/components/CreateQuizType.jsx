import React from 'react'
import Timer from './Timer'

const CreateQuizType = ({ quizType }) => {
    const [quizQuestion, setQuizQuestion] = React.useState('')
    const [selectQuizOption, setSelectQuizOption] = React.useState('Text')
    const [selectAnsOption, setSelectAnsOption] = React.useState('')
    const [options, setOptions] = React.useState(['Text1', 'Text2']); // Initial options


    // let quizType = 'Poll';

    const handleInputChange = (event) => {
        setSelectQuizOption(event.target.value);
        console.log("Selected value:", event.target.value);
    };
    console.log(selectQuizOption);
    const handleAddOption = () => {
        if (options.length < 4) {
            setOptions([...options, selectQuizOption]);
        }
    };

    const handleDeleteOption = (index) => {
        if (index >= 2) {
            const newOptions = [...options];
            newOptions.splice(index, 1);
            setOptions(newOptions);
        }
    };
    // const handleAnsOptionChange = (event) => {
    //     setSelectAnsOption(event.target.value);
    //     console.log("Selected value:", event.target.value);
    // }
    // console.log(selectAnsOption);
    const handleTextInputClick = (value) => {
        // Update the state of selectAnsOption when the text input is clicked
        setSelectAnsOption(value);
        // setIsInputClicked(!isInputClicked); // Set the state to indicate input click
    };

    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        setOptions(
            options.map((option, i) => (i === parseInt(name, 10) ? value : option))
        );
        setSelectAnsOption(event.target.value);
    };

    console.log(selectAnsOption);
    return (
        <div className='bg-white p-8 flex'>
            <div>

                <input
                    type='text'
                    name={quizType === 'Q&A' ? 'Q&A' : 'Poll'}
                    placeholder={quizType === 'Q&A' ? 'Q&A question' : 'Poll question'}
                    value={quizQuestion}
                    onChange={(e) => setQuizQuestion(e.target.value)}
                    className='w-full bg-gray-100 px-16 py-1 rounded shadow focus:outline-none focus:ring-1 focus:bg-white focus:ring-[#60b94a]'
                />

                <div className='mt-4 flex items-center justify-between'>
                    <p className="text-gray-700 mr-6">Option Type: </p>
                    <div className='flex gap-3'>
                        <label>
                            <input type="radio" value="Text" name="quizOption"
                                checked={selectQuizOption === 'Text'} onChange={handleInputChange}
                            /> Text
                        </label>
                        <label>
                            <input type="radio" value="ImageURL" name="quizOption"
                                checked={selectQuizOption === 'ImageURL'} onChange={handleInputChange}
                            /> Image URL
                        </label>
                        <label>
                            <input type="radio" value="Text&ImageURL" name="quizOption"
                                checked={selectQuizOption === 'Text&ImageURL'} onChange={handleInputChange}
                            /> Text & Image URL
                        </label>
                    </div>
                </div>

                <div>
                    {quizType === 'Q&A' && selectQuizOption === 'Text' && (
                        <div className='mt-4'>
                            {/* <label>
                            <input type="radio" value="option1" name="option"
                                checked={selectAnsOption === 'option1'} onChange={handleAnsOptionChange}
                            /> <input type='text' onClick={() => handleTextInputClick('option1')} />
                        </label>
                        <label>
                            <br />
                            <input type="radio" value="option2" name="option"
                                checked={selectAnsOption === 'option2'} onChange={handleAnsOptionChange}
                            /> <input type='text' onClick={() => handleTextInputClick('option2')} />
                        </label> */}

                            {options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        value={option}
                                        name="option"
                                        checked={selectAnsOption === option}
                                        onChange={handleOptionChange} onClick={() => handleTextInputClick(option)}
                                    />
                                    <input
                                        type='text'
                                        value={option}
                                        onChange={(e) => handleOptionChange({ target: { name: index, value: e.target.value } })}
                                        onClick={() => handleTextInputClick(option)}
                                        className='text-gray-400 py-1 mt-2 ml-2 px-2 cursor-pointer rounded shadow-md focus:outline-none focus:ring-1 focus:bg-[#60b94a] focus:ring-[#60b94a] focus:text-white focus:shadow-none'
                                    />
                                    {index >= 2 && <button onClick={() => handleDeleteOption(index)}
                                        className='text-white bg-red-500 py-1 ml-2 px-2 cursor-pointer rounded hover:bg-red-600'
                                    >Delete</button>}
                                    <br />
                                </label>
                            ))}
                            {options.length < 4 && <button onClick={handleAddOption}
                                className='w-1/2 text-gray-400 py-1 mt-6 ml-5 cursor-pointer rounded shadow-md hover:bg-[#60b94a] hover:text-white'
                            >Add Option</button>}
                        </div>
                    )}

                    {quizType === 'Q&A' && selectQuizOption === 'ImageURL' && (
                        <div>
                            {options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        value={option}
                                        name="option"
                                        checked={selectAnsOption === option}
                                        onChange={handleOptionChange} onClick={() => handleTextInputClick(option)}
                                    />
                                    <input
                                        type='text'
                                        value={option}
                                        onChange={(e) => handleOptionChange({ target: { name: index, value: e.target.value } })}
                                        onClick={() => handleTextInputClick(option)}
                                        className='text-gray-400 py-1 mt-2 ml-2 px-2 cursor-pointer rounded shadow-md focus:outline-none focus:ring-1 focus:bg-[#60b94a] focus:ring-[#60b94a] focus:text-white focus:shadow-none'
                                    />
                                    {index >= 2 && <button onClick={() => handleDeleteOption(index)}
                                        className='text-white bg-red-500 py-1 ml-2 px-2 cursor-pointer rounded hover:bg-red-600'
                                    >Delete</button>}
                                    <br />
                                </label>
                            ))}
                            {options.length < 4 && <button onClick={handleAddOption}
                                className='w-1/2 text-gray-400 py-1 mt-6 ml-5 cursor-pointer rounded shadow-md hover:bg-[#60b94a] hover:text-white'
                            >Add Option</button>}
                        </div>
                    )}

                    {quizType === 'Q&A' && selectQuizOption === 'Text&ImageURL' && (
                        <div>
                            {options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        value={option}
                                        name="option"
                                        checked={selectAnsOption === option}
                                        onChange={handleOptionChange} onClick={() => handleTextInputClick(option)}
                                    />
                                    <input
                                        type='text'
                                        value={option}
                                        onChange={(e) => handleOptionChange({ target: { name: index, value: e.target.value } })}
                                        onClick={() => handleTextInputClick(option)}
                                        className='text-gray-400 py-1 mt-2 ml-2 px-2 w-24 cursor-pointer rounded shadow-md focus:outline-none focus:ring-1 focus:bg-[#60b94a] focus:ring-[#60b94a] focus:text-white focus:shadow-none'
                                    />
                                    <input
                                        type='text'
                                        value={option}
                                        onChange={(e) => handleOptionChange({ target: { name: index, value: e.target.value } })}
                                        onClick={() => handleTextInputClick(option)}
                                        className='text-gray-400 py-1 mt-2 ml-2 px-2 cursor-pointer rounded shadow-md focus:outline-none focus:ring-1 focus:bg-[#60b94a] focus:ring-[#60b94a] focus:text-white focus:shadow-none'
                                    />
                                    {index >= 2 && <button onClick={() => handleDeleteOption(index)}
                                        className='text-white bg-red-500 py-1 ml-2 px-2 cursor-pointer rounded hover:bg-red-600'
                                    >Delete</button>}
                                    <br />
                                </label>
                            ))}
                            {options.length < 4 && <button onClick={handleAddOption}
                                className='w-1/2 text-gray-400 py-1 mt-6 ml-5 cursor-pointer rounded shadow-md hover:bg-[#60b94a] hover:text-white'
                            >Add Option</button>}
                        </div>
                    )}

                    {quizType === 'Poll' && selectQuizOption === 'Text' && (
                        <div>
                            {options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type='text'
                                        value={option}
                                        onChange={(e) => handleOptionChange({ target: { name: index, value: e.target.value } })}
                                        onClick={() => handleTextInputClick(option)}
                                        className='text-gray-400 py-1 mt-2 ml-2 px-2 cursor-pointer rounded shadow-md focus:outline-none focus:ring-1 focus:bg-[#60b94a] focus:ring-[#60b94a] focus:text-white focus:shadow-none'
                                    />
                                    {index >= 2 && <button onClick={() => handleDeleteOption(index)}
                                        className='text-white bg-red-500 py-1 ml-2 px-2 cursor-pointer rounded hover:bg-red-600'
                                    >Delete</button>}
                                    <br />
                                </label>
                            ))}
                            {options.length < 4 && <button onClick={handleAddOption}
                                className='w-1/2 text-gray-400 py-1 mt-6 ml-5 cursor-pointer rounded shadow-md hover:bg-[#60b94a] hover:text-white'
                            >Add Option</button>}
                        </div>
                    )}
                    {quizType === 'Poll' && selectQuizOption === 'ImageURL' && (
                        <div>
                            {options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type='text'
                                        value={option}
                                        onChange={(e) => handleOptionChange({ target: { name: index, value: e.target.value } })}
                                        onClick={() => handleTextInputClick(option)}
                                        className='text-gray-400 py-1 mt-2 ml-2 px-2 cursor-pointer rounded shadow-md focus:outline-none focus:ring-1 focus:bg-[#60b94a] focus:ring-[#60b94a] focus:text-white focus:shadow-none'
                                    />
                                    {index >= 2 && <button onClick={() => handleDeleteOption(index)}
                                        className='text-white bg-red-500 py-1 ml-2 px-2 cursor-pointer rounded hover:bg-red-600'
                                    >Delete</button>}
                                    <br />
                                </label>
                            ))}
                            {options.length < 4 && <button onClick={handleAddOption}
                                className='w-1/2 text-gray-400 py-1 mt-6 ml-5 cursor-pointer rounded shadow-md hover:bg-[#60b94a] hover:text-white'
                            >Add Option</button>}
                        </div>
                    )}
                    {quizType === 'Poll' && selectQuizOption === 'Text&ImageURL' && (
                        <div>
                            {options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type='text'
                                        value={option}
                                        onChange={(e) => handleOptionChange({ target: { name: index, value: e.target.value } })}
                                        onClick={() => handleTextInputClick(option)}
                                        className='text-gray-400 py-1 mt-2 ml-2 px-2 cursor-pointer rounded shadow-md focus:outline-none focus:ring-1 focus:bg-[#60b94a] focus:ring-[#60b94a] focus:text-white focus:shadow-none'
                                    />
                                    <input
                                        type='text'
                                        value={option}
                                        onChange={(e) => handleOptionChange({ target: { name: index, value: e.target.value } })}
                                        onClick={() => handleTextInputClick(option)}
                                        className='text-gray-400 py-1 mt-2 ml-2 px-2 cursor-pointer rounded shadow-md focus:outline-none focus:ring-1 focus:bg-[#60b94a] focus:ring-[#60b94a] focus:text-white focus:shadow-none'
                                    />
                                    {index >= 2 && <button onClick={() => handleDeleteOption(index)}
                                        className='text-white bg-red-500 py-1 ml-2 px-2 cursor-pointer rounded hover:bg-red-600'
                                    >Delete</button>}
                                    <br />
                                </label>
                            ))}
                            {options.length < 4 && <button onClick={handleAddOption}
                                className='w-1/2 text-gray-400 py-1 mt-6 ml-5 cursor-pointer rounded shadow-md hover:bg-[#60b94a] hover:text-white'
                            >Add Option</button>}
                        </div>
                    )}
                </div>
            </div>

            {quizType === 'Q&A' && <Timer />}
        </div>
    )
}

export default CreateQuizType