import styled from "styled-components";

import Excluir from "../../../assets/img/excluir.png"

import { Button } from "../CalculadoraPadrao";

const Img = styled.img`
  background: #25282d;
  border-radius: 10px;
  cursor: pointer;
  height: 25px;
  padding: 3.6% 7.9%;
  text-align: center;
  width: 25px;
    &:hover {
      border-radius: 12px;
      background-color: #252a2e;
    }
    &:active {
      border-radius: 17px;
      background-color: #252a2e8a;
    }

  @media screen and (max-width: 320px) {
    padding: 4.4% 5.8%;
  }

  @media screen and (min-width: 321px) {
    padding: 4.2% 6.9%;
  }

  @media screen and (min-width: 390px) {
    padding: 3.9% 7.3%;
  }

  @media screen and (min-width: 420px) {
    padding: 3.6% 7.6%;
  }

  @media screen and (min-width: 470px) {
    padding: 3.6% 7.6%;
  }
`;

function OperacoesEspeciais({ props }) {

  const exclusaoEntradaUltimosNumeros = () => {

    let elementosBotoesClicados;
    props.operadoresClicados.forEach(element => { console.log(element); elementosBotoesClicados = element })

    if (props.botoesClicados.includes(elementosBotoesClicados)) {

      console.log("Sem permição para exclusão elementos superiores, apenas elementos inferiores");

      props.botoesClicadosTranscrevido.length = 0;
      props.armagenarElementosSuperiores = 0;
      props.armagenarElementosInferiores = 0;

      props.setElementosSuperior(props.armagenarElementosSuperiores);

      return;
    };

    props.botoesClicados.length = 0;
    props.botoesClicadosTranscrevido.length = 0;

    props.armagenarElementosSuperiores = 0;
    props.setElementosSuperior(props.armagenarElementosSuperiores);

    props.armagenarElementosInferiores = " ";
    props.setElementosInferior(props.armagenarElementosInferiores);
  };

  const exclusaoElementosClicados = () => {

    let elementosBotoesClicados;
    props.operadoresClicados.forEach(element => { console.log(element); elementosBotoesClicados = element })

    if (props.botoesClicados.includes(elementosBotoesClicados)) {

      props.botoesClicadosTranscrevido.pop();

      props.armagenarElementosSuperiores = props.botoesClicadosTranscrevido;

      if (props.botoesClicadosTranscrevido.length === 0) {

        props.armagenarElementosSuperiores = 0;
        props.setElementosSuperior(props.armagenarElementosSuperiores);

        return;
      };

      props.setElementosSuperior(props.armagenarElementosSuperiores);

      return;
    };

    props.botoesClicados.pop();

    props.armagenarElementosSuperiores = props.botoesClicados;

    if (props.botoesClicados.length === 0) {

      props.armagenarElementosSuperiores = 0;
      props.setElementosSuperior(props.armagenarElementosSuperiores);
    };

    props.setElementosSuperior(props.armagenarElementosSuperiores);
  };

  return (
    <>
      <Button value={"%"} className="porcentagem"

        onClick={(e) => {
        
          props.botoesClicadosASerExebindos(e);
        }}
      >%</Button>

      <Button onClick={() => {

        exclusaoEntradaUltimosNumeros();
      }}
      >CE</Button>

      <Button onClick={() => {
        props.botoesClicados.length = 0;
        console.log(props.botoesClicados)
        let tela = document.querySelector(".tela");

        tela.style.flexDirection = "column";
        props.armagenarElementosSuperiores = 0;
        props.setElementosSuperior(props.armagenarElementosSuperiores);
        console.log(props.armagenarElementosSuperiores)

        props.botoesClicadosTranscrevido.length = 0;
        console.log(props.botoesClicadosTranscrevido)
        props.armagenarElementosInferiores = " ";
        props.setElementosInferior(props.armagenarElementosInferiores);
        console.log(props.armagenarElementosInferiores)

      }}>C</Button>

      <Img src={Excluir} alt="" onClick={() => {

        exclusaoElementosClicados();
      }}
      />
    </>
  );
};

export default OperacoesEspeciais;