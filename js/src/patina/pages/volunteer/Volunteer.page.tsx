import { Title, Text, Image, Button } from '@mantine/core'
import { imageUrls } from '@/patina/assets/images.ts'
import { VolunteerCard } from './VolunteerCard'
import { Forms } from '@/patina/components/Forms.tsx'
import styles from './Volunteer.module.css'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

// Todo: Add padding between sections
export function VolunteerPage() {
  return (
    <ContentPage>
      <section className={styles.wrapper}>
        <div className={styles.text}>
          <Title order={2} className={styles.title}>
            {'Patina Network'} <br /> {'Apply to be a Volunteer'}
          </Title>
          <Text size="md" className={styles.description}>
            {
              'The Patina Network volunteer program is open to anyone who wants to get involved in helping us accomplish the same mission. There are many ways to join us by sharing your talents!'
            }
          </Text>
        </div>
        <Image
          className={styles.volunteerImg}
          src={imageUrls.volunteerHero.src}
        />
      </section>
      <section className={styles.grid}>
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
      </section>
      <section className={styles.emailSection}>
        <div className={styles.backgroundBlur}></div>
        <div className={styles.content}>
          <Text size="md" className={styles.emailText}>
            {
              "Want to get involved but don't necessarily align with these opportunities? Sign up to be on the volunteer list for future events! Please fill out this form, connect with us on Instagram and LinkedIn or email us at "
            }
            <a
              href={'mailto:hi@patinanetwork.org'}
              className={styles.emailEmail}
            >
              {'hi@patinanetwork.org'}
            </a>
            {' to join our volunteer email list'}
          </Text>
          <Button size="sm" className={styles.emailButton}>
            {'Sign Up'}
          </Button>
          <Forms />
        </div>
      </section>
    </ContentPage>
  )
}
