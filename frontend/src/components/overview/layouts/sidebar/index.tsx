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

  return (
    <div className={styles.sidebarBg}>
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
  )
}

export default OverviewSidebar
