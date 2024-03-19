import React from 'react'

const QuizPublish = ({showQuizPublish, setShowQuizPublish}) => {
    const handleQuizPublish = () => {
        setShowQuizPublish(!showQuizPublish)
    }

  return (
    <div>
      Hello
      <button onClick={handleQuizPublish}>X</button>
    </div>
  )
}

export default QuizPublish
