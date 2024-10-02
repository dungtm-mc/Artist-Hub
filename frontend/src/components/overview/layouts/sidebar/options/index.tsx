import { ReactNode } from 'react'
import styles from './options.module.css'
import SidebarItem from './item'

interface SidebarOptionsProps {
  title?: string
  items: {
    icon: ReactNode
    label: string
    to: string
  }[]
}

const SidebarOptions = (props: SidebarOptionsProps) => {
  return (
    <div className={styles.options}>
      <span className={styles.optionsTitle}>{props.title?.toUpperCase()}</span>
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
