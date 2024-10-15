import styles from './monthly-sale-widget.module.css'
import Stackedchart from './stackedchart'

interface MonthlySaleWidgetProps {
  data: {
    month: string
    val1: number
    val2: number
    val3: number
  }[]
}

const MonthlySaleWidget = (props: MonthlySaleWidgetProps) => {
  const dataConvertedMonth = () => {
    return props.data.map((item) => ({
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
