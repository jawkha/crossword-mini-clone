import * as React from 'react'
import Square from './Square'
import styles from './../styles/Board.module.css'

interface IBoardProps {
	answers: string[]
}

export default function Board(props: IBoardProps) {
	function renderGrid() {
		// return [...Array(25)].map((letter, index) => <Square key={index} letter={letter} />)
		return props.answers.map((letter, index) => <Square key={index} letter={letter} />)
	}

	return <div className={styles.board}>{renderGrid()}</div>
}
