import QuestionsContainer from './components/QuestionsContainer';
import { questions } from './data/questions';
import './App.css';

function App() {
  const titleStyle = {
    width: '250px',
    fontSize: '1.75rem',
    fontWeight: '500',
    textAlign: 'left'
  };

  return (
    <div className="App">
      <h3 style={titleStyle}>Questions And Answers About Login</h3>
      <QuestionsContainer questions={questions}/>
    </div>
  );
}

export default App;
