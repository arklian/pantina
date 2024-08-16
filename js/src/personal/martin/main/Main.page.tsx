import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Title,
  Text,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { theme } from '@/personal/martin/theme.ts'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'
import { Clock, timeZone } from '@/personal/martin/components/Clock.tsx'
import classes from '@/personal/martin/Martin.module.css'

export function MartinMain() {
  return (
    <>
      <Jumbotron
        title="Hello! I'm Martin"
        text="Welcome to my page. I am an SWE intern at Patina Network."
        imgSrc="https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/assets/MartinFront.jpg"
        imgSize="35%"
      />
      <Grid grow bg={theme.colors.cobalt[7]}>
        <Grid.Col span={12}>
          <Center>
            <Container>
              <Title order={2}>{'Learn More'}</Title>
            </Container>
          </Center>
        </Grid.Col>
        <Grid.Col span={6}>
          <Container pb={'2em'}>
            <Title order={2}>{'Who am I?'}</Title>
            <Text>
              {
                'Clovis born, Pewaukee raised, and Renton living, I am a University of Washington - Bothell graduate '
              }
              {
                'with a BA of Science - Computer Science & Software Engineering. I enjoy creating software and working on'
              }
              {
                'various projects to expand my knowledge and skill set. Over the last few years, I worked on projects'
              }
              {'involving graphics, game engines, and web applications.'}
            </Text>
            <Link to="/personal/martin/about">
              <Button>{'About Me'}</Button>
            </Link>
          </Container>
        </Grid.Col>
        <Grid.Col span={6}>
          <Container pb={'2em'}>
            <Title order={2}>{'What do I do?'}</Title>
            <Text>
              {
                'I program in many various languages such as Python, C++, C#, Java, JavaScript, and more. Some of my'
              }
              {
                'previous projects include a JavaScript web based game engine, a modified version that includes a physics'
              }
              {' engine module, a Voxel based game engine, and more.'}
            </Text>
            <Link to="/personal/martin/project">
              <Button>{'Projects'}</Button>
            </Link>
          </Container>
        </Grid.Col>
      </Grid>
      <Divider my="md" />
      <Grid grow justify="center" className={classes.clockDisplay}>
        <Grid.Col span={3}>
          <Clock timezone={timeZone.LocalTime} />
          <Title order={3}>{'Local'}</Title>
        </Grid.Col>
        <Grid.Col span={3}>
          <Clock timezone={timeZone.Tokyo} />
          <Title order={3}>{'Tokyo'}</Title>
        </Grid.Col>
        <Grid.Col span={3}>
          <Clock timezone={timeZone.EastCoast} />
          <Title order={3}>{'New York City'}</Title>
        </Grid.Col>
      </Grid>
      <Divider my="md" />
    </>
  )
}
