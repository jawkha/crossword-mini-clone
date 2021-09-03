import * as React from 'react'
import { CluesProps } from './../interfaces'
import CluesList from './CluesList'
import styles from './../styles/Clues.module.css'

export default function Clues({
	puzzleData,
	clues,
	activeClue,
	activeSquare,
	setActiveSquareIndex,
	setActiveDirection,
	setDirectionalClue,
	setActiveClue,
}: CluesProps) {
	return (
		<div className={styles.clues}>
			<CluesList
				puzzleData={puzzleData}
				direction='across'
				directionalClues={clues.across}
				activeClue={activeClue}
				activeSquare={activeSquare}
				setActiveSquareIndex={setActiveSquareIndex}
				setActiveDirection={setActiveDirection}
				setDirectionalClue={setDirectionalClue}
				setActiveClue={setActiveClue}
			/>
			<CluesList
				puzzleData={puzzleData}
				direction='down'
				directionalClues={clues.down}
				activeClue={activeClue}
				activeSquare={activeSquare}
				setActiveSquareIndex={setActiveSquareIndex}
				setActiveDirection={setActiveDirection}
				setDirectionalClue={setDirectionalClue}
				setActiveClue={setActiveClue}
			/>
		</div>
	)
}
