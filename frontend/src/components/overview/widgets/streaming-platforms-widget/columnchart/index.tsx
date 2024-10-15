import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { ReactNode, useLayoutEffect, useRef } from 'react'

interface ColumnchartProps {
  data: {
    platform: ReactNode
    value: number
  }[]
}

const Columnchart = (props: ColumnchartProps) => {
  const chartRef = useRef(null)

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!)

    root.setThemes([am5themes_Animated.new(root)])

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        maxTooltipDistance: 0
      })
    )

    root._logo?.dispose()

    root.numberFormatter.setAll({
      numberFormat: '#0a',
      numericFields: ['valueY']
    })

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 5
    })

    xRenderer.grid.template.set('visible', false)
    xRenderer.labels.template.setAll({
      fill: am5.color('#C7C7C7'),
      fontFamily: 'Boston',
      fontSize: 12,
      paddingTop: 12
    })

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'platform',
        renderer: xRenderer
      })
    )

    const yRenderer = am5xy.AxisRendererY.new(root, {})
    yRenderer.labels.template.setAll({
      fill: am5.color('#C7C7C7'),
      fontFamily: 'Boston',
      fontSize: 12
    })

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
        paddingLeft: 0
      })
    )

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        categoryXField: 'platform',
        height: am5.percent(100)
      })
    )

    series.columns.template.setAll({
      width: 28
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

    xAxis.data.setAll(props.data)
    series.data.setAll(props.data)

    series.appear(1000)
    chart.appear(1000, 100)

    return () => {
      root.dispose()
    }
  }, [props.data])

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
}

export default Columnchart
