import styled from "styled-components";
import Link from "next/link";

export const MenuDiv = styled.div`
  padding: 15px;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  @media (max-width: 930px) {
    display: none;
  }
`;

export const NavMenu = styled.nav`
  height: 50px;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const LinksDiv = styled.div`
  display: flex;
`;

export const NextLinkText = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 0 15px;
  :hover {
    color: #457627;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
`;

export const NextLinkNButton = styled(Link)`
  text-decoration: none;
  border-radius: 15px;
  color: #fff;
  width: 120px;
  text-align: center;
  padding-top: 3px;
  height: 30px;
  background-color: #f0506e;
  margin: 0 15px;
  :hover {
    color: #457627;
  }
`;

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export { Container, Main, Title, Description, CodeTag }
