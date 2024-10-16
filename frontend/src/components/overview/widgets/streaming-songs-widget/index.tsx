import { useEffect, useState } from 'react'
import Barchart from './barchart'
import styles from './streaming-songs-widget.module.css'

interface Data {
  song: string
  value: number
}

const StreamingSongsWidget = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    setData([
      {
        song: 'Bad Guy Bad Guy Bad Guy',
        value: 200000
      },
      {
        song: 'HIT ME HARD',
        value: 350000
      },
      {
        song: 'Happier',
        value: 100000
      }
    ])
  }, [])

  return (
    <div className={styles.widget}>
      <div className={styles.title}>
        Total streams for top <b>Track / Album / Video</b>
      </div>
      <div className={styles.chart}>
        <Barchart data={data} />
      </div>
    </div>
  )
}

export default StreamingSongsWidget
