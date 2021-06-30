export interface SquareData {
	row: number
	column: number
	clueAcross: number
	clueDown: number
	answer: string
	guess: string
}

export interface PuzzleData {
	[key: number]: SquareData
}

export interface BoardProps {
	gridSize: number
}

export interface CluesProps {
	clues: {
		across: {
			[key: number]: string
		}
		down: {
			[key: number]: string
		}
	}
}

export interface CluesListProps {
	direction: string
	directionalClues: {
		[key: number]: string
	}
}
