import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../src/theme/components'
import Cards from '../src/components/cards'
import Menu from '../src/components/Menu'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Menu />
        <Title>
          Welcome to <a href="https://www.insararas.com.br">INSAraras!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  )
}