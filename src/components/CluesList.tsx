import * as React from 'react'
import styles from './../styles/CluesList.module.css'

export default function CluesList() {
	function listItems() {
		return Object.entries([]).map(([key, value], index) => <p key={index}>{`${key} ${value}`}</p>)
	}

	return (
		<div className={styles.list}>
			<h3>direction.toUpperCase</h3>
			{listItems()}
		</div>
	)
}
