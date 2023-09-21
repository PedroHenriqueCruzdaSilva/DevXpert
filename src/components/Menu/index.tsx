import Image from "next/image";
import * as C from "../../theme/components";
import { auth } from "../../db/sdkFirebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const Menu = () => {
  const [ user, setUser ] = useAuthState(auth)

  const googleAuth = new GoogleAuthProvider();

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
    const result = await signInWithPopup(auth, googleAuth)
    return result
  }

  useEffect(() => {

  }, [user])

  return (
    <C.MenuDiv>
      <C.NavMenu>
        <C.LinksDiv>
          <C.NextLinkText href="/">
            <Image 
            style={{ marginTop: "0px", marginBottom: "-11px" }}
            src="/logo.png" 
            alt="Logo do DevXpert" 
            width={130} 
            height={75} />
          </C.NextLinkText>
          <C.NextLinkText href="/">Home</C.NextLinkText>
          <C.NextLinkText href="/about">Sobre</C.NextLinkText>
        </C.LinksDiv>
        <C.ButtonsDiv>
          {
            user ?
            <C.ButtonAuth onClick={verifica}>Sair</C.ButtonAuth>
            :
            <C.ButtonAuth onClick={verifica}>Login</C.ButtonAuth>
          }
        </C.ButtonsDiv>
      </C.NavMenu>
    </C.MenuDiv>
  )
};

export default Menu;
