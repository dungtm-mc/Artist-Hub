import {
  IconHeadphones,
  IconHomeFilled,
  IconMail,
  IconPlus,
  IconShoppingCart,
  IconUsers
} from '@tabler/icons-react'
import Artist from './artist'
import styles from './sidebar.module.css'
import SidebarOptions from './options'
import { useContext, useEffect, useState } from 'react'
import image from '../../../../public/login/user.png'
import Account from '../../../common/account'
import GridLayout from 'react-grid-layout'
import { EditContext } from '../../../../context/EditContext'

const CommonSidebar = () => {
  const options = [
    {
      id: 0,
      items: [
        {
          icon: <IconHomeFilled />,
          label: 'Overview',
          to: '/overview'
        }
      ],
      canEdit: false,
      isShow: true
    },
    {
      id: 1,
      title: 'Custom',
      items: [
        {
          icon: <IconPlus />,
          label: 'NewPage',
          to: '/newpage'
        }
      ],
      canEdit: true,
      isShow: false
    },
    {
      id: 2,
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
      ],
      canEdit: true,
      isShow: true
    },
    {
      id: 3,
      title: 'Engage',
      items: [
        {
          icon: <IconMail />,
          label: 'Email',
          to: '/email'
        }
      ],
      canEdit: true,
      isShow: true
    }
  ]

  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')

  const layout = [
    {
      i: '0',
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      static: true
    },
    {
      i: '1',
      x: 0,
      y: 1,
      w: 1,
      h: 1
    },
    {
      i: '2',
      x: 0,
      y: 2,
      w: 1,
      h: 2
    },
    {
      i: '3',
      x: 0,
      y: 3,
      w: 1,
      h: 1
    }
  ]

  useEffect(() => {
    setAvatar(image)
    setName('David')
    setRole('Manager')
    setEmail('david@umg.com')
  }, [])

  const context = useContext(EditContext)

  return (
    <div className={styles.sidebarBg}>
      <div className={styles.head}>
        <Artist />
        {context?.isEditing ? (
          <GridLayout
            className={`${styles.options} ${styles.grid}`}
            width={188}
            layout={layout}
            rowHeight={80}
            cols={1}
            useCSSTransforms={false}
          >
            {options.map((option) => (
              <div key={option.id}>
                <SidebarOptions
                  title={option.title}
                  items={option.items}
                  canEdit={option.canEdit}
                  isShow={option.isShow}
                />
              </div>
            ))}
          </GridLayout>
        ) : (
          <div className={styles.options}>
            {options.map((option) => {
              return (
                option.isShow && (
                  <SidebarOptions
                    title={option.title}
                    items={option.items}
                    key={option.id}
                    canEdit={option.canEdit}
                    isShow={option.isShow}
                  />
                )
              )
            })}
          </div>
        )}
      </div>
      <Account name={name} avatar={avatar} role={role} email={email} />
    </div>
  )
}

export default CommonSidebar
