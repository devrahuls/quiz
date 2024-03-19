import React from 'react'
import CreateQuiz from './CreateQuiz'
import CreateQuizType from './CreateQuizType'
import QuizBuilder from './QuizBuilder'

const CreateQuizButton = () => {
    const[active, setActive] = React.useState(false)
    const[showQuizType, setShowQuizType] = React.useState(false)

    function handleQuizButton(){
        setActive(!active)
    }
    function handleContinue(){
        setShowQuizType(!showQuizType)
    }

  return (
    <div>
    <button onClick={handleQuizButton}>Create</button>
    {active && <CreateQuiz quizActive = {active} setQuizActive = {setActive} handleContinue={handleContinue}/>}
    <div>
    {showQuizType && <QuizBuilder propsActiveQuizType = {showQuizType} propsSetActiveQuizType = {setShowQuizType}/>}
    {/* {showQuizType && <CreateQuizType propsActiveQuizType = {showQuizType} propsSetActiveQuizType = {setShowQuizType}/>} */}
    </div>
    </div>
  )
}

export default CreateQuizButton