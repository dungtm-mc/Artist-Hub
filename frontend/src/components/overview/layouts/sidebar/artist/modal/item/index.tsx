import { Avatar } from '@mantine/core'
import styles from './item.module.css'

interface ModalItemProps {
  avatar: string
  label: string
}

const ModalItem = (props: ModalItemProps) => {
  return (
    <div className={styles.item}>
      <Avatar src={props.avatar} size={32} />
      <span className={styles.label}>{props.label}</span>
    </div>
  )
}

export default ModalItem
