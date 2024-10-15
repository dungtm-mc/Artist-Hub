import { useLayoutEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

interface LinechartProps {
  data: {
    period: string
    value: number
  }[]
}

const Linechart = (props: LinechartProps) => {
  const chartRef = useRef(null)

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!)

    root.setThemes([am5themes_Animated.new(root)])

    root._logo?.dispose()

    // root.dom.style.scale = '0.5'

    console.log(root.dom.style.height)

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        pinchZoomX: false,
        pinchZoomY: false,
        height: 250,
        width: am5.percent(105)
      })
    )

    const xRenderer = am5xy.AxisRendererX.new(root, {})

    xRenderer.grid.template.setAll({
      visible: false,
      location: 30
    })
    xRenderer.labels.template.set('visible', false)

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'period',
        renderer: xRenderer
      })
    )

    const yRenderer = am5xy.AxisRendererY.new(root, {})
    yRenderer.grid.template.setAll({
      visible: false
    })
    yRenderer.labels.template.set('visible', false)

    root.numberFormatter.setAll({
      numberFormat: '#0a',
      numericFields: ['valueY']
    })

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
        max: Math.max(...props.data.map((item) => item.value)) * 2,
        min: -Math.max(...props.data.map((item) => item.value)) * 2,
        centerY: 10
      })
    )

    const series = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        categoryXField: 'period',
        tooltip: am5.Tooltip.new(root, {
          labelText: '{valueY}'
        }),
        stroke: am5.color('#8773FF')
      })
    )

    series.strokes.template.setAll({
      strokeWidth: 2,
      shadowBlur: 25,
      shadowColor: am5.color('#8773FF'),
      shadowOffsetY: 15,
      shadowOpacity: 0.9
    })

    xAxis.data.setAll(props.data)
    series.data.setAll(props.data)

    chart.set('cursor', am5xy.XYCursor.new(root, {}))

    return () => {
      root.dispose()
    }
  }, [props.data])

  return (
    <div
      ref={chartRef}
      style={{ width: '120%', height: '100%', position: 'absolute', left: -40 }}
    />
  )
}

export default Linechart
