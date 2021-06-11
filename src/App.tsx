import * as React from 'react'
import Timer from './components/Timer'
import Options from './components/Options'
import ActiveClue from './components/ActiveClue'
import Board from './components/Board'
import CluesList from './components/CluesList'
import { clues, answers, puzzleData } from './data/puzzle-2'
import './App.css'

function App() {
	const [state, setState] = React.useState(puzzleData)
	const [direction, setDirection] = React.useState('across')

	function toggleBetweenAcrossAndDown() {
		direction === 'across' ? setDirection('down') : setDirection('across')
	}

	function handleClickInsideSquare(id: number) {
		const stateCopy = state
		const elementIndex = stateCopy.findIndex(el => el.id === id)
		if (stateCopy[elementIndex].isActiveCell) {
			toggleBetweenAcrossAndDown()
		}

		if (stateCopy[elementIndex].isActiveCell === false) {
			stateCopy[elementIndex].isActiveCell = true
		}
	}

	function handleChange(e: any) {
		// setInput(e.target.value.toUpperCase())
	}

	function handleFocus(e: any) {
		e.target.select()
		e.target.style.backgroundColor = 'rgb(252, 215, 49)'
	}

	function handleBlur(e: any) {
		e.target.style.backgroundColor = 'white'
	}

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
						<Board puzzleData={puzzleData} />
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
