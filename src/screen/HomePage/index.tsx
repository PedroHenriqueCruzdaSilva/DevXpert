import Head from "next/head";
import { CardContainer, Container, Main } from "../../theme/components";
import Card from "../../components/Card";

export default function HomePage() {
  return (
    <Container>
      <Head>
        <title>DevXpert</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <CardContainer>
          <Card
            title="Lua e Introdução ao Desenvolvimento de Jogos"
            description="Esse Curso é para quem quer entrar no mundo de desenvolvimentos de jogos focando na programação."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNtC7luurdQvpIi8yT5VygpkLONnmsU86EQ&usqp=CAU"
          />
      </CardContainer>
      </Main>
    </Container>
  );
}
