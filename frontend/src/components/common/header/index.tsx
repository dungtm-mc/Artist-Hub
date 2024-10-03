import { ReactNode } from 'react'
import styles from './header.module.css'
import CommonSearch from '../search'

interface HeaderProps {
  title: string
  afterTitle?: ReactNode
  endContent?: ReactNode
}

const OverviewHeader = (props: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.startContent}>
        <span className={styles.title}>{props.title}</span>
        <div>{props.afterTitle}</div>
      </div>
      <CommonSearch />
      <div className={styles.endContent}>{props.endContent}</div>
    </div>
  )
}

export default OverviewHeader
