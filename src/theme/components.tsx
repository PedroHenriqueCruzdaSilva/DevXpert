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
  font-size: 20px;
  margin-bottom: 0px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
`;

export const ButtonAuth = styled.button`
  text-decoration: none;
  border-radius: 15px;
  border: none;
  font-size: 20px;
  color: #fff;
  text-align: center;
  padding-top: 3px;
  width: 100px;
  height: 30px;
  background-color: #f0506e;
  margin: 0 15px;
  margin-top: 8.5px;
  :hover {
    color: #457627;
  }
`;

export const DivSobre = styled.div`
  margin-top: 12.5%;
  text-align: center;
  width: 60%;
`;

export const ButtonMobile = styled.div`
  position: fixed;
  top: 2%;
  left: 4.5%;
  width: 50px;
  height: 25px;
  border: none;
  background-color: white;
  @media (min-width: 590px) {
    display: none;
  }
`;

export const DivVisibleMobile = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 40px;
`;

export const SairDivVisibleMobile = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  font-size: 20px;
`;
