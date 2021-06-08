import './App.css';

function App() {
  return (
    <div className="app">
      <h1>The Mini Crossword</h1>
      <div className='container'>
        <div className='timer-and-menu'>
          <div>Timer</div>
          <div>options</div>
        </div>
        <div className='board-and-clues'>
          <div>
            <div>active clue row</div>
            <div>board</div>
          </div>
          <div>
            <div>Across </div>
            <div>Down</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
