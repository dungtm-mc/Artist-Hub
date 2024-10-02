import { NavLink } from '@mantine/core'
import { ReactNode, useEffect, useState } from 'react'
import styles from './item.module.css'
import { Link, useLocation } from 'react-router-dom'

interface SidebarItem {
  icon: ReactNode
  label: string
  to: string
}

const SidebarItem = (props: SidebarItem) => {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(location.pathname === props.to)
  }, [location.pathname, props.to])

  return (
    <Link to={props.to} className={styles.nav}>
      <NavLink
        label={props.label}
        leftSection={props.icon}
        className={`${styles.link} ${isActive && styles.active}`}
      ></NavLink>
    </Link>
  )
}

export default SidebarItem
