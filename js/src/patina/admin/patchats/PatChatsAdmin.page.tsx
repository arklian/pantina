import { Title, Space, Container, Stack, Loader } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { PatChatsDataTable } from '@/patina/admin/patchats/PatChatsDataTable.tsx'

export function PatChatEventPage() {
  const [activePage, setActivePage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [actionCounter, setActionCounter] = useState(0)

  const patchatsResp = useQuery({
    queryKey: ['members', limit, activePage, actionCounter],
    queryFn: async () => {
      const response = await fetch('/api/patchats/members', {
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
    <Container>
      <Title>{'PatChats'}</Title>
      <Space h="xl" />
      <Stack>
        {patchatsResp.status === 'success' ?
          <PatChatsDataTable
            records={patchatsResp.data?.members}
            total={patchatsResp.data?.total}
            page={activePage}
            setPage={setActivePage}
            limit={limit}
            setLimit={setLimit}
            actionCounter={actionCounter}
            setActionCounter={setActionCounter}
          />
        : <Loader />}
      </Stack>
    </Container>
  )
}
