import styles from './valueX.module.css'

interface ValueXProps {
  platform: string
  icon: string
}

const ValueX = (props: ValueXProps) => {
  return (
    <div className={styles.container}>
      <span>{props.platform}</span>
      <img src={props.icon} alt={props.platform} className={styles.icon} />
    </div>
  )
}

export default ValueX
