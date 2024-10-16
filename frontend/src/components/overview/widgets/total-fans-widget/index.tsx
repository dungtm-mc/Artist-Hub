import { useEffect, useState } from 'react'
import SingleWidget from '../common/single-widget'

const TotalFansWidget = () => {
  const [stats, setStats] = useState<number>(0)
  const [changePerc, setChangePerc] = useState<number>(0)
  const [comparePeriod, setComparePeriod] = useState<string>('')
  const title = 'Total Fans'

  useEffect(() => {
    setStats(10_000_000)
    setChangePerc(10)
    setComparePeriod('Last Month')
  }, [])

  return (
    <SingleWidget
      title={title}
      stats={stats}
      changePerc={changePerc}
      comparePeriod={comparePeriod}
    />
  )
}

export default TotalFansWidget
