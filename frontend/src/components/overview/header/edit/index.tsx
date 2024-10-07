import { Button } from '@mantine/core'
import { IconPencil } from '@tabler/icons-react'
import styles from './edit.module.css'
import { useContext, useState } from 'react'
import { EditContext } from '../../../../context/EditContext'

const EditButton = () => {
  const [isHover, setIsHover] = useState(false)

  const context = useContext(EditContext)

  return (
    <>
      {context?.isEditing ? (
        <span className={styles.editLabel}>Editing</span>
      ) : (
        <Button
          size="sm"
          radius="xl"
          className={styles.btn}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => {
            context?.setIsEditing(true)
            setIsHover(false)
          }}
        >
          <IconPencil />
          {isHover && <span className={styles.label}>Customize</span>}
        </Button>
      )}
    </>
  )
}

export default EditButton
