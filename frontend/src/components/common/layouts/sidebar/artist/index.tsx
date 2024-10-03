import styles from './artist.module.css'
import UButton from '../../../../ui/Button'
import image from '../../../../../public/overview/artist/avatar.png'
import { useEffect, useState } from 'react'
import { Avatar } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import ArtistModal from './modal'

const Artist = () => {
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setAvatar(image)
    setName('Billie Eilish')
  }, [])

  return (
    <div className={styles.artist}>
      <div className={styles.artistBox}>
        <UButton
          size="md"
          variant="ghost"
          className={`${styles.artistUBtn} ${isModalOpen && styles.modalOpen}`}
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <div className={styles.artistBtn}>
            <div className={styles.artistName}>
              <Avatar src={avatar} size="md" />
              <span>{name}</span>
            </div>
            <IconChevronDown className={styles.artistIcon} />
          </div>
        </UButton>
        <ArtistModal isOpen={isModalOpen} />
      </div>
    </div>
  )
}

export default Artist
