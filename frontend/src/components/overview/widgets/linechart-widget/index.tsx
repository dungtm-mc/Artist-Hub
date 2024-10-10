import Linechart from './linechart'
import styles from './linechart-widget.module.css'

interface LinechartWidgetProps {
  period: string
  data: {
    time: string
    value: number
  }[]
  color: string
}

const LinechartWidget = (props: LinechartWidgetProps) => {
  const colorSet = [
    {
      type: 'primary',
      color: '#8773FF'
    },
    {
      type: 'green',
      color: '#06B1A8'
    }
  ]

  const lineColor = () => {
    return (
      colorSet.find((e) => e.type === props.color)?.color || colorSet[0].color
    )
  }

  return (
    <div className={styles.widget}>
      <span className={styles.title}>
        Fan growth over the <b>{props.period}</b>
      </span>
      <div className={styles.chartBox}>
        <Linechart data={props.data} color={lineColor()} />
      </div>
    </div>
  )
}

export default LinechartWidget
