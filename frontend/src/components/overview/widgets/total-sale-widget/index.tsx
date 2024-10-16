import { useEffect, useState } from 'react'
import { formatNumber } from '../../../../helper/formatNumber'
import Piechart from './piechart'
import styles from './total-sale-widget.module.css'

interface Data {
  category: string
  percent: number
}

const TotalSaleWidget = () => {
  const [total, setTotal] = useState<number>(0)
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    setTotal(158_000_000)
    setData([
      { category: 'Licensing', percent: 25 },
      { category: 'Streaming', percent: 25 },
      { category: 'Merchandise', percent: 13.9 },
      { category: 'Concert', percent: 11.2 },
      { category: 'Music', percent: 13.6 },
      { category: 'Other', percent: 11.3 }
    ])
  }, [])

  return (
    <div className={styles.widget}>
      <span className={styles.title}>
        Total <b>Sale</b>
      </span>
      <div className={styles.content}>
        <b className={styles.total}>${formatNumber(total)}</b>
        <Piechart data={data} />
      </div>
    </div>
  )
}

export default TotalSaleWidget
