import styles from './campaign-widget.module.css'
import cover from '../../../../public/overview/campaign/campaign-cover.png'
import { Button } from '@mantine/core'
import { IconFlare } from '@tabler/icons-react'

const CampaignWidget = () => {
  return (
    <div className={styles.widget}>
      <div className={styles.cover}>
        <div className={styles.coverBox}>
          <div className={styles.leftFade}></div>
          <img src={cover} className={styles.img} />
          <div className={styles.rightFade}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.title}>
            Campaign
            <br />
            Opportunities
          </p>
          <p className={styles.subtitle}>
            Streams are rising steadily on
            <br />
            Hit Me Hard and Soft
          </p>
        </div>
        <Button className={styles.btn} size="md" radius="xl" color="white">
          <IconFlare size="24" />{' '}
          <span className={styles.text}>Explore the Opportunities</span>
        </Button>
      </div>
    </div>
  )
}

export default CampaignWidget
