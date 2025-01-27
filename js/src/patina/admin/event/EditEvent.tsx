import { Loader, Stack, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { EventDataTable } from './EventDataTable.tsx'

export function EditEvent() {
  const [activePage, setActivePage] = useState(1)
  const [limit, setLimit] = useState(10)

  const eventsResp = useQuery({
    queryKey: ['events', limit, activePage],
    queryFn: async () => {
      const response = await fetch('/api/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  return (
    <Stack>
      <Title order={3}>{'Edit Event'}</Title>
      {eventsResp.status === 'success' ?
        <EventDataTable
          records={eventsResp.data?.events}
          total={eventsResp.data?.total}
          page={activePage}
          setPage={setActivePage}
          limit={limit}
          setLimit={setLimit}
        />
      : <Loader />}
    </Stack>
  )
}
