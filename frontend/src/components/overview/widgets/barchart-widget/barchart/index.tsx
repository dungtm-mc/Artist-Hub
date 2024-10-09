import styles from './barchart.module.css'
import BarchartItem from './item'

interface BarchartProps {
  data: {
    category: string
    value: number
  }[]
  color: string
}

const Barchart = (props: BarchartProps) => {
  const colorSet = [
    {
      type: 'primary',
      colors: ['#8773FF', '#7767D7', '#665AAE', '#564E86']
    },
    {
      type: 'green',
      colors: ['#06B1A8', '#148C86', '#226763', '']
    }
  ]

  const convertData = () => {
    const set = colorSet.find((e) => e.type === props.color) || colorSet[0]
    return props.data.map((item, index) => {
      return { ...item, color: set.colors[index] }
    })
  }
  const maxValue = () => {
    return Math.max(...props.data.map((item) => item.value)) * 2
  }

  return (
    <div className={styles.chart}>
      {convertData().map((data) => (
        <BarchartItem
          category={data.category}
          value={data.value}
          color={data.color}
          key={data.category}
          percentage={(data.value / maxValue()) * 100}
        />
      ))}
    </div>
  )
}

export default Barchart
