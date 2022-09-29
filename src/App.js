import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Activities></Activities>
      <Question></Question>
    </div>
  );
}

export default App;
