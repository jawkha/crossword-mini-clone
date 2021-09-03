import * as React from 'react'
import { CluesListProps } from './../interfaces'
import styles from './../styles/CluesList.module.css'

/**
 * TO DO: Implement highlighted left border for the relevant clue in the list
 */

export default function CluesList({
	puzzleData,
	direction,
	directionalClues,
	activeClue,
	activeSquare,
	setActiveSquareIndex,
	setActiveDirection,
	setDirectionalClue,
	setActiveClue,
}: CluesListProps) {
	function handleClick(clueDirection: 'across' | 'down', clueNumber: number, clueString: string) {
		setActiveDirection(clueDirection)
		setDirectionalClue(activeSquare[clueDirection])
		const activeSquareIndex = puzzleData.findIndex(
			squareData =>
				squareData[direction] === clueNumber && squareData.displayedNumber === clueNumber
		)
		setActiveSquareIndex(activeSquareIndex)
		console.log({ clueDirection, clueNumber, clueString, activeSquare })
	}

	function listItems() {
		return Object.entries(directionalClues).map(([key, value], index) => (
			<p
				className={`${value === activeClue ? styles['highlighted-clue'] : null}`}
				key={index}
				onClick={() => handleClick(direction, +key, value)}>{`${key} ${value}`}</p>
		))
	}

	return (
		<div className={styles.list}>
			<h3>{direction.toUpperCase()}</h3>
			{listItems()}
		</div>
	)
}
