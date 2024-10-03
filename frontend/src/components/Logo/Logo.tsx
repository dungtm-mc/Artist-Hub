import DarkLogo from '../../public/umg.png'
import LightLogo from '../../public/umg-light.png'
import styles from './logo.module.css'
import { useState, useEffect } from 'react'


interface LogoProps {
  mode: 'light' | 'dark'
}

const Logo = (props: LogoProps) => {
  const [logo, setLogo] = useState('')

  useEffect(() => {
    if (props.mode === 'dark') {
      setLogo(DarkLogo)
    } else {
      setLogo(LightLogo)
    }
  }, [props.mode])

  return (
    <div>
      <img src={logo} className={styles.logo} alt="Logo" />
    </div>
  )
}

export default Logo
