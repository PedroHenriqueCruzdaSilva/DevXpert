import * as C from "../../theme/components";

const Menu = () => {
  return (
    <C.MenuDiv>
      <C.NavMenu>
        <C.LinksDiv>
          <C.NextLinkText href="/">HomePage</C.NextLinkText>
          <C.NextLinkText href="/">Sobre</C.NextLinkText>
          <C.NextLinkText href="/">Cursos</C.NextLinkText>
          <C.NextLinkText href="/">Pastoral</C.NextLinkText>
          <C.NextLinkText href="/">Aluno</C.NextLinkText>
          <C.NextLinkText href="/">Portais</C.NextLinkText>
          <C.NextLinkText href="/">Contato</C.NextLinkText>
        </C.LinksDiv>
        <C.ButtonsDiv>
          <C.NextLinkText href="/">🔍</C.NextLinkText>
          <C.NextLinkNButton href="/">Área Restrita</C.NextLinkNButton>
          <C.NextLinkNButton href="/">Acessar o SAF</C.NextLinkNButton>
        </C.ButtonsDiv>
      </C.NavMenu>
    </C.MenuDiv>
  )
};

export default Menu;
