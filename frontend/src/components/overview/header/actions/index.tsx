import { IconCheck, IconPlus } from '@tabler/icons-react'
import UButton from '../../../ui/Button'
import styles from './actions.module.css'
import { useContext } from 'react'
import { EditContext } from '../../../../context/EditContext'

const EditActions = () => {
  const context = useContext(EditContext)

  return (
    <div className={styles.actions}>
      <UButton size="xs" variant="ghost" radius="xl">
        <div className={styles.btn}>
          <IconPlus size={16} />
          <span>Add to Bottom</span>
        </div>
      </UButton>
      <UButton size="xs" variant="secondary" radius="xl">
        <div
          className={styles.btn}
          onClick={() => context?.setIsEditing(false)}
        >
          <IconCheck size={16} />
          <span>Save</span>
        </div>
      </UButton>
    </div>
  )
}

export default EditActions
