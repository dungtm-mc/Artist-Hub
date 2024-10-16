import { useEffect, useState } from 'react'
import Columnchart from './columnchart'
import styles from './streaming-platforms-widget.module.css'

interface Data {
  platform: string
  value: number
}

const StreamingPlatformsWidget = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    setData([
      {
        platform: 'YouTube',
        value: 200000000
      },
      {
        platform: 'Spotify',
        value: 350000000
      },
      {
        platform: 'Apple Music',
        value: 100000000
      }
    ])
  }, [])

  return (
    <div className={styles.widget}>
      <div className={styles.title}>
        Platform <b>Breakdown</b>
      </div>
      <div className={styles.chart}>
        <Columnchart data={data} />
      </div>
    </div>
  )
}

export default StreamingPlatformsWidget
