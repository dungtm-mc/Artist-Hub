import BarchartWidget from './barchart-widget'
import CampaignWidget from './campaign-widget'
import LinechartWidget from './linechart-widget'
import SingleWidget from './single-widget'
import StreamingPlatformsWidget from './streaming-platforms-widget'
import StreamingSongsWidget from './streaming-songs-widget'
import TableWidget from './table-widget'
import styles from './widgets.module.css'

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
    </>
  )
}

export default Widgets
