import React from 'react'
import Timer from './Timer'

const CreateQuizType = ({ propsActiveQuizType, propsSetActiveQuizType}) => {
    const [quizQuestion, setQuizQuestion] = React.useState('')
    const [selectQuizOption, setSelectQuizOption] = React.useState('')
    const [selectAnsOption, setSelectAnsOption] = React.useState('')
    const [options, setOptions] = React.useState(['Text1', 'Text2']); // Initial options

    const handleCancel = () => {
        propsSetActiveQuizType(!propsActiveQuizType)
    }
    const handleCreate = () => {
        propsSetActiveQuizType(!propsActiveQuizType)
    }

    let quizType = 'Q&A'
    const handleInputChange = (event) => {
        setSelectQuizOption(event.target.value);
        console.log("Selected value:", event.target.value);
    };
    console.log(selectQuizOption);
    const handleAddOption = () => {
        if (options.length < 4) {
          setOptions([...options, `Text${options.length + 1}`]);
        }
      };

      const handleDeleteOption = (index) => {
        if(index >= 2){
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
        <div>
            <input
                type='text'
                name={quizType === 'Q&A' ? 'Q&A' : 'Poll'}
                placeholder={quizType === 'Q&A' ? 'Q&A question' : 'Poll question'}
                value={quizQuestion}
                onChange={(e) => setQuizQuestion(e.target.value)}
            />

            <div>
                <span>Option Type: </span>
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

            <div>
                {quizType === 'Q&A' && selectQuizOption === 'Text' && (
                    <div>
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
                                />
                                {index >= 2 &&<button onClick={() => handleDeleteOption(index)}>Delete</button>}
                                <br/>
                            </label>
                        ))}
                        {options.length < 4 && <button onClick={handleAddOption}>Add Option</button>}
                    </div>
                )}
            </div>

            {quizType === 'Q&A' && <Timer />}

            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleCreate}>Create Quiz</button>
        </div>
    )
}

export default CreateQuizType