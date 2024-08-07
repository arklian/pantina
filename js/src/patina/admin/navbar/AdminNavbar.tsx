import { NavLink, Space, Text } from '@mantine/core'
import { navItems } from './navData' // Adjust the import path as necessary

export function AdminNavbar() {
  return (
    <div>
      {navItems.map((item) => (
        <NavLink
          href={item.src}
          label={<Text size={'xl'}>{item.label}</Text>}
          leftSection={<Space w={10} />}
        />
      ))}
    </div>
  )
}
