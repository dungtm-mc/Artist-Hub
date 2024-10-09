import { IconInfoCircleFilled } from '@tabler/icons-react'
import styles from './barchart-widget.module.css'
import Barchart from './barchart'

interface ChartWidgetProps {
  layouts: {
    color: string
  }
  title: string
  information: string
  stats: {
    title: string
    value: number
    type: string
  }[]
  chart: {
    category: string
    value: number
  }[]
}

const BarchartWidget = (props: ChartWidgetProps) => {
  return (
    <div className={styles.widget}>
      <div className={styles.above}>
        <div className={styles.infoAbove}>
          <span className={styles.title}>{props.title}</span>
          <IconInfoCircleFilled className={styles.info} />
        </div>
        <div className={styles.stats}>
          {props.stats.map((stat) => (
            <div className={styles.stat}>
              <span className={styles.statTitle}>{stat.title}</span>
              <span className={styles.statValue}>
                <span>{stat.value.toLocaleString()}</span>
                {stat.type === 'percent' && (
                  <span className={styles.statIcon}>%</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.under}>
        <Barchart data={props.chart} color="primary" />
      </div>
    </div>
  )
}

export default BarchartWidget
