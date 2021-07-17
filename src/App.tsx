import * as React from 'react'
import Timer from './components/Timer'
import Options from './components/Options'
import ActiveClue from './components/ActiveClue'
import Board from './components/Board'
import Clues from './components/Clues'
import { clues, puzzleData } from './data/puzzle-1'
import { SquareData, CluesProps } from './interfaces'
import styles from './styles/App.module.css'

export default function App() {
	// To identify the first active square, we need to find the index of the first element in the array where answer is null.
	const [activeSquareIndex, setActiveSquareIndex] = React.useState(
		puzzleData.findIndex(squareData => squareData.answer !== null)
	)

	const [activeSquare, setActiveSquare] = React.useState(puzzleData[activeSquareIndex])
	// If the direction is across, the row and its associated clue will be highlighted. If down, then column.
	const [activeDirection, setActiveDirection] = React.useState<'across' | 'down'>('across')
	// First we will extract the active clue number from puzzleData based on the activeSquare and activeDirection, and then we will use this number to get the string from the clues object.
	const [directionalClue, setDirectionalClue] = React.useState(activeSquare[activeDirection])
	const [activeClue, setActiveClue] = React.useState(
		(clues as CluesProps['clues'])[activeDirection][directionalClue!]
	)
	const [userAnswers, setUserAnswers] = React.useState<(string | null)[]>(
		[...Array(puzzleData.length)].map((el, index) =>
			puzzleData[index]['answer'] === null ? (el = null) : (el = '')
		)
	)
	const [timer, setTimer] = React.useState(0)

	let timerId: NodeJS.Timeout

	const pauseTimer = () => {
		console.log('timer paused')
		clearInterval(timerId)
	}

	const resumeTimer = () => {
		timerId = setInterval(() => {
			setTimer(timer + 1)
		}, 1000)
	}

	const toggleDirection = () => {
		const newDirection = activeDirection === 'across' ? 'down' : 'across'
		setActiveDirection(newDirection)
	}

	const convertInactiveSquareToActiveSquare = (clickedSquare: SquareData) => {
		setActiveSquareIndex(
			puzzleData.findIndex(
				square => square.row === clickedSquare.row && square.column === clickedSquare.column
			)
		)
	}

	const inputUserGuess = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const answersCopy = [...userAnswers]
		// answersCopy[activeSquareIndex] = (e.target as HTMLInputElement).value
		// answersCopy[activeSquareIndex] = e.key === ' ' ? '' : e.key
		answersCopy[activeSquareIndex] = e.key
		setUserAnswers(answersCopy)
	}

	const convertNextSquareToActiveSquare = () => {
		const nextFillableSquareIndex = puzzleData.findIndex(
			(squareData, index) =>
				index > activeSquareIndex &&
				squareData.answer !== null &&
				(activeDirection === 'across'
					? squareData.row === activeSquare.row
					: squareData.column === activeSquare.column) &&
				userAnswers[index] === ''
		)
		setActiveSquareIndex(nextFillableSquareIndex >= 0 ? nextFillableSquareIndex : activeSquareIndex)
	}

	React.useEffect(() => {
		setActiveSquare(puzzleData[activeSquareIndex])
		document.getElementById(`${activeSquare.row}${activeSquare.column}`)?.focus()
		setDirectionalClue(activeSquare[activeDirection])
		setActiveClue((clues as CluesProps['clues'])[activeDirection][directionalClue!])
	}, [activeSquareIndex, activeSquare, activeDirection, directionalClue])

	React.useEffect(() => {
		timerId = setInterval(() => {
			setTimer(timer + 1)
		}, 1000)
		console.log(timerId)
		return () => clearInterval(timerId)
	})

	React.useEffect(() => {
		setDirectionalClue(activeSquare[activeDirection])
		setActiveClue((clues as CluesProps['clues'])[activeDirection][directionalClue!])
	}, [activeDirection])

	return (
		<div className={styles.app}>
			<h1>The Mini Crossword</h1>
			<div className={styles['timer-and-options']}>
				<Timer timer={timer} pauseTimer={pauseTimer} resumeTimer={resumeTimer} />
				<Options />
			</div>
			<div className={styles['board-and-clues']}>
				<div>
					<ActiveClue activeClue={activeClue} />
					<Board
						puzzleData={puzzleData}
						activeSquareIndex={activeSquareIndex}
						activeDirection={activeDirection}
						toggleDirection={toggleDirection}
						convertInactiveSquareToActiveSquare={convertInactiveSquareToActiveSquare}
						inputUserGuess={inputUserGuess}
						userAnswers={userAnswers}
						convertNextSquareToActiveSquare={convertNextSquareToActiveSquare}
					/>
				</div>
				<div>
					<Clues clues={clues} activeClue={activeClue} activeSquare={activeSquare} />
				</div>
			</div>
		</div>
	)
}
