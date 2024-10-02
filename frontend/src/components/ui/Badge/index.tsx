import { MantineSize } from '@mantine/core'
import { ReactNode, useEffect, useState } from 'react'
import styles from './badge.module.css'

interface BadgeProps {
  children?: ReactNode
  size?: MantineSize
  color?: 'primary' | 'gray'
  radius?: MantineSize
}

const UBadge = (props: BadgeProps) => {
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [radius, setRadius] = useState('')

  useEffect(() => {
    setSize(props.size ? props.size : 'md')
    setColor(props.color ? props.color : 'primary')
    setRadius(props.radius ? props.radius : 'md')
  }, [props.size, props.color, props.radius])

  return (
    <span
      className={`${styles[`padding-${size}`]} ${styles[`bg-${color}`]} ${styles[`rounded-${radius}`]}`}
    >
      {props.children}
    </span>
  )
}

export default UBadge
