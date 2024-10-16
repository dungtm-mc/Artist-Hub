import { useEffect, useState } from 'react'
import styles from './monthly-sale-widget.module.css'
import Stackedchart from './stackedchart'

interface Data {
  month: string
  val1: number
  val2: number
  val3: number
}

const MonthlySaleWidget = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    setData([
      {
        month: 'January',
        val1: 20_000_000,
        val2: 80_000_000,
        val3: 40_000_000
      },
      {
        month: 'February',
        val1: 50_000_000,
        val2: 100_000_000,
        val3: 70_000_000
      },
      {
        month: 'March',
        val1: 10_000_000,
        val2: 10_000_000,
        val3: 90_000_000
      },
      {
        month: 'April',
        val1: 30_000_000,
        val2: 90_000_000,
        val3: 50_000_000
      },
      {
        month: 'May',
        val1: 40_000_000,
        val2: 70_000_000,
        val3: 30_000_000
      },
      {
        month: 'June',
        val1: 60_000_000,
        val2: 20_000_000,
        val3: 80_000_000
      },
      {
        month: 'July',
        val1: 70_000_000,
        val2: 30_000_000,
        val3: 60_000_000
      },
      {
        month: 'August',
        val1: 20_000_000,
        val2: 40_000_000,
        val3: 100_000_000
      },
      {
        month: 'September',
        val1: 80_000_000,
        val2: 10_000_000,
        val3: 120_000_000
      },
      {
        month: 'October',
        val1: 150_000_000,
        val2: 50_000_000,
        val3: 30_000_000
      },
      {
        month: 'November',
        val1: 90_000_000,
        val2: 100_000_000,
        val3: 70_000_000
      },
      {
        month: 'December',
        val1: 30_000_000,
        val2: 20_000_000,
        val3: 140_000_000
      }
    ])
  }, [])

  const dataConvertedMonth = () => {
    return data.map((item) => ({
      ...item,
      month: item.month.substring(0, 3)
    }))
  }

  return (
    <div className={styles.widget}>
      <span className={styles.title}>
        Total Sale in the last <b>Year</b>
      </span>
      <Stackedchart data={dataConvertedMonth()} />
    </div>
  )
}

export default MonthlySaleWidget
