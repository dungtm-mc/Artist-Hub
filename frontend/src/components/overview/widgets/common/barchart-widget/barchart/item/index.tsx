import React from 'react'
import styles from './barchart-item.module.css'

interface BarchartItemProps {
  category: string
  value: number
  color: string
  percentage: number
}

const BarchartItem = (props: BarchartItemProps) => {
  return (
    <div className={styles.item}>
      <span className={styles.category}>{props.category}</span>
      <div
        className={styles.itemBar}
        style={
          {
            '--barchart-item-color': props.color,
            '--barchart-item-perc': `${props.percentage}%`
          } as React.CSSProperties
        }
      >
        <span>{props.value.toLocaleString()}</span>
      </div>
      <div className={styles.divider}></div>
    </div>
  )
}

export default BarchartItem
