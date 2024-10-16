import styles from './widgets.module.css'
import WidgetContainer from './common/widget-container'

const Widgets = () => {
  return (
    <>
      <div className={styles.test3}>
        <WidgetContainer widgetKey="campaign" />
      </div>
      <div className={styles.test}>
        <WidgetContainer widgetKey="instagram" />
      </div>
    </>
  )
}

export default Widgets
