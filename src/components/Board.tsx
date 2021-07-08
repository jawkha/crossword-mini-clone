import * as React from 'react'
import Square from './Square'
import { BoardProps } from './../interfaces'
import styles from './../styles/Board.module.css'

export default function Board({
	puzzleData,
	activeSquareIndex,
	activeDirection,
	toggleDirection,
	convertInactiveSquareToActiveSquare,
}: BoardProps) {
	let highlightableRow: number
	let highlightableColumn: number

	function shouldBeHighlighted() {
		if (activeDirection === 'across') {
			highlightableRow = puzzleData[activeSquareIndex].row
			return highlightableRow
		}
		if (activeDirection === 'down') {
			highlightableColumn = puzzleData[activeSquareIndex].column
			return highlightableColumn
		}
	}

	function renderGrid() {
		shouldBeHighlighted()
		return puzzleData.map((squareData, index) => (
			<Square
				key={index}
				squareData={squareData}
				isActive={index === activeSquareIndex}
				activeDirection={activeDirection}
				highlightableRow={highlightableRow}
				highlightableColumn={highlightableColumn}
				toggleDirection={toggleDirection}
				convertInactiveSquareToActiveSquare={convertInactiveSquareToActiveSquare}
			/>
		))
		// return Object.values([]).map(el => <Square />)
	}

	return <div className={styles.board}>{renderGrid()}</div>
}
