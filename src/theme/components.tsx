import styled from "styled-components";
import Link from "next/link";

export const MenuDiv = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 100%;
  @media (max-width: 590px) {
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
  align-items: center;
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

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 60% 60%;
  margin-top: 50%;
`;

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 0 5px 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 300px;
  height: 350px;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 90%;
  margin-top: 2%;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
`;
