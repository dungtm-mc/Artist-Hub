import { useLayoutEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

interface LinechartProps {
  data: {
    time: string
    value: number
  }[]
  color: string
}

const Linechart = (props: LinechartProps) => {
  const chartRef = useRef(null)

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!)

    root.setThemes([am5themes_Animated.new(root)])

    root._logo?.dispose()

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        pinchZoomX: false,
        pinchZoomY: false,
        height: 250,
        width: am5.percent(105)
      })
    )

    const xRenderer = am5xy.AxisRendererX.new(root, {})

    xRenderer.grid.template.set('visible', false)
    xRenderer.labels.template.set('fill', am5.color('#767676'))
    xRenderer.labels.template.set('fontSize', 12)
    xRenderer.labels.template.set('fontFamily', 'Boston')

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'time',
        renderer: xRenderer,
        paddingLeft: 30
      })
    )

    const yRenderer = am5xy.AxisRendererY.new(root, {})
    yRenderer.grid.template.set('visible', false)
    yRenderer.labels.template.set('fill', am5.color('#767676'))
    yRenderer.labels.template.set('fontSize', 12)
    yRenderer.labels.template.set('fontFamily', 'Boston')

    root.numberFormatter.setAll({
      numberFormat: '#0a',
      numericFields: ['valueY']
    })

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer
      })
    )

    const series = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        categoryXField: 'time',
        tooltip: am5.Tooltip.new(root, {
          labelText: '{valueY}'
        }),
        stroke: am5.color(props.color)
      })
    )

    series.strokes.template.setAll({
      strokeWidth: 2,
      shadowBlur: 25,
      shadowColor: am5.color(props.color),
      shadowOffsetY: 15,
      shadowOpacity: 0.9
    })

    let bulletUid = 0

    series.bullets.push((root, _, dataItem) => {
      if (bulletUid === 0) {
        bulletUid = dataItem.uid
      }
      if (dataItem.uid - bulletUid === props.data.length - 1) {
        const container = am5.Container.new(root, {})
        container.children.push(
          am5.Circle.new(root, {
            radius: 4.5,
            stroke: am5.color(props.color),
            strokeWidth: 3.5,
            fill: am5.color('#000000')
          })
        )

        return am5.Bullet.new(root, {
          sprite: container
        })
      }
    })

    xAxis.data.setAll(props.data)
    series.data.setAll(props.data)

    chart.set('cursor', am5xy.XYCursor.new(root, {}))

    return () => {
      root.dispose()
    }
  }, [props.data, props.color])

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
}

export default Linechart
