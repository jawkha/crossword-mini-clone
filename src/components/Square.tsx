import * as React from 'react'
import { SquareProps } from './../interfaces'
import styles from './../styles/Square.module.css'

export default function Square({ squareData, isActive }: SquareProps) {
	return (
		<input
			type='text'
			maxLength={1}
			autoFocus={isActive}
			onFocus={() => {}}
			onBlur={() => {}}
			onChange={() => {}}
			className={isActive ? styles.active : squareData.answer ? styles.fillable : styles.unfillable}
		/>
	)
}
