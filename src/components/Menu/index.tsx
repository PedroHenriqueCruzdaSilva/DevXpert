import Image from "next/image";
import * as C from "../../theme/components";

const Menu = () => {
  return (
    <C.MenuDiv>
      <C.NavMenu>
        <C.LinksDiv>
          <C.NextLinkText href="/">
            <Image 
            src="/favicon.ico" 
            alt="Logo do DevXpert" 
            width={60} 
            height={40} />
          </C.NextLinkText>
          <C.NextLinkText href="/">Home</C.NextLinkText>
          <C.NextLinkText href="/about">Sobre</C.NextLinkText>
        </C.LinksDiv>
        <C.ButtonsDiv>
          <C.NextLinkNButton href="/">Login</C.NextLinkNButton>
          <C.NextLinkNButton href="/">Registrar</C.NextLinkNButton>
        </C.ButtonsDiv>
      </C.NavMenu>
    </C.MenuDiv>
  )
};

export default Menu;
