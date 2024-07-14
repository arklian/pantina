import { Container, Skeleton, Stack } from '@mantine/core'

/**
 * Todo: Fill in
 */
export function TeamPage() {
  return (
    <Container>
      <Stack>
        {'Team Page'}
        {/* Section 1 */}
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
        {/* Section 2 */}
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
        {/* Section 3 */}
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </Stack>
    </Container>
  )
}
