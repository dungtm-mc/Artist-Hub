import { ReactNode, useContext } from 'react'
import styles from './header.module.css'
import CommonSearch from '../search'
import { EditContext } from '../../../context/EditContext'

interface HeaderProps {
  title: string
  afterTitle?: ReactNode
  endContent?: ReactNode
}

const OverviewHeader = (props: HeaderProps) => {
  console.log(props.endContent)

  const context = useContext(EditContext)

  return (
    <div className={styles.header}>
      <div className={styles.startContent}>
        <span className={styles.title}>{props.title}</span>
        <div>{props.afterTitle}</div>
      </div>
      {!context?.isEditing && <CommonSearch />}
      <div className={styles.endContent}>{props.endContent}</div>
    </div>
  )
}

export default OverviewHeader
