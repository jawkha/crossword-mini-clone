export interface SquareData {
	row: number
	column: number
	clueAcross: number | null
	clueDown: number | null
	displayedNumber: number | null
	answer: string | null
	guess: string
}

export type PuzzleData = SquareData[]

export interface BoardProps {
	puzzleData: PuzzleData
	activeSquareIndex: number
}

export interface SquareProps {
	squareData: SquareData
	isActive: boolean
}

export interface CluesProps {
	clues: {
		across: {
			[key: string]: string
		}
		down: {
			[key: string]: string
		}
	}
}

export interface CluesListProps {
	direction: string
	directionalClues: {
		[key: number]: string
	}
}