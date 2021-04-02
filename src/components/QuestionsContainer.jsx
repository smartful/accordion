import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard';

function QuestionsContainer({ questions }) {
  return (
    <div>
      {questions.map(question => (
        <QuestionCard
          key={question.id}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
}

QuestionsContainer.protoTypes = {
  questions: PropTypes.array
}

export default QuestionsContainer;