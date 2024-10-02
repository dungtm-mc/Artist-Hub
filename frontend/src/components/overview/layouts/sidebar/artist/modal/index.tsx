import styles from './modal.module.css'
import avatar from '../../../../../../public/login/roster/avatar.png'
import ModalItem from './item'

interface ArtistModalProps {
  isOpen: boolean
}

const ArtistModal = ({ isOpen }: ArtistModalProps) => {
  const items = [
    {
      avatar: avatar,
      label: 'Olivia Rodrigo'
    },
    {
      avatar: avatar,
      label: 'Eminem'
    },
    {
      avatar: avatar,
      label: 'Black Pink'
    },
    {
      avatar: avatar,
      label: 'D4VD'
    }
  ]

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : styles.close}`}>
      <span className={styles.title}>ROSTER</span>
      {items.map((item) => (
        <ModalItem key={item.label} label={item.label} avatar={item.avatar} />
      ))}
    </div>
  )
}

export default ArtistModal
