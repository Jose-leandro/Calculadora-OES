import styled from "styled-components";

import CalculadoraPadrao from "../components/calculadora-padrao/CalculadoraPadrao";

import IgmMenu from "../assets/img/menu.png";

import Logo from "../assets/img/calculadora.png";

import Rodape from "../components/Rodape";

import MenuOpcoesCalculadoras from "../components/MenuOpcoesCalculadoras";


const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ConteinerLogo = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 15px;

  @media screen and (max-width: 720px) {
    width: 185px;
  }

  @media screen and (min-width: 768px) {
    width: 26%;
  }

  @media screen and (min-width: 900px) {
    width: 24%;
  }

  @media screen and (min-width: 1024px) {
    width: 23%;
  }

  @media screen and (min-width: 1200px) {
    width: 19%;
  }
`;

const LogoImg = styled.img`
  
  @media screen and (max-width: 320px) {
    height: 40px;
    width: 40px;
  }

  @media screen and (min-width: 321px) {
    width: 40px;
  }

  @media screen and (min-width: 480px) {
    width: 40px;
  }

  @media screen and (min-width: 720px) {
    height: 42px;
    width: 42px;
  }

  @media screen and (min-width: 768px) {
    width: 42px;
  }

  @media screen and (min-width: 900px) {
    height: 45px;
    width: 45px;
  }

  @media screen and (min-width: 1024px) {
    height: 47px;
    width: 47px;
  }

  @media screen and (min-width: 1200px) {
    height: 50px;
    width: 50px;
  }
`;

const LogoH1 = styled.h1`
  font-weight: 100;

  @media screen and (max-width: 320px) {
    font-size: 17px;
  }

  @media screen and (min-width: 321px) {
    font-size: 17px;
  }

  @media screen and (min-width: 480px) {
    font-size: 19px;
  }

  @media screen and (min-width: 720px) {
    font-size: 19px;
  }

  @media screen and (min-width: 768px) {
    font-size: 19px;
  }

  @media screen and (min-width: 900px) {
    font-size: 23px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 27px;
  }
`;

const Menu = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

   @media screen and (min-width: 721px) {
    width: 37%;
   }

  @media screen and (min-width: 900px) {
    width: 37%;
  }
`;

const MenuDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 60px;
`;

const MenuImg = styled.img`
  cursor: pointer;
  display: none;
  height: 20px;
  width: 20px;
    &:hover {
      background: #353739;
      border-radius: 7px;
      padding: 0px 3px;
    }
    &:active {
      background: #353739fa;
      border-radius: 6px;
      height: 19.5px;
      padding: 0px 2px;
      width: 19.5px;
    }

  @media screen and (max-width: 720px) {
  display: flex;
  }
`;

const MenuUl = styled.ul`
  cursor: pointer;
  display: flex;
  display: none;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 480px) {
    align-items: center;
    background: #23272b;
    border-radius: 10px;
    flex-direction: column;
    height: 25%;
    position: absolute;
    right: 14px;
    text-align: center;
    top: 42px;
    width: 34%;
    z-index: 1;
  }

  @media screen and (min-width: 481px) {
    align-items: center;
    background: #23272b;
    border-radius: 10px;
    flex-direction: column;
    height: 27%;
    position: absolute;
    right: 14px;
    text-align: center;
    top: 42px;
    width: 24%;
    z-index: 1;
  }

  @media screen and (min-width: 720px) {
    align-items: flex-end;
    background: transparent;
    border-radius: 0px;
    display: flex;
    flex-direction: row;
    height: 56px;
    justify-content: space-evenly;
    position: static;
    width: 450px;
  }
`;

const Lista = styled.li`
  cursor: pointer;
  font-size: 17px;
  padding: 5px 0px;
  text-align: center;
  width: 18%;
    &:hover {
      background-color: #252a2e;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      margin: 0px 0px 5px 0px;
      padding: 5px 0px;
    }
    &:active {
      background-color: #252a2e8a;
      border-radius: 15px;
      font-size: 16px;
    }

  @media screen and (max-width: 720px) {
    align-items: center;
    display: flex;
    height: 18px;
    justify-content: center;
    width: 55%;
      &:hover {
        background-color: #283037;
        margin: 0px 0px 0px 0px;
      }
  }

  @media screen and (min-width: 721px) {
    width: 24%;
  }

  @media screen and (min-width: 900px) {
    width: 20%;
  }
`;

const Ancora = styled.a`
  color: #fff;
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  text-decoration: none;
    &:hover {
      color: #ffffffc7;
    }
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 540px;
  justify-content: space-between;
  width: auto;

  @media screen and (min-width: 721px) {
    margin-top: 1em;
  }
`;

const Footer = styled.footer`
  height: 300px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

function App() {

  const visibilidadeMenu = () => {
    console.log("Fui cliccdo")
    let listaMenu = document.querySelector(".lista-menu");

    let listaMenuVisibility = document.querySelector(".lista-menu--visibility");

    listaMenu.style.display = "flex"
    listaMenu.classList.add("lista-menu--visibility");

    try {

      if (listaMenuVisibility.classList.contains("lista-menu--visibility")) {

        listaMenuVisibility.classList.add("lista-menu")
        listaMenu.classList.remove("lista-menu--visibility")
        listaMenu.style.display = "none"
      }
    } catch (error) {
      console.log("Falha ao : " + error);
    }

    if (window.screen.width >= 721) {
      listaMenu.style.display = "flex"
    }
  }

  return (
    <>
      <Header>

        <ConteinerLogo>

          <LogoImg src={Logo} className="logo__img" alt="logo do projeto" />
          <LogoH1>Calculadora OES</LogoH1>
        </ConteinerLogo>

        <Menu>

          <MenuDiv>

            <MenuImg src={IgmMenu} onClick={visibilidadeMenu} alt="Imagem do meunu" />
          </MenuDiv>

          <MenuUl className="lista-menu">

            <Lista>

              <Ancora href="http://localhost:3000/">Ínicio</Ancora>
            </Lista>

            <Lista>

              <Ancora href="http://localhost:3000/">Tipos</Ancora>
            </Lista>

            <Lista>

              <Ancora href="http://localhost:3000/">Contato</Ancora>
            </Lista>

            <Lista>

              <Ancora href="http://localhost:3000/">Sobre</Ancora>
            </Lista>

          </MenuUl>
        </Menu>

      </Header>

      <Main className="main">

        <MenuOpcoesCalculadoras />
        <CalculadoraPadrao />
      </Main >

      <Footer>

        <Rodape />
      </Footer>

    </>
  );
}

export default App;
