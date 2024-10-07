import { ReactNode, useContext } from 'react'
import styles from './options.module.css'
import SidebarItem from './item'
import { EditContext } from '../../../../../context/EditContext'
import { IconGripVertical } from '@tabler/icons-react'

interface SidebarOptionsProps {
  title?: string
  items: {
    icon: ReactNode
    label: string
    to: string
  }[]
  canEdit: boolean
  isShow: boolean
}

const SidebarOptions = (props: SidebarOptionsProps) => {
  const context = useContext(EditContext)

  return (
    <div
      className={`${styles.options} ${context?.isEditing && props.canEdit && styles.optionsEdit}`}
    >
      <span className={styles.optionsTitle}>
        {props.canEdit && context?.isEditing && <IconGripVertical size={16} />}
        {props.title?.toUpperCase()}
      </span>
      {props.items.map((item) => (
        <SidebarItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          to={item.to}
        />
      ))}
    </div>
  )
}

export default SidebarOptions
