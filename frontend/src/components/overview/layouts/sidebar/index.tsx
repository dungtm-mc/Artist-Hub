import {
  IconHeadphones,
  IconHomeFilled,
  IconMail,
  IconShoppingCart,
  IconUsers
} from '@tabler/icons-react'
import Artist from './artist'
import styles from './sidebar.module.css'
import SidebarOptions from './options'
import { useEffect, useState } from 'react'
import image from '../../../../public/login/user.png'
import Account from '../../../common/account'

const OverviewSidebar = () => {
  const options = [
    {
      items: [
        {
          icon: <IconHomeFilled />,
          label: 'Overview',
          to: '/overview'
        }
      ]
    },
    {
      title: 'Analyze',
      items: [
        {
          icon: <IconUsers />,
          label: 'Fans',
          to: '/fans'
        },
        {
          icon: <IconShoppingCart />,
          label: 'Customers',
          to: '/customers'
        },
        {
          icon: <IconHeadphones />,
          label: 'Segments',
          to: '/segments'
        }
      ]
    },
    {
      title: 'Engage',
      items: [
        {
          icon: <IconMail />,
          label: 'Email',
          to: '/email'
        }
      ]
    }
  ]

  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setAvatar(image)
    setName('David')
    setRole('Manager')
    setEmail('david@umg.com')
  }, [])

  return (
    <div className={styles.sidebarBg}>
      <div className={styles.head}>
        <Artist />
        <div className={styles.options}>
          {options.map((option) => (
            <SidebarOptions
              title={option.title}
              key={option.items[0].label}
              items={option.items}
            />
          ))}
        </div>
      </div>
      <Account name={name} avatar={avatar} role={role} email={email} />
    </div>
  )
}

export default OverviewSidebar
