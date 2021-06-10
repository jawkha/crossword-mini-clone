import * as React from 'react'
import styles from './../styles/Square.module.css'

interface ISquareProps {
	letter: string
}

export default function Square(props: ISquareProps) {
	return <div className={props.letter ? styles.square : styles.empty}>{props.letter}</div>
}
