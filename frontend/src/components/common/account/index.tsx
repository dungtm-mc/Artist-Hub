import { Avatar } from '@mantine/core'
import UBadge from '../../ui/Badge'
import styles from './account.module.css'

interface AccountProps {
  avatar: string
  name: string
  role: string
  email: string
  className?: string
}

const Account = (props: AccountProps) => {
  return (
    <div className={props.className}>
      <div className={styles.account}>
        <Avatar src={props.avatar} />
        <div className={styles.accountTop}>
          <div className={styles.accountName}>
            <span>{props.name}</span>
            <UBadge size="xs" color="gray" radius="xs">
              {props.role}
            </UBadge>
          </div>
          <span className={styles.accountEmail}>{props.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Account
