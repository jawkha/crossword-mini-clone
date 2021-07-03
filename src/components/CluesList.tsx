import * as React from 'react'
import { CluesListProps } from './../interfaces'
import styles from './../styles/CluesList.module.css'

export default function CluesList({
	direction,
	directionalClues,
	activeClue,
	activeSquare,
}: CluesListProps) {
	function listItems() {
		return Object.entries(directionalClues).map(([key, value], index) => (
			<p
				className={`${value === activeClue ? styles['highlighted-clue'] : ''} ${
					(direction === 'across' && activeSquare.clueDown?.toString() === key) ||
					(direction === 'down' && activeSquare.clueAcross?.toString() === key)
						? styles['highlighted-border']
						: ''
				}`}
				key={index}>{`${key} ${value}`}</p>
		))
	}

	return (
		<div className={styles.list}>
			<h3>{direction.toUpperCase()}</h3>
			{listItems()}
		</div>
	)
}
