import { Button, TextInput } from '@mantine/core'
import { IconSearch, IconAdjustmentsHorizontal } from '@tabler/icons-react'
import styles from './search.module.css'

const CommonSearch = () => {
  return (
    <div className={styles.search}>
      <TextInput
        size="md"
        radius="xl"
        variant="unstyled"
        leftSection={<IconSearch size="16" />}
        placeholder="Search"
        className={styles.input}
      ></TextInput>
      <Button className={styles.filter}>
        <div className={styles.filterBtn}>
          <IconAdjustmentsHorizontal />
          <span>Filter</span>
        </div>
      </Button>
    </div>
  )
}

export default CommonSearch
