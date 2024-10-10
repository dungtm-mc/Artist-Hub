import { Table } from '@mantine/core'
import styles from './table-widget.module.css'

interface TableWidgetProps {
  title: string
  data: {
    segment: string
    fans: string
    ctr: number
    avgRevenue: string
  }[]
}

const TableWidget = (props: TableWidgetProps) => {
  const rows = props.data.map((row) => (
    <Table.Tr>
      <Table.Td>{row.segment}</Table.Td>
      <Table.Td>{row.fans}</Table.Td>
      <Table.Td>{row.ctr}%</Table.Td>
      <Table.Td className={styles.cellRight}>{row.avgRevenue}</Table.Td>
    </Table.Tr>
  ))

  return (
    <div className={styles.widget}>
      <div className={styles.title}>
        Segment by <b>{props.title}</b>
      </div>
      <div className={styles.table}>
        <Table horizontalSpacing="lg">
          <Table.Thead className={styles.headerRow}>
            <Table.Tr>
              <Table.Th className={styles.header}>Segment</Table.Th>
              <Table.Th className={styles.header}>Fans</Table.Th>
              <Table.Th className={styles.header}>Ctr</Table.Th>
              <Table.Th className={`${styles.header} ${styles.cellRight}`}>
                Avg. Revenue
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  )
}

export default TableWidget
