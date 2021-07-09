import * as React from 'react'
import { SquareProps } from './../interfaces'
import styles from './../styles/Square.module.css'

export default function Square({
	squareData,
	isActive,
	activeDirection,
	highlightableRow,
	highlightableColumn,
	toggleDirection,
	convertInactiveSquareToActiveSquare,
	inputUserGuess,
	userGuess,
	convertNextSquareToActiveSquare,
}: SquareProps) {
	const handleClickInsideActiveSquare = () => toggleDirection()
	const handleClickInsideInactiveSquare = (
		e: React.MouseEvent<HTMLElement>,
		squareData: SquareProps['squareData']
	) => convertInactiveSquareToActiveSquare(squareData)

	const handleClick = (e: React.MouseEvent<HTMLElement>) =>
		isActive ? handleClickInsideActiveSquare() : handleClickInsideInactiveSquare(e, squareData)

	const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
		inputUserGuess(e)
		convertNextSquareToActiveSquare()
	}

	return (
		<div className={`${styles.square}`}>
			<span className={styles.number}>{squareData.displayedNumber}</span>
			<input
				id={`${squareData.row}${squareData.column}`}
				type='text'
				maxLength={1}
				value={userGuess ? userGuess.toUpperCase() : ''}
				disabled={!squareData.answer}
				autoFocus={isActive}
				onClick={handleClick}
				onInput={handleChange}
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
