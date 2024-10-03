import { ReactNode, useEffect, useState } from 'react'
import styles from './item.module.css'
import { NavLink, useLocation } from 'react-router-dom'

interface SidebarItem {
  icon: ReactNode
  label: string
  to: string
}

const SidebarItem = (props: SidebarItem) => {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(location.pathname.startsWith(props.to))
  }, [location.pathname, props.to])

  return (
    <NavLink to={props.to} className={styles.nav}>
      <div className={`${styles.link} ${isActive && styles.active}`}>
        <span className={styles.icon}>{props.icon}</span>
        <span>{props.label}</span>
      </div>
    </NavLink>
  )
}

export default SidebarItem
