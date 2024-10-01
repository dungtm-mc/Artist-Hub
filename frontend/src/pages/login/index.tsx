import Background from '../../components/login/background'
import LoginForm from '../../components/login/form'
import styles from './login.module.css'
import React from 'react'

const Login = () => {
  return (
    <div className={styles.login}>
      <Background />
      <LoginForm />
    </div>
  )
}

export default Login
