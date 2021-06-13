import * as React from 'react'
import Square from './Square'
import styles from './../styles/Board.module.css'
import { IPuzzleData } from '../App'

export default function Board(props: {
	puzzle: IPuzzleData
	handleClickInsideSquare: any
	handleFocusOnSquare: any
	handleBlurOnSquare: any
}) {
	function renderGrid() {
		// return [...Array(25)].map((letter, index) => <Square key={index} letter={letter} />)
		return Object.values(props.puzzle).map(el => (
			<Square
				key={el.id}
				square={el}
				handleClickInsideSquare={props.handleClickInsideSquare}
				handleFocusOnSquare={props.handleFocusOnSquare}
				handleBlurOnSquare={props.handleBlurOnSquare}
			/>
		))
	}

	return <div className={styles.board}>{renderGrid()}</div>
}
