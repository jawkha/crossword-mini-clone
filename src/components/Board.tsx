import * as React from 'react'
import Square from './Square'
import { BoardProps } from './../interfaces'
import styles from './../styles/Board.module.css'

export default function Board({ puzzleData, activeSquareIndex, activeDirection }: BoardProps) {
	function renderGrid() {
		return puzzleData.map((squareData, index) => (
			<Square
				key={index}
				squareData={squareData}
				isActive={index === activeSquareIndex}
				activeDirection={activeDirection}
			/>
		))
		// return Object.values([]).map(el => <Square />)
	}

	return <div className={styles.board}>{renderGrid()}</div>
}
