import { MantineProvider } from '@mantine/core'
import styles from './Kazi.module.css'
import { DarkModeToggle } from './components/darkmodetoggle/DarkModeToggle'
import { theme } from './theme.ts'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Experiences } from './components/experiences/Experiences'
import { Projects } from './components/projects/Projects'

export function KaziPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={`${styles.sections} ${styles.scroll_container}`}>
        <section>
          <Navbar />
        </section>
        <section
          id="hero"
          className={styles.section}
        >
          <Hero />
        </section>
        <section
          id="about"
          className={styles.section}
        >
          <Experiences />
        </section>
        <section
          id="projects"
          className={styles.section}
        >
          <Projects />
        </section>
        <section
          id="contact"
          className={styles.section}
        >
          {'Contact'}
        </section>
      </div>
      <DarkModeToggle />
    </MantineProvider>
  )
}
