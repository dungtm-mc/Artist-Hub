import { useLayoutEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5percent from '@amcharts/amcharts5/percent'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

type Root = am5.Root

type Chart = am5percent.PieChart

type Series = am5percent.PieSeries

interface PiechartProps {
  data: {
    category: string
    percent: number
  }[]
}

const Piechart = (props: PiechartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!chartRef.current) return

    const root: Root = am5.Root.new(chartRef.current)

    root.setThemes([am5themes_Animated.new(root)])
    root._logo?.dispose()

    const chart: Chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
        innerRadius: am5.percent(50)
      })
    )

    const series: Series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'percent',
        categoryField: 'category',
        endAngle: 270
      })
    )

    series.ticks.template.set('forceHidden', true)

    series.children.push(
      am5.Label.new(root, {
        visible: false
      })
    )

    series.slices.template.setAll({
      cornerRadius: 6,
      strokeWidth: 2,
      stroke: am5.color('#161616')
    })

    const colors = [
      am5.color('#D0D7FF'),
      am5.color('#8773FF'),
      am5.color('#7F81F6'),
      am5.color('#B4DDFC'),
      am5.color('#06B1A8'),
      am5.color('#B4DDFC')
    ]

    let fillUid = 0

    series.slices.template.adapters.add('fill', (_, target) => {
      if (target.dataItem) {
        if (fillUid === 0) {
          fillUid = target.dataItem.uid
          return colors[0]
        }

        return colors[(target.dataItem.uid - fillUid) % colors.length]
      }
      return colors[0]
    })

    series.states.create('hidden', {
      endAngle: -90
    })

    series.labels.template.setAll({
      forceHidden: true
    })

    series.data.setAll(props.data)

    const legend = root.container.children.push(
      am5.Legend.new(root, {
        y: am5.percent(50),
        centerY: am5.percent(50),
        x: am5.percent(100),
        centerX: 150,
        layout: root.verticalLayout,
        clickTarget: 'none'
      })
    )

    legend.labels.template.setAll({
      fontSize: 14,
      fontFamily: 'Boston',
      fill: am5.color('#FFFFFF')
    })

    legend.valueLabels.template.setAll({
      fontSize: 14,
      fontFamily: 'Boston',
      fill: am5.color('#FFFFFF')
    })

    legend.markers.template.setAll({
      width: 10,
      height: 10
    })

    legend.itemContainers.template.setAll({
      paddingTop: 8,
      paddingBottom: 8
    })

    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10
    })

    legend.data.setAll(series.dataItems)

    const tooltip = root.container.children.push(
      am5.Tooltip.new(root, {
        labelText: '',
        opacity: 0
      })
    )

    tooltip.get('background')?.setAll({
      fillOpacity: 0,
      strokeOpacity: 0
    })

    series.appear(1000, 100)

    series.set('tooltip', tooltip)

    return () => {
      root.dispose()
    }
  }, [props.data])

  return (
    <div
      ref={chartRef}
      style={{
        width: '600px',
        height: '200px',
        position: 'absolute',
        top: '40px',
        left: '-180px'
      }}
    />
  )
}

export default Piechart
