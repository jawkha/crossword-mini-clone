import * as React from 'react'
import styles from './../styles/Square.module.css'

interface ISquareProps {
	letter: string | null
}

export default function Square(props: ISquareProps) {
	return (
		<input
			type='text'
			value=''
			maxLength={1}
			onFocus={() => {}}
			onBlur={() => {}}
			onChange={() => {}}
			className={props.letter ? styles.square : styles.empty}
		/>
	)
}
