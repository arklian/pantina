import { DataTable } from 'mantine-datatable'

const PAGE_SIZES = [10, 20, 50]

type PatChatsRowType = {
  id: number
  name: string
  active: boolean
}
type PatChatsDataTableProps = {
  records: PatChatsRowType[]
  total: number
  page: number
  setPage: any
  limit: number
  setLimit: any
}
export function PatChatsDataTable({
  records,
  total,
  page,
  setPage,
  limit,
  setLimit,
}: PatChatsDataTableProps) {
  return (
    <DataTable
      withTableBorder
      withColumnBorders
      columns={[
        { accessor: 'id' },
        { accessor: 'name' },
        {
          accessor: 'active',
          render: (row) => String(row.active),
        },
      ]}
      records={records}
      totalRecords={total}
      recordsPerPage={limit}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setLimit}
    />
  )
}
