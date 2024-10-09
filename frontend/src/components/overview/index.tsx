import { useEffect, useState } from 'react'
import styles from './overview.module.css'
import Widgets from './widgets'

const OverviewPage = () => {
  const [artistName, setArtistName] = useState('')
  const [monthlyListeners, setMonthlyListeners] = useState(0)

  useEffect(() => {
    setArtistName('Billie Eilish')
    setMonthlyListeners(107888498)
  }, [])

  return (
    <div className={styles.overview}>
      <div className={styles.intro}>
        <span className={styles.artist}>{artistName}</span>
        <span className={styles.monthlyListeners}>
          {monthlyListeners.toLocaleString()} monthly listeners
        </span>
      </div>
      <div className={styles.widgets}>
        <Widgets />
      </div>
    </div>
  )
}

export default OverviewPage
