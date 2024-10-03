import { Button } from '@mantine/core'
import { IconPencil } from '@tabler/icons-react'
import styles from './edit.module.css'
import { useState } from 'react'

const EditButton = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div>
      <Button
        size="sm"
        radius="xl"
        className={styles.btn}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <IconPencil />
        {isHover && <span className={styles.label}>Customize</span>}
      </Button>
    </div>
  )
}

export default EditButton
