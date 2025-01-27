import { ActionIcon, Group } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import React from 'react'

export function Actions({
  patchatsID,
  actionCounter,
  setActionCounter,
}: {
  patchatsID: number
  actionCounter: number
  setActionCounter: any
}) {
  const deletePatChatMember = React.useCallback(() => {
    fetch(`/api/patchats/delete/${patchatsID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        setActionCounter(actionCounter + 1)
        return resp.json()
      })
      .catch((error) => console.log(error))
  }, [patchatsID, actionCounter, setActionCounter])

  return (
    <Group gap={4} justify="left" wrap="nowrap">
      <ActionIcon
        size="sm"
        variant="subtle"
        color="red"
        onClick={() => deletePatChatMember()}
      >
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  )
}
