import { formatNumber } from '../../../../helper/formatNumber'
import Piechart from './piechart'
import styles from './total-sale-widget.module.css'

interface TotalSaleWidgetProps {
  data: {
    category: string
    percent: number
  }[]
  total: number
}

const TotalSaleWidget = (props: TotalSaleWidgetProps) => {
  return (
    <div className={styles.widget}>
      <span className={styles.title}>
        Total <b>Sale</b>
      </span>
      <div className={styles.content}>
        <b className={styles.total}>${formatNumber(props.total)}</b>
        <Piechart data={props.data} />
      </div>
    </div>
  )
}

export default TotalSaleWidget
