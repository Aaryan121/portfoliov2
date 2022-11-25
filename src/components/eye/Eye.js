import React from 'react'
import styles from "./Eye.module.css"

const Eye = () => {
  return (
    <div className={styles.eyeContainer}>
        <div className={styles.whitePart}>
            <div className={styles.blackPart}></div>
        </div>
    </div>
  )
}

export default Eye