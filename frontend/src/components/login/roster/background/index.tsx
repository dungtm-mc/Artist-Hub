import React, { ReactNode } from 'react'
import styles from './background.module.css'
import overlay from '../../../../public/login/roster/overlay.png'

interface BackgroundProps {
  children: ReactNode
}

const Background = (props: BackgroundProps) => {
  return (
    <div className={styles.background}>
      <img src={overlay} alt="Overlay" className={styles.overlay} />
      <div className={styles.children}>{props.children}</div>
    </div>
  )
}

export default Background
