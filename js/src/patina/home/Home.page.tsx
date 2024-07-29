import { BackgroundImage, Container, Title } from '@mantine/core'
import { Initiatives } from './Initiatives'
import { About } from './About.tsx'
import { ImportantSection } from '@/patina/home/ImportantSection.tsx'
import { GetInvolved } from '@/patina/home/GetInvolved.tsx'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Home.module.css'

export function HomePage() {
  return (
    <Container className={styles.homeContainer}>
      <BackgroundImage
        bgp={'right'}
        bgsz={'700px'}
        bgr={'no-repeat'}
        miw={'550px'}
        src={imageUrls.homeHero.src}
      >
        <div className={styles.hero}>
          <div>
            <Title className={styles.hero_title} w={'75%'}>
              {'Empowering AANHPI leaders to '}
              <span className={styles.title_teal}>{'make their mark.'}</span>
            </Title>
          </div>
        </div>
      </BackgroundImage>
      <div className={styles.aboutInit}>
        <About />
        <Initiatives />
      </div>
      <GetInvolved />
      <div className={styles.containers}>
        <Title className={styles.importantSectionTitle}>
          {'Why is This Important?'}
        </Title>
      </div>
      <div className={styles.containers}>
        <ImportantSection />
      </div>
    </Container>
  )
}
