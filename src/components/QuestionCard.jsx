import React, { useState } from 'react';
import PropTypes from 'prop-types';

function QuestionCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const cardStyle = {
    width: '50vw',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
    padding: '1rem',
    marginBottom: '1.5rem',
  };

  const quetionStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  };

  const buttonStyle = {
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#AAAAAA',
    color: '#b4345c',
    width: '2rem',
    height: '2rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
    outline: 'none',
  };

  return (
    <div style={cardStyle}>
      <div style={quetionStyle}>
        <h3>{question}</h3>
        {showAnswer ?
          <button onClick={() => setShowAnswer(false)} style={buttonStyle}>-</button> :
          <button onClick={() => setShowAnswer(true)} style={buttonStyle}>+</button>
        }
      </div>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string
}

export default QuestionCard;