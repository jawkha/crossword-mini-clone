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
		// handle cases where the keypress is an a key which should have no output
		const inactiveKeys = [
			'Shift',
			'Enter',
			'Tab',
			'CapsLock',
			'Control',
			'Alt',
			'Meta',
			'\\',
			'[',
			']',
			"'",
			';',
			'/',
			'.',
			',',
			'`',
			'-',
			'=',
		]

		if (inactiveKeys.includes(e.key)) {
			console.log('inactive key pressed')
			console.log(e.key)
			return
		}
		// handle cases where the keypress is an arrow key or a spacebar
		const specialKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', ' ']
		if (specialKeys.includes(e.key)) {
			console.log('special key pressed')
			// perhaps use a switch statement to account for each key
			switch (e.key) {
				case 'ArrowRight':
					console.log(e.key)
					return
				case 'ArrowLeft':
					console.log(e.key)
					return
				case 'ArrowUp':
					console.log(e.key)
					return
				case 'ArrowDown':
					console.log(e.key)
					return
				case 'Backspace':
					console.log(e.key)
					return
				case ' ':
					console.log(e.key)
					return
			}
		}
		console.log(e)
		// handle cases where a character is input into the field
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
				// onInput={handleChange}
				onKeyUp={handleChange}
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
