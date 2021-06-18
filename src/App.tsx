import * as React from 'react'
import Timer from './components/Timer'
import Options from './components/Options'
import ActiveClue from './components/ActiveClue'
import Board from './components/Board'
import CluesList from './components/CluesList'
import { clues, answers } from './data/puzzle-1'
import './App.css'

export default function App() {
	const [activeSquare, setActiveSquare] = React.useState(0)
	const [solution] = React.useState(answers)
	const [userAnswers, setUserAnswers] = React.useState<string[]>([...Array(answers.length)])

	return (
		<div className='app'>
			<h1>The Mini Crossword</h1>
			<div className='timer-and-options'>
				<Timer />
				<Options />
			</div>
			<div className='board-and-clues'>
				<div>
					{/* ActiveClue value depends on the currently active square and the direction (across or down) */}
					<ActiveClue />
					<Board />
				</div>
				<div>
					<CluesList />
					<CluesList />
				</div>
			</div>
		</div>
	)
}
