import * as React from 'react'
import Timer from './components/Timer'
import Options from './components/Options'
import ActiveClue from './components/ActiveClue'
import Board from './components/Board'
import Clues from './components/Clues'
import { clues, puzzleData } from './data/puzzle-1'
import { SquareData, CluesProps, SquareProps, SpecialKey } from './interfaces'
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
		answersCopy[activeSquareIndex] = e.key === ' ' ? '' : e.key
		// answersCopy[activeSquareIndex] = e.key
		setUserAnswers(answersCopy)
	}

	const convertNextSquareToActiveSquare: SquareProps['convertNextSquareToActiveSquare'] =
		specialKey => {
			const nextFillableSquareIndex = puzzleData.findIndex(
				/**
				 * the logic for finding the index of the next fillable square is as follows:
    for arrow keys, we are using the following logic to select the next active square:
    a. the index of the square should be higher than the currently active square
    b. the square should be fillable
    c. depending on the active direction, the square should be in the same row or column as the current active square
    it does not matter whether the next square is empty or has previously been filled by the user
    
    for spacebar, the additional conditions are:
    a. if the currently active square is empty, the next active square has to be empty as well
    b. if the currently active square is already filled, then pressing the spacebar will delete its contents and move to the next square whether its empty or filled
				 */

				(squareData, index) =>
					index > activeSquareIndex &&
					squareData.answer !== null &&
					(activeDirection === 'across' // to ensure that the next square is from the currently active row or column
						? squareData.row === activeSquare.row
						: squareData.column === activeSquare.column) &&
					(specialKey === SpecialKey.Arrow || // when arrow keys are pressed, the next fillable square even if there's already input in it will be selected
					(specialKey === SpecialKey.SpaceBar && // when spacebar is pressed and the current active square already has input in it, then the next fillable square whether it's empty or filled becomes active. when spacebar is pressed and the next fillable square is empty, it becomes the active square
						(userAnswers[activeSquareIndex] !== '' || userAnswers[index] === ''))
						? true
						: userAnswers[index] === '')
			)
			console.log('nfsi', nextFillableSquareIndex)
			setActiveSquareIndex(
				nextFillableSquareIndex >= 0 ? nextFillableSquareIndex : activeSquareIndex
			)
		}

	const convertLowerIndexedSquareToActiveSquare: SquareProps['convertLowerIndexedSquareToActiveSquare'] =
		specialKey => {
			const arrayOfIndices: number[] = []
			puzzleData.forEach((squareData, index) => {
				if (
					activeSquareIndex > index &&
					squareData.answer !== null &&
					(activeDirection === 'across'
						? squareData.row === activeSquare.row
						: squareData.column === activeSquare.column) &&
					(specialKey === SpecialKey.Arrow ? true : userAnswers[index] === '')
				) {
					arrayOfIndices.push(index)
				}
			})
			const lowerIndexedFillableSquareIndex = Math.max(...arrayOfIndices)
			console.log('lifsi', lowerIndexedFillableSquareIndex)
			setActiveSquareIndex(
				lowerIndexedFillableSquareIndex >= 0 ? lowerIndexedFillableSquareIndex : activeSquareIndex
			)
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
		// console.log(timerId)
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
						convertLowerIndexedSquareToActiveSquare={convertLowerIndexedSquareToActiveSquare}
					/>
				</div>
				<div>
					<Clues clues={clues} activeClue={activeClue} activeSquare={activeSquare} />
				</div>
			</div>
		</div>
	)
}
