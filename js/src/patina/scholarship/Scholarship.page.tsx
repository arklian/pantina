import { Button, Group, Image, SimpleGrid, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Criteria } from '@/patina/scholarship/criteria/Criteria.tsx'
import { ApplicationProcess } from '@/patina/scholarship/applicationprocess/ApplicationProcess.tsx'
import { AboutScholarship } from '@/patina/scholarship/about/AboutScholarship.tsx'
import { Application } from '@/patina/scholarship/application/Application.tsx'
import { DonorSection } from '@/patina/scholarship/donors/Donors.page.tsx'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Scholarship.module.css'

export function ScholarshipPage() {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <div>
      <SimpleGrid
        className={styles.hero_container}
        cols={largeScreen ? 2 : 1}
        spacing="xl"
        mb={'7rem'}
        mt={'4rem'}
      >
        <div>
          <Title className={styles.title} ta={'left'}>
            {'Patina Network Scholarship Fund'}
          </Title>
          <Text className={styles.description}>
            {
              'The Patina Network Scholarship Fund intends to manifest our vision by awarding scholarships annually to students who are of ethnicity, heritage, or ancestry in relations to the AANHPI communities and would benefit the most from the financial stipend.'
            }
          </Text>
          <Group justify={'left'} pt={'md'}>
            <Button variant="filled" color="white" size={'md'} autoContrast>
              {'Apply Now'}
            </Button>
          </Group>
        </div>
        <Group justify={'center'} pt={'lg'}>
          <Image
            className={styles.scholarshipHero}
            src={imageUrls.scholarshipHero.src}
            alt="Scholarship Image"
          />
        </Group>
      </SimpleGrid>
      <div className={styles.about}>
        <ApplicationProcess />
        <AboutScholarship />
      </div>
      <Criteria />
      <div className={styles.application}>
        <Application />
      </div>
      <DonorSection />
    </div>
  )
}
