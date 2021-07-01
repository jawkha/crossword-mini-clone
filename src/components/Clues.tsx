import * as React from 'react'
import { CluesProps } from './../interfaces'
import CluesList from './CluesList'
import styles from './../styles/Clues.module.css'

export default function Clues({ clues }: CluesProps) {
	return (
		<div className={styles.clues}>
			<CluesList direction='across' directionalClues={clues.across} />
			<CluesList direction='down' directionalClues={clues.down} />
		</div>
	)
}
