import BarchartWidget from './barchart-widget'
import SingleWidget from './single-widget'
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
    </>
  )
}

export default Widgets
