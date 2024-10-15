import { formatNumber } from '../../../../helper/formatNumber'
import Linechart from './linechart'
import styles from './social-widget.module.css'

interface SocialWidgetProps {
  platform: string
  logo: string
  stat: number
  data: {
    period: string
    value: number
  }[]
}

const SocialWidget = (props: SocialWidgetProps) => {
  return (
    <div className={styles.widget}>
      <div className={styles.title}>
        <span>{props.platform}</span>
        <div className={styles.logo}>
          <img src={props.logo} alt={props.platform} />
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.stat}>{formatNumber(props.stat)}</span>
        <Linechart data={props.data} />
      </div>
    </div>
  )
}

export default SocialWidget
