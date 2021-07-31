import * as React from 'react'
import { SquareProps, SpecialKey } from './../interfaces'
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
	convertLowerIndexedSquareToActiveSquare,
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
			console.log('inactive key pressed', e.key)
			return
		}
		// handle cases where the keypress is an arrow key or a spacebar
		const specialKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', ' ']
		if (specialKeys.includes(e.key)) {
			console.log('special key pressed', e.key)
			switch (e.key) {
				case 'ArrowRight':
					if (activeDirection === 'down') {
						toggleDirection()
					} else {
						convertNextSquareToActiveSquare(SpecialKey.Arrow)
					}
					return
				case 'ArrowLeft':
					if (activeDirection === 'down') {
						toggleDirection()
					} else {
						convertLowerIndexedSquareToActiveSquare(SpecialKey.Arrow)
					}
					return
				case 'ArrowUp':
					if (activeDirection === 'across') {
						toggleDirection()
					} else {
						convertLowerIndexedSquareToActiveSquare(SpecialKey.Arrow)
					}
					return
				case 'ArrowDown':
					if (activeDirection === 'across') {
						toggleDirection()
					} else {
						convertNextSquareToActiveSquare(SpecialKey.Arrow)
					}
					return
				case 'Backspace':
					console.log(e.key)
					inputUserGuess(e)
					convertLowerIndexedSquareToActiveSquare(SpecialKey.Backspace)
					return
				case ' ':
					console.log(e)
					inputUserGuess(e)
					convertNextSquareToActiveSquare(SpecialKey.SpaceBar)
					return
			}
		}
		// console.log(e)
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
