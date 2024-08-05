import { Text, Title, Image, Anchor, AspectRatio, Space } from '@mantine/core'
import styles from './Cards.module.css'

export type CardsProps = {
  title: string
  details: string
  img: string
  link?: string
  bottom?: string
  alt: string
  underline: boolean
}

/** Customizable card */
export function Cards({ title, details, img, link, alt }: CardsProps) {
  return (
    <div className={styles.card}>
      <Anchor className={styles.anchorNoUnderline} href={link}>
        <div className={styles.border}>
          <AspectRatio>
            <Image className={styles.image} src={img} alt={alt} radius={5} />
          </AspectRatio>
          <div className={styles.text_container}>
            <Title className={styles.title}>{title}</Title>
            <Text className={styles.text}>{details}</Text>
            <Space h={'md'} />
          </div>
        </div>
      </Anchor>
    </div>
  )
}
