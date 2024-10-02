import { useEffect, useState } from 'react'
import styles from './header.module.css'
import user from '../../../../public/login/user.png'
import Account from '../../../common/account'

const RosterHeader = () => {
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setAvatar(user)
    setName('David')
    setRole('Manager')
    setEmail('david@umg.com')
  }, [])

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <span className={styles.headerTitle}>Artist Hub</span>
        <br />
        <span>Business</span>
      </div>
      <Account
        avatar={avatar}
        name={name}
        role={role}
        email={email}
        className={styles.headerAccount}
      />
    </div>
  )
}

export default RosterHeader
