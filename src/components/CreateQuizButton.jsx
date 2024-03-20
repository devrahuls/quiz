import React from 'react'
import CreateQuiz from './CreateQuiz'
import CreateQuizType from './CreateQuizType'
import QuizBuilder from './QuizBuilder'
import QuizPublish from './QuizPublish'

const CreateQuizButton = () => {
  const [showButton, setShowButton] = React.useState(true) //to showing the CreateShowButton
  const [active, setActive] = React.useState(false)
  const [showQuizType, setShowQuizType] = React.useState(false)
  const [showQuizPublish, setShowQuizPublish] = React.useState(false)

  function handleQuizButton() {
    setShowButton(!showButton)
    setActive(!active)
  }
  function handleContinue() {
    setShowQuizType(!showQuizType)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      {showButton && <button onClick={handleQuizButton} className='bg-[#60b94a] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>Create</button>}
      {active && <CreateQuiz quizActive={active} setQuizActive={setActive} handleContinue={handleContinue} />}
      <div>
        {showQuizType && <QuizBuilder propsActiveQuizType={showQuizType} propsSetActiveQuizType={setShowQuizType}
          showQuizPublish={showQuizPublish} setShowQuizPublish={setShowQuizPublish} />}
        {/* {showQuizType && <CreateQuizType propsActiveQuizType = {showQuizType} propsSetActiveQuizType = {setShowQuizType}/>} */}
        {!showQuizType && showQuizPublish && <QuizPublish showQuizPublish={showQuizPublish} setShowQuizPublish={setShowQuizPublish} showButton={showButton} setShowButton={setShowButton} />}
      </div>
    </div>
  )
}

export default CreateQuizButton