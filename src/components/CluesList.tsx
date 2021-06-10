import * as React from 'react'
import styles from './../styles/CluesList.module.css'

interface ICluesListProps {
	direction: 'Across' | 'Down'
	list: {}
}

function listItems(obj: ICluesListProps['list']) {
	return Object.entries(obj).map(([key, value], index) => <p key={index}>{`${key} ${value}`}</p>)
}

export default function CluesList(prop: ICluesListProps) {
	const { direction, list } = prop
	return (
		<div className={styles.list}>
			<h3>{direction.toUpperCase()}</h3>
			{listItems(list)}
		</div>
	)
}
