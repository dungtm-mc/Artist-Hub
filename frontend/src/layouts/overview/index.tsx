import { Outlet } from 'react-router-dom'
import styles from './overview.module.css'
import OverviewHeader from '../../components/common/header'
import CommonSidebar from '../../components/common/layouts/sidebar'
import EditButton from '../../components/overview/header/edit'
import PeriodOptions from '../../components/overview/header/period'
import { useEffect, useState } from 'react'
import { EditContext } from '../../context/EditContext'
import EditActions from '../../components/overview/header/actions'
import RightNav from '../../components/common/right-nav'
import { getCookie, createLayoutCookie } from '../../cookies/cookies'

const OverviewLayout = () => {
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const savedLayout = getCookie('layouts')

    if (!savedLayout) {
      createLayoutCookie()
    }
  }, [])

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
          <div className={styles.page}>
            <Outlet />
            <RightNav />
          </div>
        </div>
      </div>
    </EditContext.Provider>
  )
}

export default OverviewLayout
