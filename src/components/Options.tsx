import * as React from 'react'
import styles from './../styles/Options.module.css'

export default function Options() {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>Rebus</div>
      <div className={styles.item}>Clear</div>
      <div className={styles.item}>Reveal</div>
      <div className={styles.item}>Check</div>
    </div>
  )
}