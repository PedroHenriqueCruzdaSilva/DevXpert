import { Container, Main, ButtonMobile, DivVisibleMobile, NextLinkText, ButtonAuth, ButtonsDiv, SairDivVisibleMobile } from "../src/theme/components";
import Head from "next/head";
import Menu from "../src/components/Menu/index";
import { useEffect, useState } from "react";
import { auth } from "../src/db/sdkFirebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import H from "../src/assets/H.png";
import Image from "next/image";
import VideoPlayer from "../src/components/VideoPlayer/index";

export default function AboutPage() {
  const [ divV, setDivV ] = useState(false)

  const [ user, setUser ] = useAuthState(auth)

  const videoSrc = "https://youtu.be/DffPp_6GON4";

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
        <title>DevXpert - Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <VideoPlayer src={videoSrc} />
      </Main>
    </Container>
  );
}
