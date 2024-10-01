import React from 'react'
import RosterHeader from '../../../components/login/roster/header'
import Background from '../../../components/login/roster/background'
import styles from './roster.module.css'
import RosterList from '../../../components/login/roster/list'
import RosterManage from '../../../components/login/roster/manage'

const LoginRoster = () => {
  return (
    <div className={styles.roster}>
      <Background>
        <div className={styles.rosterBox}>
          <RosterHeader />
          <RosterList />
          <RosterManage />
        </div>
      </Background>
    </div>
  )
}

export default LoginRoster
