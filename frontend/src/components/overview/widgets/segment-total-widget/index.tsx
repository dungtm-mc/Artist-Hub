import { useEffect, useState } from 'react'
import TableWidget from '../common/table-widget'

interface Data {
  segment: string
  fans: number
  ctr: number
  avgRevenue: number
}

const SegmentTotalWidget = () => {
  const [data, setData] = useState<Data[]>([])
  const title = 'Total'

  useEffect(() => {
    setData([
      {
        segment: 'Subscribed but no purchased',
        fans: 90_200,
        ctr: 5.1,
        avgRevenue: 40_200
      },
      {
        segment: 'Merch only customers',
        fans: 90_200,
        ctr: 5.1,
        avgRevenue: 40_200
      },
      {
        segment: 'Music only customers',
        fans: 90_200,
        ctr: 5.1,
        avgRevenue: 40_200
      },
      {
        segment: 'Highly engaged',
        fans: 90_200,
        ctr: 5.1,
        avgRevenue: 40_200
      },
      {
        segment: 'Heavy Spenders',
        fans: 90_200,
        ctr: 5.1,
        avgRevenue: 40_200
      }
    ])
  }, [])

  return <TableWidget title={title} data={data} />
}

export default SegmentTotalWidget
