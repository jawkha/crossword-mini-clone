import * as React from 'react'
import Timer from './components/Timer'
import Options from './components/Options'
import ActiveClue from './components/ActiveClue'
import Board from './components/Board'
import CluesList from './components/CluesList'
import { clues, puzzleData } from './data/puzzle-2-obj'
import './App.css'

export interface IPuzzleDataItem {
	id: number
	rowNumber: number
	columnNumber: number
	isFirstLetterInWord: boolean
	clueNumber: number | null
	across: string | null
	down: string | null
	isActiveCell: boolean
	answer: string | null
	userInput: string | null
}

export interface IPuzzleData {
	[key: number]: IPuzzleDataItem
}

function App() {
	const [data, setData] = React.useState(puzzleData as IPuzzleData)
	const [time, setTime] = React.useState()
	const [direction, setDirection] = React.useState<'across' | 'down'>('across')
	const [currentActiveSquare, setCurrentActiveSquare] = React.useState<number>(1)
	const [currentActiveClue, setCurrentActiveClue] = React.useState(
		data[currentActiveSquare][direction]
	)

	// const setCurrentActiveClue = () => state[currentActiveSquare][direction]
	const setActiveClue = () => {
		if (data[currentActiveSquare]) {
			setCurrentActiveClue(data[currentActiveSquare][direction])
		}
	}

	function toggleBetweenAcrossAndDown() {
		direction === 'across' ? setDirection('down') : setDirection('across')
	}

	function handleClickInsideSquare(id: number) {
		console.log('click event')
		if (id === currentActiveSquare) {
			toggleBetweenAcrossAndDown()
			setActiveClue()
		}
	}

	function handleChangeInsideSquare(e: any) {
		// setInput(e.target.value.toUpperCase())
	}

	function handleFocusOnSquare(e: any, id: number) {
		console.log('focus event')
		e.target.select()
		e.target.style.backgroundColor = 'rgb(252, 215, 49)'
		setCurrentActiveSquare(id)
		// setActiveClue()
	}

	function handleBlurOnSquare(e: any) {
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
						<ActiveClue currentActiveClue={currentActiveClue} />
						<Board
							puzzle={data}
							handleClickInsideSquare={handleClickInsideSquare}
							handleFocusOnSquare={handleFocusOnSquare}
							handleBlurOnSquare={handleBlurOnSquare}
						/>
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
