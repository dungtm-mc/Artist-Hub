import Columnchart from './columnchart'
import styles from './streaming-platforms-widget.module.css'
import ValueX from './valueX'

interface StreamingPlatformsWidgetProps {
  data: {
    platform: string
    icon: string
    value: number
  }[]
}

const StreamingPlatformsWidget = (props: StreamingPlatformsWidgetProps) => {
  const data = props.data.map((item) => {
    return {
      platform: item.platform,
      value: item.value
    }
  })

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
