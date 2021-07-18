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
		// handle cases where the keypress is a key which should have no output
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
			/**
		**_if the pressed key is an arrow key_**, then the result of the key press depends on the
  		current active direction and the type of the arrow key.
  - if the arrow key and the current active direction are the same, e.g. up or down arrow key
    when the active direction is 'down' or left and right arrow keys when the active direction is
    across, then the key press results in the next square in the direction of the arrow key becoming
    active.
  - if the current active square is the last square in the active row or column, then the same
    square remains active.
  - if the arrow key and the current active direction are not the same, then the key press
    results in the active direction getting toggled.
			 */
			switch (e.key) {
				case 'ArrowRight':
					if (activeDirection === 'down') {
						toggleDirection()
					} else {
						console.log(e.key)
					}
					return
				case 'ArrowLeft':
					if (activeDirection === 'down') {
						toggleDirection()
					} else {
						console.log(e.key)
					}
					return
				case 'ArrowUp':
					if (activeDirection === 'across') {
						toggleDirection()
					} else {
						console.log(e.key)
					}
					return
				case 'ArrowDown':
					if (activeDirection === 'across') {
						toggleDirection()
					} else {
						console.log(e.key)
					}
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
