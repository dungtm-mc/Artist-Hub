import styles from './list.module.css'
import avatar from '../../../../public/login/roster/avatar.png'
import RosterItem from './item'

const RosterList = () => {
  const list = [
    {
      id: 1,
      avatar: avatar,
      name: 'Name'
    },
    {
      id: 2,
      avatar: avatar,
      name: 'Name'
    },
    {
      id: 3,
      avatar: avatar,
      name: 'Name'
    },
    {
      id: 4,
      avatar: avatar,
      name: 'Name'
    },
    {
      id: 5,
      avatar: avatar,
      name: 'Name'
    }
  ]

  return (
    <div className={styles.listContainer}>
      <span className={styles.listTitle}>Choose Roster</span>
      <div className={styles.list}>
        {list.map((item) => (
          <RosterItem avatar={item.avatar} key={item.id} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default RosterList
