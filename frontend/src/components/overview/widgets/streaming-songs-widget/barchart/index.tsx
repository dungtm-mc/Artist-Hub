import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { useLayoutEffect, useRef } from 'react'

interface BarchartProps {
  data: {
    song: string
    value: number
  }[]
}

const Barchart = (props: BarchartProps) => {
  const chartRef = useRef(null)

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!)

    root.setThemes([am5themes_Animated.new(root)])

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false
      })
    )

    root.numberFormatter.setAll({
      numberFormat: '#0a',
      numericFields: ['valueX']
    })

    root._logo?.dispose()

    const yRenderer = am5xy.AxisRendererY.new(root, {
      inversed: true
    })

    yRenderer.labels.template.set('fill', am5.color('#FFFFFF'))
    yRenderer.labels.template.set('fontSize', 12)
    yRenderer.labels.template.set('fontFamily', 'Boston')
    yRenderer.labels.template.set('paddingRight', 10)
    yRenderer.labels.template.set('centerX', 0)
    yRenderer.labels.template.set('oversizedBehavior', 'truncate')
    yRenderer.labels.template.set('maxWidth', 100)

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'song',
        renderer: yRenderer
      })
    )

    const xRenderer = am5xy.AxisRendererX.new(root, {})

    xRenderer.labels.template.set('fill', am5.color('#767676'))
    xRenderer.labels.template.set('fontSize', 12)
    xRenderer.labels.template.set('fontFamily', 'Boston')

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        paddingLeft: 10,
        width: am5.percent(95)
      })
    )

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: 'value',
        categoryYField: 'song',
        height: am5.percent(100)
      })
    )

    series.columns.template.setAll({
      height: 24
    })

    const cellSize = 48
    series.events.on('datavalidated', (ev) => {
      const targetSeries = ev.target as typeof series
      const chart = targetSeries.chart!
      const xAxis = chart.xAxes.getIndex(0)

      const chartHeight =
        targetSeries.data.length * cellSize +
        xAxis!.height() +
        chart.get('paddingTop', 0) +
        chart.get('paddingBottom', 0)

      chart.root.dom.style.height = `${chartHeight}px`
    })

    const colors = [
      am5.color('#8773FF'),
      am5.color('#06B1A8'),
      am5.color('#C6C7F8')
    ]

    let fillUid = 0

    series.columns.template.adapters.add('fill', (_, target) => {
      if (target.dataItem) {
        if (fillUid === 0) {
          fillUid = target.dataItem.uid
          return colors[0]
        }

        return colors[(target.dataItem.uid - fillUid) % colors.length]
      }
      return colors[0]
    })

    let strokeUid = 0

    series.columns.template.adapters.add('stroke', (_, target) => {
      if (target.dataItem) {
        if (strokeUid === 0) {
          strokeUid = target.dataItem.uid
          return colors[0]
        }

        return colors[(target.dataItem.uid - strokeUid) % colors.length]
      }
      return am5.color('#ffffff')
    })

    yAxis.data.setAll(props.data)
    series.data.setAll(props.data)

    series.appear(1000)
    chart.appear(1000, 100)

    return () => {
      root.dispose()
    }
  }, [props.data])

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }}></div>
}

export default Barchart
