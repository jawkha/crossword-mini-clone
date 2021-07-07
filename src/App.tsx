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
	const activeSquareIndex = puzzleData.findIndex(squareData => squareData.answer !== null)
	console.log({ activeSquareIndex })
	const [activeSquare, setActiveSquare] = React.useState(puzzleData[activeSquareIndex])
	// If the direction is across, the row and its associated clue will be highlighted. If down, then column.
	const [activeDirection, setActiveDirection] = React.useState<'across' | 'down'>('across')
	// First we will extract the active clue number from puzzleData based on the activeSquare and activeDirection, and then we will use this number to get the string from the clues object.
	const directionalClue =
		activeDirection === 'across' ? activeSquare['clueAcross'] : activeSquare['clueDown']
	const [activeClue, setActiveClue] = React.useState(
		(clues as CluesProps['clues'])[activeDirection][directionalClue!]
	)
	const [userAnswers, setUserAnswers] = React.useState<string[]>([...Array(puzzleData.length)])
	const [timer, setTimer] = React.useState(0)

	console.log({ activeSquareIndex, activeSquare, activeDirection, directionalClue, activeClue })

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

	React.useEffect(() => {
		timerId = setInterval(() => {
			setTimer(timer + 1)
		}, 1000)
		console.log(timerId)
		return () => clearInterval(timerId)
	})

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
					/>
				</div>
				<div>
					<Clues clues={clues} activeClue={activeClue} activeSquare={activeSquare} />
				</div>
			</div>
		</div>
	)
}
