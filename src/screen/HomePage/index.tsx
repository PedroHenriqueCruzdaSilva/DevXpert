import Head from "next/head";
import { CardContainer, Container, Main, ButtonMobile, DivVisibleMobile, NextLinkText, ButtonAuth, ButtonsDiv, SairDivVisibleMobile } from "../../theme/components";
import Card from "../../components/Card";
import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import { auth } from "../../db/sdkFirebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import H from "../../assets/H.png";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [ divV, setDivV ] = useState(false)

  const [ user, setUser ] = useAuthState(auth)

  const googleAuth = new GoogleAuthProvider();

  const toggleMenu = () => {
    if(divV) {
      setDivV(false);
    } else {
      setDivV(true);
    }
  };

  const verifica = () => {
    if(user) {
      sair()
    }
    if(!user) {
      login()
    }
  }

  const sair = () => {
    auth.signOut()
  }

  const login = async () => {
    const result = await signInWithRedirect(auth, googleAuth)
    return result
  }

  useEffect(() => {

  }, [user])

  return (
    <Container>
      { divV ? <DivVisibleMobile>
        <SairDivVisibleMobile onClick={toggleMenu} >X</SairDivVisibleMobile>
        <NextLinkText href="/">Home</NextLinkText>
        <NextLinkText href="/about">Sobre</NextLinkText>
        <ButtonsDiv>
          {
            user ?
            <ButtonAuth onClick={verifica}>Sair</ButtonAuth>
            :
            <ButtonAuth onClick={verifica}>Login</ButtonAuth>
          }
        </ButtonsDiv>
      </DivVisibleMobile> : "" }
      { !divV ? <ButtonMobile onClick={toggleMenu}><Image src={H} width={40} height={20} alt="Button" /></ButtonMobile> : "" }
      <Menu />
      <Head>
        <title>DevXpert</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <CardContainer>
          <Link href="/lua-e-introdução-ao-desenvolvimento-de-jogos">
            <Card
              title="Lua e Introdução ao Desenvolvimento de Jogos"
              description="Esse Curso é para quem quer entrar no mundo de desenvolvimentos de jogos focando na programação."
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNtC7luurdQvpIi8yT5VygpkLONnmsU86EQ&usqp=CAU"
            />
          </Link>
      </CardContainer>
      </Main>
    </Container>
  );
}
