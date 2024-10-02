import { Outlet } from 'react-router-dom'
import styles from './overview.module.css'
import OverviewSidebar from '../../components/overview/layouts/sidebar'

const OverviewLayout = () => {
  return (
    <div className={styles.bgLayout}>
      <OverviewSidebar />
      <Outlet />
    </div>
  )
}

export default OverviewLayout
