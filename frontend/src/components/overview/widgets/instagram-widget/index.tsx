import { useEffect, useState } from 'react'
import SocialWidget from '../common/social-widget'
import tiktokLogo from '../../../../public/overview/social/tiktok.svg'

interface Data {
  period: string
  value: number
}

const InstagramWidget = () => {
  const platform = 'Instagram'
  const logo = tiktokLogo
  const stat = 150_000_000
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    setData([
      {
        period: '1',
        value: 5
      },
      {
        period: '2',
        value: 8
      },
      {
        period: '3',
        value: 7
      },
      {
        period: '4',
        value: 10
      },
      {
        period: '5',
        value: 2
      },
      {
        period: '6',
        value: 4
      },
      {
        period: '7',
        value: 9
      },
      {
        period: '8',
        value: 3
      },
      {
        period: '9',
        value: 1
      },
      {
        period: '10',
        value: 6
      }
    ])
  }, [])

  return (
    <SocialWidget platform={platform} logo={logo} stat={stat} data={data} />
  )
}

export default InstagramWidget
