import { formatNumber } from '../../../../helper/formatNumber'
import styles from './insights-widget.module.css'

interface InsightsWidgetProps {
  title: string
  value: number
  type?: string
  unit?: string
}

const InsightsWidget = (props: InsightsWidgetProps) => {
  const typeValue = () => {
    if (props.type === 'year') {
      if (props.value === 1) {
        return `1 Year`
      }

      return `${props.value} Years`
    }

    if (props.type === 'money') {
      return `$${props.value}`
    }

    return formatNumber(props.value)
  }

  return (
    <div className={styles.widget}>
      <span className={styles.title}>{props.title}</span>
      <p className={styles.content}>
        <span className={styles.value}>{typeValue()}</span>{' '}
        <span className={styles.unit}>{props.unit}</span>
      </p>
    </div>
  )
}

export default InsightsWidget
