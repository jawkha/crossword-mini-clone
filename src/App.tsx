import * as React from 'react'
import Timer from './components/Timer'
import Options from './components/Options'
import ActiveClue from './components/ActiveClue'
import Board from './components/Board'
import CluesList from './components/CluesList'
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>The Mini Crossword</h1>
      <div className='container'>
        <div className='timer-and-menu'>
          <Timer />
          <Options />
        </div>
        <div className='board-and-clues'>
          <div>
            <ActiveClue />
            <Board />
          </div>
          <div>
            <CluesList direction = 'Across' />
            <CluesList direction = 'Down' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
