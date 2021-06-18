import * as React from 'react'
import Square from './Square'
import styles from './../styles/Board.module.css'

export default function Board() {
	function renderGrid() {
		// return [...Array(25)].map((letter, index) => <Square key={index} letter={letter} />)
		return Object.values([]).map(el => <Square />)
	}

	return <div className={styles.board}>{renderGrid()}</div>
}
