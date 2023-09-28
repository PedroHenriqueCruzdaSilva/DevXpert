import { Container, Main, DivSobre, ButtonMobile, DivVisibleMobile, NextLinkText, ButtonAuth, ButtonsDiv, SairDivVisibleMobile } from "../../theme/components";
import Head from "next/head";
import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import { auth } from "../../db/sdkFirebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import H from "../../assets/H.png";
import Image from "next/image";

export default function AboutPage() {
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
        <title>DevXpert - Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <DivSobre>
          A DevXpert é uma startup dedicada à promoção da igualdade de
          oportunidades na educação tecnológica. Nosso compromisso com a
          acessibilidade vai além: para cada curso adquirido, doamos um curso,
          ampliando o alcance do aprendizado para aqueles que enfrentam
          barreiras financeiras. Acreditamos que todos devem ter acesso à
          educação de qualidade, independentemente de suas condições
          financeiras.<br/><br/> Além disso, oferecemos uma ampla seleção de cursos de
          introdução gratuitos, tornando o conhecimento tecnológico acessível a
          todos, e servindo como um ponto de partida para explorar as diversas
          áreas que a tecnologia tem a oferecer. Com a DevXpert, não apenas
          facilitamos o acesso à educação, mas também abrimos as portas para um
          mundo de oportunidades no campo da tecnologia.<br/><br/> Nossa visão é criar um
          impacto positivo na sociedade, capacitando pessoas de todos os níveis
          socioeconômicos a adquirir habilidades valiosas e se destacar no mundo
          digital. Junte-se a nós nessa jornada de aprendizado inclusivo e
          transformador.
        </DivSobre>
      </Main>
    </Container>
  );
}
