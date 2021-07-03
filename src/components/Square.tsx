import * as React from 'react'
import { SquareProps } from './../interfaces'
import styles from './../styles/Square.module.css'

export default function Square({
	squareData,
	isActive,
	activeDirection,
	highlightableRow,
	highlightableColumn,
}: SquareProps) {
	return (
		<div className={`${styles.square}`}>
			<span className={styles.number}>{squareData.displayedNumber}</span>
			<input
				type='text'
				maxLength={1}
				autoFocus={isActive}
				onFocus={() => {}}
				onBlur={() => {}}
				onClick={() => {}}
				onChange={() => {}}
				className={`${styles.input} ${isActive ? styles.active : ''} ${
					squareData.answer ? styles.fillable : styles.unfillable
				} ${
					(activeDirection === 'across' && squareData.row === highlightableRow) ||
					(activeDirection === 'down' && squareData.column === highlightableColumn)
						? styles.highlighted
						: ''
				}`}
			/>
		</div>
	)
}
