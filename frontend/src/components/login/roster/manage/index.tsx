import React from 'react'
import styles from './manage.module.css'
import rr from '../../../../public/login/roster/rr.png'

const RosterManage = () => {
  return (
    <div className={styles.manage}>
      <span className={styles.manageTitle}>Managed by</span>
      <div className={styles.manageBrand}>
        <img className={styles.manageImg} src={rr} alt="Republic Record" />
        <span>Republic Record</span>
      </div>
    </div>
  )
}

export default RosterManage
