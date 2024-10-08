import { Stepper } from '@mantine/core'
import styles from './feed.module.css'
import { IconShoppingCart, IconTicket } from '@tabler/icons-react'
import UButton from '../../../ui/Button'

const Feed = () => {
  const feedList = [
    {
      type: 'music',
      title: '2025 world tour ticket is 8% sold out',
      date: '2024/8/14'
    },
    {
      type: 'music',
      title: 'New Album Release',
      date: '2024/8/14'
    },
    {
      type: 'music',
      title: 'New Video reach 1m on YouTube',
      date: '2024/7/28'
    },
    {
      type: 'product',
      title: 'T-Shirt has sold out',
      date: '2024/7/28'
    }
  ]

  const convertIcon = (type: string) => {
    if (type === 'music') {
      return <IconTicket size="20" />
    } else {
      return <IconShoppingCart size="20" />
    }
  }

  return (
    <div className={styles.feed}>
      <div className={styles.feedTitle}>Recent Activity Feed</div>
      <Stepper
        iconSize={32}
        active={-1}
        orientation="vertical"
        className={styles.feedList}
        size="sm"
        radius="md"
      >
        {feedList.map((feed, index) => (
          <Stepper.Step
            key={index}
            icon={() => convertIcon(feed.type)}
            label={<span className={styles.feedItemLabel}>{feed.title}</span>}
            description={
              <span className={styles.feedItemDate}>{feed.date}</span>
            }
          />
        ))}
      </Stepper>
      <UButton variant="ghost" size="xs" className={styles.more}>
        View older
      </UButton>
    </div>
  )
}

export default Feed
