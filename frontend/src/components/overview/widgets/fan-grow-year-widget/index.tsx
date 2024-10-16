import { useEffect, useState } from 'react'
import LinechartWidget from '../common/linechart-widget'

interface Data {
  time: string
  value: number
}

const FanGrowYearWidget = () => {
  const [data, setData] = useState<Data[]>([])
  const period = 'Year'
  const color = 'primary'

  useEffect(() => {
    setData([
      {
        time: '2019',
        value: 100000
      },
      {
        time: '2020',
        value: 200000
      },
      {
        time: '2021',
        value: 150000
      },
      {
        time: '2022',
        value: 170000
      },
      {
        time: '2023',
        value: 270000
      },
      {
        time: '2024',
        value: 250000
      },
      {
        time: '2025',
        value: 250000
      },
      {
        time: '2026',
        value: 250000
      }
    ])
  }, [])

  return <LinechartWidget period={period} data={data} color={color} />
}

export default FanGrowYearWidget
