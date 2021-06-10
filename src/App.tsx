import * as React from 'react'
import Timer from './components/Timer'
import Options from './components/Options'
import ActiveClue from './components/ActiveClue'
import Board from './components/Board'
import CluesList from './components/CluesList'
import { clues, answers } from './data/puzzle-1'
import './App.css'

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<h1>The Mini Crossword</h1>
				<div className='timer-and-menu'>
					<Timer />
					<Options />
				</div>
				<div className='board-and-clues'>
					<div>
						<ActiveClue />
						<Board answers={answers} />
					</div>
					<div>
						<CluesList direction='Across' list={clues.across} />
						<CluesList direction='Down' list={clues.down} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
