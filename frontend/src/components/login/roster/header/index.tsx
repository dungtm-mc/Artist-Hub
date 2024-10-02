import { useEffect, useState } from 'react'
import styles from './header.module.css'
import { Avatar } from '@mantine/core'
import user from '../../../../public/login/user.png'
import UBadge from '../../../ui/Badge'

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
      <div className={styles.headerAccount}>
        <Avatar src={avatar} />
        <div className={styles.headerAccountTop}>
          <div className={styles.headerAccountName}>
            <span>{name}</span>
            <UBadge size="xs" color="gray" radius="xs">
              {role}
            </UBadge>
          </div>
          <span className={styles.headerAccountEmail}>{email}</span>
        </div>
      </div>
    </div>
  )
}

export default RosterHeader
