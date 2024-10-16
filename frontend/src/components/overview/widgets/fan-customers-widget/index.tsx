import { useEffect, useState } from 'react'
import BarchartWidget from '../common/barchart-widget'

interface Stats {
  title: string
  value: number
  type: string
}

interface Chart {
  category: string
  value: number
}

const FanCustomersWidget = () => {
  const [stats, setStats] = useState<Stats[]>([])
  const [chart, setChart] = useState<Chart[]>([])
  const layouts = {
    color: 'green'
  }
  const title = 'Fan Customers'

  useEffect(() => {
    setStats([
      {
        title: 'Avg. Ctr',
        value: 0.843,
        type: 'percent'
      },
      {
        title: 'Fan Purchase',
        value: 43564,
        type: 'number'
      }
    ])

    setChart([
      {
        category: 'Contactable',
        value: 150450
      },
      {
        category: 'Opens',
        value: 115453
      },
      {
        category: 'Clicks',
        value: 98045
      },
      {
        category: 'Fan Purchasers',
        value: 43654
      }
    ])
  }, [])

  return (
    <BarchartWidget
      layouts={layouts}
      title={title}
      stats={stats}
      chart={chart}
    ></BarchartWidget>
  )
}

export default FanCustomersWidget
