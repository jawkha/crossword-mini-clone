import * as React from 'react'
import styles from './../styles/Options.module.css'

export default function Options() {
	return (
		<ul className={styles.options}>
			<li className={styles.item}>Rebus</li>
			<li className={styles.item}>Clear</li>
			<li className={styles.item}>Reveal</li>
			<li className={styles.item}>Check</li>
		</ul>
	)
}
