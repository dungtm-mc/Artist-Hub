import { useState } from 'react'
import UButton from '../../../ui/Button'
import styles from './period.module.css'

const PeriodOptions = () => {
  const options = [
    {
      label: 'D',
      value: 'day'
    },
    {
      label: 'W',
      value: 'week'
    },
    {
      label: 'M',
      value: 'month'
    },
    {
      label: 'YTD',
      value: 'year'
    }
  ]

  const [value, setValue] = useState('year')

  return (
    <div className={styles.options}>
      {options.map((option) => {
        return (
          <div key={option.label}>
            <UButton
              size="sm"
              variant={value === option.value ? 'inverse' : 'ghost'}
              radius="xl"
              className={value !== option.value ? styles.unactive : ''}
              onClick={() => setValue(option.value)}
            >
              <span>{option.label}</span>
            </UButton>
          </div>
        )
      })}
    </div>
  )
}

export default PeriodOptions
