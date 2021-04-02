import React, { useState } from 'react';
import PropTypes from 'prop-types';

function QuestionCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const cardStyle = {
    width: '38rem',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
    padding: '1.5rem',
    marginBottom: '1.5rem',
  }
  return (
    <div style={cardStyle}>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string
}

export default QuestionCard;