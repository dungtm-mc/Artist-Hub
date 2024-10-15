import BarchartWidget from './barchart-widget'
import CampaignWidget from './campaign-widget'
import LinechartWidget from './linechart-widget'
import SingleWidget from './single-widget'
import StreamingPlatformsWidget from './streaming-platforms-widget'
import StreamingSongsWidget from './streaming-songs-widget'
import TableWidget from './table-widget'
import styles from './widgets.module.css'
import tiktokLogo from '../../../public/overview/social/tiktok.svg'
import SocialWidget from './social-widget'
import TotalSaleWidget from './total-sale-widget'
import MonthlySaleWidget from './monthly-sale-widget'

const Widgets = () => {
  const testChartWidget = {
    layouts: {
      color: 'primary'
    },
    title: 'Fan Database',
    information: '',
    stats: [
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
    ],
    chart: [
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
    ]
  }

  const testTableWidget = {
    title: 'Total',
    data: [
      {
        segment: 'Subscribed but no purchased',
        fans: '90.2K',
        ctr: 5.1,
        avgRevenue: '$40.2K'
      },
      {
        segment: 'Merch only customers',
        fans: '90.2K',
        ctr: 5.1,
        avgRevenue: '$40.2K'
      },
      {
        segment: 'Music only customers',
        fans: '90.2K',
        ctr: 5.1,
        avgRevenue: '$40.2K'
      },
      {
        segment: 'Highly engaged',
        fans: '90.2K',
        ctr: 5.1,
        avgRevenue: '$40.2K'
      },
      {
        segment: 'Heavy Spenders',
        fans: '90.2K',
        ctr: 5.1,
        avgRevenue: '$40.2K'
      }
    ]
  }

  const testLinechartWidget = {
    period: 'Year',
    data: [
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
    ],
    color: 'green'
  }

  const testStreamingSongs = {
    data: [
      {
        song: 'Bad Guy Bad Guy Bad Guy',
        value: 200000
      },
      {
        song: 'HIT ME HARD',
        value: 350000
      },
      {
        song: 'Happier',
        value: 100000
      }
    ]
  }

  const testStreamingPlatforms = {
    data: [
      {
        platform: 'YouTube',
        icon: '',
        value: 200000000
      },
      {
        platform: 'Spotify',
        icon: '',
        value: 350000000
      },
      {
        platform: 'Apple Music',
        icon: '',
        value: 100000000
      }
    ]
  }

  const testSocialWidget = {
    platform: 'TikTok',
    logo: tiktokLogo,
    stat: 268_000_000,
    data: [
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
    ]
  }

  const testTotalSale = {
    data: [
      { category: 'Licensing', percent: 25 },
      { category: 'Streaming', percent: 25 },
      { category: 'Merchandise', percent: 13.9 },
      { category: 'Concert', percent: 11.2 },
      { category: 'Music', percent: 13.6 },
      { category: 'Other', percent: 11.3 }
    ],
    total: 158_000_000
  }

  const testMonthlySale = {
    data: [
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
    ]
  }

  return (
    <>
      <div className={styles.test}>
        <SingleWidget
          title="Total fans"
          stats="10M"
          changePerc={17}
          comparePeriod="Last month"
        />
      </div>
      <div className={styles.test2}>
        <BarchartWidget
          layouts={testChartWidget.layouts}
          title={testChartWidget.title}
          stats={testChartWidget.stats}
          information={testChartWidget.information}
          chart={testChartWidget.chart}
        />
      </div>
      <div className={styles.test3}>
        <CampaignWidget />
      </div>
      <div className={styles.test4}>
        <TableWidget
          title={testTableWidget.title}
          data={testTableWidget.data}
        />
      </div>
      <div className={styles.test5}>
        <LinechartWidget
          period={testLinechartWidget.period}
          color={testLinechartWidget.color}
          data={testLinechartWidget.data}
        />
      </div>
      <div className={styles.test6}>
        <StreamingSongsWidget data={testStreamingSongs.data} />
      </div>
      <div className={styles.test6}>
        <StreamingPlatformsWidget data={testStreamingPlatforms.data} />
      </div>
      <div className={styles.test}>
        <SocialWidget
          platform={testSocialWidget.platform}
          logo={testSocialWidget.logo}
          stat={testSocialWidget.stat}
          data={testSocialWidget.data}
        />
      </div>
      <div className={styles.test6}>
        <TotalSaleWidget
          data={testTotalSale.data}
          total={testTotalSale.total}
        />
      </div>
      <div className={styles.test6}>
        <MonthlySaleWidget data={testMonthlySale.data} />
      </div>
    </>
  )
}

export default Widgets
