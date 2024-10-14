import Barchart from './barchart'
import styles from './streaming-songs-widget.module.css'

interface StreamingSongsWidgetProps {
  data: {
    song: string
    value: number
  }[]
}

const StreamingSongsWidget = (props: StreamingSongsWidgetProps) => {
  return (
    <div className={styles.widget}>
      <div className={styles.title}>
        Total streams for top <b>Track / Album / Video</b>
      </div>
      <div className={styles.chart}>
        <Barchart data={props.data} />
      </div>
    </div>
  )
}

export default StreamingSongsWidget
