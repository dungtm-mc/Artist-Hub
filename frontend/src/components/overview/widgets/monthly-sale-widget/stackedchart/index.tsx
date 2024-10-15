import { useLayoutEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

interface StackedchartProps {
  data: {
    month: string
    val1: number
    val2: number
    val3: number
  }[]
}

const Stackedchart = (props: StackedchartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!chartRef.current) return

    const root = am5.Root.new(chartRef.current)

    const data = props.data

    root.setThemes([am5themes_Animated.new(root)])

    root._logo?.dispose()

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        layout: root.verticalLayout
      })
    )

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
      minGridDistance: 20
    })
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'month',
        renderer: xRenderer
      })
    )
    xRenderer.grid.template.setAll({ visible: false })
    xRenderer.labels.template.setAll({
      fill: am5.color('#767676'),
      fontSize: 12,
      fontFamily: 'Boston'
    })

    xAxis.data.setAll(data)

    const yRenderer = am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 })
    yRenderer.grid.template.setAll({ visible: false })
    yRenderer.labels.template.setAll({
      fill: am5.color('#767676'),
      fontSize: 12,
      fontFamily: 'Boston'
    })
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: yRenderer
      })
    )

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

    function getCategoryDataItems(
      dataItem: am5.DataItem<am5xy.IColumnSeriesDataItem>
    ): am5.DataItem<am5xy.IColumnSeriesDataItem>[] {
      const index = xAxis.categoryToIndex(dataItem.get('categoryX') as string)
      const items: am5.DataItem<am5xy.IColumnSeriesDataItem>[] = []

      chart.series.each((series) => {
        if (series.get('visible')) {
          const item = series.dataItems[
            index
          ] as am5.DataItem<am5xy.IColumnSeriesDataItem>
          const valueY = item.get('valueY')

          if (valueY !== undefined) {
            if (valueY >= 0) {
              items.push(item)
            } else {
              items.unshift(item)
            }
          }
        }
      })

      return items
    }

    function makeSeries(name: string, fieldName: string, color: am5.Color) {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name,
          stacked: true,
          xAxis,
          yAxis,
          valueYField: fieldName,
          categoryXField: 'month'
        })
      )

      function isBottom(
        dataItem: am5.DataItem<am5xy.IColumnSeriesDataItem>
      ): boolean {
        const items = getCategoryDataItems(dataItem)
        const valueY = dataItem.get('valueY')

        if (valueY !== undefined) {
          return (
            items.indexOf(dataItem) === (valueY >= 0 ? 0 : items.length - 1)
          )
        }

        return false
      }

      function isTop(
        dataItem: am5.DataItem<am5xy.IColumnSeriesDataItem>
      ): boolean {
        const items = getCategoryDataItems(dataItem)
        const valueY = dataItem.get('valueY')

        if (valueY !== undefined) {
          return (
            items.indexOf(dataItem) === (valueY >= 0 ? items.length - 1 : 0)
          )
        }

        return false
      }

      series.columns.template.adapters.add('cornerRadiusTL', (_, target) =>
        isTop(target.dataItem as am5.DataItem<am5xy.IColumnSeriesDataItem>)
          ? 10
          : 0
      )
      series.columns.template.adapters.add('cornerRadiusTR', (_, target) =>
        isTop(target.dataItem as am5.DataItem<am5xy.IColumnSeriesDataItem>)
          ? 10
          : 0
      )
      series.columns.template.adapters.add('cornerRadiusBL', (_, target) =>
        isBottom(target.dataItem as am5.DataItem<am5xy.IColumnSeriesDataItem>)
          ? 10
          : 0
      )
      series.columns.template.adapters.add('cornerRadiusBR', (_, target) =>
        isBottom(target.dataItem as am5.DataItem<am5xy.IColumnSeriesDataItem>)
          ? 10
          : 0
      )

      series.columns.template.setAll({
        width: 6,
        fill: color,
        stroke: color
      })

      series.data.setAll(data)

      series.appear()
    }

    makeSeries('val1', 'val1', am5.color('#8773FF'))
    makeSeries('val2', 'val2', am5.color('#95A4FC'))
    makeSeries('val3', 'val3', am5.color('#C6C7F8'))

    root.numberFormatter.setAll({
      numberFormat: '#0a'
    })

    chart.appear(1000, 100)

    return () => {
      root.dispose()
    }
  }, [props.data])

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{
        width: '100%',
        height: '250px',
        paddingLeft: '24px',
        paddingTop: '24px'
      }}
    />
  )
}

export default Stackedchart
