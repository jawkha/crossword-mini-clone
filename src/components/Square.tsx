import * as React from 'react'
import styles from './../styles/Square.module.css'

interface ISquareProps {
	letter: string
}

export default function Square(props: ISquareProps) {
	const [input, setInput] = React.useState(props.letter)

	function handleChange(e: any) {
		console.log(e.target.value)
		setInput(e.target.value.toUpperCase())
	}

	return (
		<input
			value={input}
			maxLength={1}
			onChange={handleChange}
			className={props.letter ? styles.square : styles.empty}
		/>
	)
}