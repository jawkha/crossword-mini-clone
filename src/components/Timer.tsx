import * as React from 'react'
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai'
import { TimerProps } from '../interfaces'
import styles from './../styles/Timer.module.css'

export default function Timer({ timer, pauseTimer, resumeTimer }: TimerProps) {
	return (
		<div className={styles.timer}>
			<span>{timer}</span>
			<span>
				<AiOutlinePauseCircle onClick={pauseTimer} />
				<AiOutlinePlayCircle onClick={resumeTimer} />
			</span>
		</div>
	)
}
