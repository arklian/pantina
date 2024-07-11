import { Text, Button } from '@mantine/core'
import styles from './PatinaAbout.module.css'

export function PatinaAbout() {
  return (
    <div className={styles.temp}>
      <div className={styles.container} id="about">
        <Text className={styles.aboutText}>
          {'We’re on a mission to address the unique struggles of AANHPI women and foster the diverse, ' +
            'inclusionary leaders of tomorrow.'}
        </Text>
        <Text className={styles.aboutText}>
          {
            'Wherever you are on your career and allyship journey, we’re here to boldly celebrate what makes you unique—your patina.'
          }
        </Text>
        <Button variant={'white'} c={'black'} h={'43px'} w={'95px'}>
          {'More about us'}
        </Button>
      </div>
    </div>
  )
}
