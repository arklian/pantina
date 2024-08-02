import { Box, Container, NavLink, Space, Text, Title } from '@mantine/core'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Contact } from './Contact.tsx'
import { NavbarSection } from './Types.tsx'
import styles from './Amanda.module.css'

const mainNav = [
  {
    section: 'about',
    link: '#about',
  },
  {
    section: 'projects',
    link: '#projects',
  },
  {
    section: 'resume',
    link: 'resume',
  },
]

const resumeNav = [
  {
    section: 'education',
    link: '#education',
  },
  {
    section: 'experience',
    link: '#experience',
  },
  {
    section: 'projects',
    link: '#projects',
  },
  {
    section: 'skills',
    link: '#skills',
  },
  {
    section: 'back',
    link: './',
  },
]

export function Sidebar({
  opened,
  toggle,
}: {
  opened: boolean
  toggle: () => void
}) {
  const [active, setActive] = useState(0)
  const location = useLocation().pathname.substring(
    useLocation().pathname.lastIndexOf('/') + 1,
  )

  let navbar = mainNav
  if (location === 'resume') navbar = resumeNav

  return (
    <div>
      <div data-status={opened} className={styles.sidebar}>
        <Container mb="2rem" p="0">
          <Title size="5rem" className={styles.name}>
            {'Amanda Ruan'}
          </Title>
          <Text size="1.5rem">{'SWE Intern at Patina Network'}</Text>
          <Text size="1.5rem" mt="1rem">
            {'CS Major at RPI'}
          </Text>
        </Container>
        <Contact />
        <Space h="xl" />
        <Box w="12rem">
          {navbar.map((section: NavbarSection, index) => (
            <NavLink
              key={index}
              label={section.section}
              href={section.link}
              active={index === active}
              onClick={() => {
                setActive(index)
                toggle()
              }}
              classNames={{ label: styles.navbar }}
            />
          ))}
        </Box>
      </div>
    </div>
  )
}
