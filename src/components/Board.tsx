import * as React from 'react'
import Square from './Square'
import styles from './../styles/Board.module.css'

interface IPuzzleDataItem {
	id: number
	rowNumber: number
	columnNumber: number
	isFirstLetterInWord: boolean
	clueNumber: number | null
	partOfWhichClueAcross: number | null
	partOfWhichClueDown: number | null
	isActiveCell: boolean
	answer: string | null
	userInput: string | null
}

interface IBoardProps {
	puzzleData: IPuzzleDataItem[]
}

export default function Board(props: IBoardProps) {
	function renderGrid() {
		// return [...Array(25)].map((letter, index) => <Square key={index} letter={letter} />)
		return props.puzzleData.map(el => <Square key={el.id} letter={el.answer} />)
	}

	return <div className={styles.board}>{renderGrid()}</div>
}
