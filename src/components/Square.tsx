import * as React from 'react'
import styles from './../styles/Square.module.css'

interface ISquareProps {
	square: {
		id: number
		rowNumber: number
		columnNumber: number
		isFirstLetterInWord: boolean
		clueNumber: number | null
		across: string | null
		down: string | null
		isActiveCell: boolean
		answer: string | null
		userInput: string | null
	}
	handleClickInsideSquare(id: number): void
	handleFocusOnSquare(e: any, id: number): void
	handleBlurOnSquare(e: any): void
}

export default function Square(props: ISquareProps) {
	return (
		<input
			type='text'
			value=''
			maxLength={1}
			onFocus={e => props.handleFocusOnSquare(e, props.square.id)}
			onBlur={props.handleBlurOnSquare}
			onClick={() => props.handleClickInsideSquare(props.square.id)}
			onChange={() => {}}
			className={props.square.answer ? styles.square : styles.empty}
		/>
	)
}
