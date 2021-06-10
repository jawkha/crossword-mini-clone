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

	function handleFocus(e: any) {
		e.target.select()
		e.target.style.backgroundColor = 'rgb(252, 215, 49)'
	}

	function handleBlur(e: any) {
		e.target.style.backgroundColor = 'white'
	}

	return (
		<input
			value={input}
			maxLength={1}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onChange={handleChange}
			className={props.letter ? styles.square : styles.empty}
		/>
	)
}
