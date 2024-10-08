import Ai from './ai'
import Feed from './feed'
import styles from './right-nav.module.css'

const RightNav = () => {
  return (
    <div className={styles.rightnav}>
      <Feed />
      <Ai />
    </div>
  )
}

export default RightNav
