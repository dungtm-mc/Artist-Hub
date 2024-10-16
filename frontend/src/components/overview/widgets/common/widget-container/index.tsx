import { ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import CampaignWidget from '../../campaign-widget'
import FanCustomersWidget from '../../fan-customers-widget'
import FanDatabaseWidget from '../../fan-database-widget'
import FanGrowMonthWidget from '../../fan-grow-month-widget'
import FanGrowYearWidget from '../../fan-grow-year-widget'
import InstagramWidget from '../../instagram-widget'
import MonthlySaleWidget from '../../monthly-sale-widget'
import NewFansWidget from '../../new-fans-widget'
import SegmentRevenueWidget from '../../segment-revenue-widget'
import SegmentTotalWidget from '../../segment-total-widget'
import StreamingPlatformsWidget from '../../streaming-platforms-widget'
import StreamingSongsWidget from '../../streaming-songs-widget'
import TiktokWidget from '../../titkok-widget'
import TotalFansWidget from '../../total-fans-widget'
import TotalSaleWidget from '../../total-sale-widget'
import YoutubeWidget from '../../youtube-widget'
import styles from './widget-container.module.css'
import { ActionIcon } from '@mantine/core'
import { IconMinus } from '@tabler/icons-react'
import { EditContext } from '../../../../../context/EditContext'

interface WidgetContainerProps {
  widgetKey: string
}

const WidgetContainer = (props: WidgetContainerProps) => {
  const mapWidget = useMemo(
    () => [
      {
        key: 'campaign',
        widget: <CampaignWidget />
      },
      {
        key: 'fanCustomers',
        widget: <FanCustomersWidget />
      },
      {
        key: 'fanDatabase',
        widget: <FanDatabaseWidget />
      },
      {
        key: 'fanGrowMonth',
        widget: <FanGrowMonthWidget />
      },
      {
        key: 'fanGrowYear',
        widget: <FanGrowYearWidget />
      },
      {
        key: 'instagram',
        widget: <InstagramWidget />
      },
      {
        key: 'monthlySale',
        widget: <MonthlySaleWidget />
      },
      {
        key: 'newFans',
        widget: <NewFansWidget />
      },
      {
        key: 'segmentRevenue',
        widget: <SegmentRevenueWidget />
      },
      {
        key: 'segmentTotal',
        widget: <SegmentTotalWidget />
      },
      {
        key: 'streamingPlatforms',
        widget: <StreamingPlatformsWidget />
      },
      {
        key: 'streamingSongs',
        widget: <StreamingSongsWidget />
      },
      {
        key: 'tiktok',
        widget: <TiktokWidget />
      },
      {
        key: 'totalFans',
        widget: <TotalFansWidget />
      },
      {
        key: 'totalSale',
        widget: <TotalSaleWidget />
      },
      {
        key: 'youtube',
        widget: <YoutubeWidget />
      }
    ],
    []
  )

  const [widget, setWidget] = useState<ReactNode | null>(null)

  useEffect(() => {
    const index = mapWidget.findIndex(
      (widget) => widget.key === props.widgetKey
    )

    if (index >= 0) {
      setWidget(mapWidget[index].widget)
    }

    console.log(widget)
  }, [mapWidget, props.widgetKey, widget])

  const editContext = useContext(EditContext)

  return (
    <div className={styles.widget}>
      {widget}
      {editContext?.isEditing && (
        <ActionIcon
          color="black"
          radius="xl"
          size="sm"
          className={styles.removeIcon}
        >
          <IconMinus />
        </ActionIcon>
      )}
    </div>
  )
}

export default WidgetContainer
