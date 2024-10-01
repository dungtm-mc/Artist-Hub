import Logo from '../../Logo/Logo'
import styles from './Background.module.css'
import Color from '../../../public/login/color.png'
import Overlay from '../../../public/login/overlay.png'
import React from 'react'

const Background = () => {
  return (
    <div className={styles.background}>
      <img src={Color} className={styles.backgroundOverlay} />
      <img src={Overlay} className={styles.backgroundOverlay} />
      <div className={styles.backgroundLogo}>
        <Logo mode="light" />
      </div>
      <div className={styles.backgroundText}>
        <h1 className={styles.backgroundTextLogo}>
          <span>artist</span>
          <br />
          <span>hub</span>
        </h1>
        <span className={styles.backgroundTextGroup}>by UMG</span>
      </div>
    </div>
  )
}

export default Background
