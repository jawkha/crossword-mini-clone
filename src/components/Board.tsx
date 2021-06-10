import * as React from 'react'
import Square from './Square'
import styles from './../styles/Board.module.css'

export default function Board() {
	function renderGrid() {
		return [...Array(25)].map((el, index) => <Square key={index} />)
	}

	return <div className={styles.board}>{renderGrid()}</div>
}
