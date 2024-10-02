import { Avatar } from '@mantine/core'

import styles from './item.module.css'

interface RosterItemProps {
  avatar: string
  name: string
}

const RosterItem = (props: RosterItemProps) => {
  return (
    <div className={styles.item}>
      <Avatar src={props.avatar} size="150" />
      <span className={styles.itemName}>{props.name}</span>
    </div>
  )
}

export default RosterItem
