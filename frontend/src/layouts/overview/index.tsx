import { Outlet } from 'react-router-dom'
import styles from './overview.module.css'
import OverviewHeader from '../../components/common/header'
import CommonSidebar from '../../components/common/layouts/sidebar'
import EditButton from '../../components/overview/header/edit'
import PeriodOptions from '../../components/overview/header/period'

const OverviewLayout = () => {
  return (
    <div className={styles.bgLayout}>
      <CommonSidebar />
      <div className={styles.content}>
        <OverviewHeader
          title="Overview"
          afterTitle={<EditButton />}
          endContent={<PeriodOptions />}
        />
        <Outlet />
      </div>
    </div>
  )
}

export default OverviewLayout
