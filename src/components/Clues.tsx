import * as React from 'react'
import { CluesProps } from './../interfaces'
import CluesList from './CluesList'
import styles from './../styles/Clues.module.css'

export default function Clues({ clues, activeClue, activeSquare }: CluesProps) {
	return (
		<div className={styles.clues}>
			<CluesList
				direction='across'
				directionalClues={clues.across}
				activeClue={activeClue}
				activeSquare={activeSquare}
			/>
			<CluesList
				direction='down'
				directionalClues={clues.down}
				activeClue={activeClue}
				activeSquare={activeSquare}
			/>
		</div>
	)
}
