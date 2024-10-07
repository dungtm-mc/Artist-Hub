import { Outlet } from 'react-router-dom'
import styles from './overview.module.css'
import OverviewHeader from '../../components/common/header'
import CommonSidebar from '../../components/common/layouts/sidebar'
import EditButton from '../../components/overview/header/edit'
import PeriodOptions from '../../components/overview/header/period'
import { useState } from 'react'
import { EditContext } from '../../context/EditContext'
import EditActions from '../../components/overview/header/actions'

const OverviewLayout = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <EditContext.Provider value={{ isEditing, setIsEditing }}>
      <div className={styles.bgLayout}>
        <CommonSidebar />
        <div className={styles.content}>
          <OverviewHeader
            title="Overview"
            afterTitle={<EditButton />}
            endContent={isEditing ? <EditActions /> : <PeriodOptions />}
          />
          <Outlet />
        </div>
      </div>
    </EditContext.Provider>
  )
}

export default OverviewLayout
