import * as React from 'react'
import Timer from './components/Timer'
import Options from './components/Options'
import ActiveClue from './components/ActiveClue'
import Board from './components/Board'
import CluesList from './components/CluesList'
import './App.css'

const clues = {
	across: {
		1: 'Fancy party',
		5: 'The first item ever sold on it was a broken laser printer',
		6: 'Like many Zoom call participants',
		8: 'Chloe who won best picture and best director in 2021',
		9: 'Round number?',
	},
	down: {
		1: 'Valuable stone',
		2: 'Brimming with activity',
		3: 'Turning tool in a woodshop',
		4: 'Annually',
		7: 'Well, whoop-de-___!',
	},
}

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
						<Board />
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
