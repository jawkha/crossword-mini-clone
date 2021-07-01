import * as React from 'react'
import { CluesListProps } from './../interfaces'
import styles from './../styles/CluesList.module.css'

export default function CluesList({ direction, directionalClues }: CluesListProps) {
	function listItems() {
		return Object.entries(directionalClues).map(([key, value], index) => (
			<p key={index}>{`${key} ${value}`}</p>
		))
	}

	return (
		<div className={styles.list}>
			<h3>{direction.toUpperCase()}</h3>
			{listItems()}
		</div>
	)
}
