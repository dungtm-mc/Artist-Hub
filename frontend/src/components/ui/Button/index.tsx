import { Button, MantineRadius, MantineSize } from '@mantine/core'
import styles from './Button.module.css'
import { ReactNode, useEffect, useState } from 'react'
import React from 'react'

interface ButtonProps {
  variant: 'primary' | 'inverse' | 'secondary' | 'ghost'
  radius?: MantineRadius
  children: ReactNode
  className?: string
  type?: 'button' | 'reset' | 'submit' | undefined
  disabled?: boolean
  size: MantineSize
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const UButton = (props: ButtonProps) => {
  const [buttonStyle, setButtonStyle] = useState('')

  useEffect(() => {
    switch (props.variant) {
      case 'ghost':
        setButtonStyle(styles.buttonGhost)
        break
      case 'inverse':
        setButtonStyle(styles.buttonInverse)
        break
      case 'secondary':
        setButtonStyle(styles.buttonSecondary)
        break
      case 'primary':
        setButtonStyle(styles.buttonPrimary)
        break
    }
  }, [props.variant])

  return (
    <Button
      type={props.type}
      className={`${buttonStyle} ${props.className}`}
      radius={props.radius ?? 'xs'}
      disabled={props.disabled}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default UButton
