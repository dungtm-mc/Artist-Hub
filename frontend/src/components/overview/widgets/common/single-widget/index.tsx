import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react'
import styles from './single-widget.module.css'
import { formatNumber } from '../../../../../helper/formatNumber'

interface SingleWidgetProps {
  title: string
  stats: number
  changePerc: number
  comparePeriod: string
}

const SingleWidget = (props: SingleWidgetProps) => {
  return (
    <div className={styles.widget}>
      <div className={styles.above}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.stats}>{formatNumber(props.stats)}</span>
      </div>
      <div className={styles.under}>
        <span
          className={props.changePerc > 0 ? styles.change : styles.downChange}
        >
          {props.changePerc > 0 ? (
            <IconArrowUpRight size="16" />
          ) : (
            <IconArrowDownRight size="16" />
          )}
          {props.changePerc}%
        </span>
        <span className={styles.compare}>vs {props.comparePeriod}</span>
      </div>
    </div>
  )
}

export default SingleWidget
