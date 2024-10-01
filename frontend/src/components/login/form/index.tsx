import { Avatar, Divider, TextInput } from '@mantine/core'
import styles from './form.module.css'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import UButton from '../../ui/Button'
import User from '../../../public/login/user.png'
import { IconEyeClosed, IconEye } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [isFocus, setIsFocus] = useState(false)
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [isShowPw, setIsShowPw] = useState(false)

  const form = useForm({
    initialValues: {
      email: ''
    }
  })

  const passwordForm = useForm({
    initialValues: {
      password: ''
    }
  })

  const submitEmail = (values: typeof form.values) => {
    console.log(values)
    setAvatar(User)
    setName('David')
  }

  const submitPassword = (values: typeof passwordForm.values) => {
    console.log(values)
  }

  const toggleShowPw = () => {
    setIsShowPw(!isShowPw)
  }

  const changeAccount = () => {
    setAvatar('')
    setName('')
  }

  return (
    <div className={styles.loginformContainer}>
      <div className={styles.loginformBox}>
        {avatar ? (
          <div className={styles.pwformBox}>
            <span className={styles.pwformTitle}>Welcome Back</span>
            <Avatar src={avatar} size="lg" className={styles.pwformAvatar} />
            <span className={styles.pwformName}>{name}</span>
            <form
              onSubmit={passwordForm.onSubmit((values) =>
                submitPassword(values)
              )}
            >
              <div className={styles.pwformInputBox}>
                <TextInput
                  label="Password"
                  type={isShowPw ? 'text' : 'password'}
                  className={
                    isFocus ? styles.pwformInputFocus : styles.pwformInput
                  }
                  variant="unstyled"
                  size="xs"
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                ></TextInput>
                {isShowPw ? (
                  <IconEye
                    className={styles.pwformShowBtn}
                    onClick={() => toggleShowPw()}
                  ></IconEye>
                ) : (
                  <IconEyeClosed
                    className={styles.pwformShowBtn}
                    onClick={() => toggleShowPw()}
                  />
                )}
              </div>
              <UButton
                type="submit"
                variant="primary"
                className={styles.loginformSubmit}
                radius="xl"
                size="md"
              >
                Log In
              </UButton>
            </form>
          </div>
        ) : (
          <>
            <span className={styles.loginformTitle}>Log in to Artist Hub</span>
            <form onSubmit={form.onSubmit((values) => submitEmail(values))}>
              <TextInput
                placeholder={
                  form.values.email || isFocus ? '' : 'Enter your email'
                }
                key={form.key('email')}
                {...form.getInputProps('email')}
                variant="unstyled"
                size="xs"
                className={
                  isFocus ? styles.loginformEmailFocus : styles.loginformEmail
                }
                label={(form.values.email || isFocus) && 'Email'}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
              />

              <UButton
                type="submit"
                variant="primary"
                className={styles.loginformSubmit}
                radius="xl"
                size="md"
              >
                Continue
              </UButton>
            </form>
          </>
        )}
        {name ? (
          <UButton
            size="md"
            radius="xl"
            variant="ghost"
            className={styles.createAccount}
          >
            Forgot Password
          </UButton>
        ) : (
          <UButton
            size="md"
            radius="xl"
            variant="ghost"
            className={styles.createAccount}
          >
            Create Account
          </UButton>
        )}
        <Divider className={styles.divider} />
        {name ? (
          <UButton
            size="md"
            radius="xl"
            variant="ghost"
            className={styles.umgAccount}
            onClick={() => changeAccount()}
          >
            Not my account
          </UButton>
        ) : (
          <UButton
            size="md"
            radius="xl"
            variant="ghost"
            className={styles.umgAccount}
            onClick={() => changeAccount()}
          >
            Login with UMG Employee account
          </UButton>
        )}
      </div>
      <span className={styles.umgPrivacy}>
        By submitting, you agree to the{' '}
        <Link
          to="https://privacy.umusic.com/"
          target="blank"
          className={styles.umgPrivacyLink}
        >
          Universal Music Group Privacy Policy
        </Link>
      </span>
    </div>
  )
}

export default LoginForm
