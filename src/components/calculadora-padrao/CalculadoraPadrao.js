import styled from "styled-components";

import { useState } from "react";

import React, { useEffect } from "react";

import OperacoesEspeciais from "./secoes/OperacoesEspeciais";

import NumerosEDivisao from "./secoes/NumerosEDivisao";

import NumerosEMultiplicacao from "./secoes/NumerosEMultiplicacao";

import NumerosESubritacao from "./secoes/NumerosESubritacao";


const ConteinerCalculadoraPadrao = styled.div`
  background: #15191c;
  border: 2px #23242a solid;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 30px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 381px;
  left: 494px;
  left: auto;
  margin: 20px 0px;
  position: absolute;
  width: 26%;

  @media screen and (max-width: 320px) {
    left: auto;
    top: 24%;
    width: 86%;
  }

  @media screen and (min-width: 321px) {
    top: 24%;
    width: 86.9%;
  }

  @media screen and (min-width: 420px) {
    height: 385px;
    width: 354px;
  }
`;

const Tela = styled.div`
  align-items: end;
  border-radius: 16px;
  cursor: default;
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
`;

const TelaH1 = styled.h1`
  font-family: 'Quicksand', sans-serif;
  font-size: 40px;
  padding: 0px 15px;  
`

const TelaH2 = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-size: 40px;
  padding: 0px 15px;
  visibility: hidden;
`;

const CalculadoraPadraoDiv = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  background: #25282d;
  border: none;
  border-radius: 10px;
  color:  #ffffffad;
  cursor: pointer;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  height: 50px;
  margin-bottom: 2px;
  text-align: center;
  width: 80px;
    &:hover {
      background-color: #252a2e;
      border-radius: 12px;
    }
    &:active {
      background-color: #252a2e8a;
      border-radius: 17px;
    }

  @media screen and (max-width: 320px) {
    height: 47px;
    width: 54px;
  }

  @media screen and (min-width: 321px) {
    height: 50px;
    width: 63px;
  }

  @media screen and (min-width: 360px) {
    height: 50px;
    width: 66px;
  }

  @media screen and (min-width: 360px) {
    height: 50px;
    width: 70px;
  }

  @media screen and (min-width: 400px) {
    height: 50px;
    width: 80px;
  }

  @media screen and (min-width: 420px) {
    height: 50px;
    width: 80px;
  }
`;

let botoesClicados = [];
let resultadoOperacao = 0;
let botoesClicadosTranscrevido = [];
let operadoresClicados = [];

let armagenarElementosSuperiores = " ";
let armagenarElementosInferiores = " ";
let armagenarSistemaDecimal = 0;
let alteraPosicaoElementosInferiorSuperior = false;
let naoAdicaoElementDuplicado = false;

let elementosRepetidos = [];


function CalculadoraPadrao() {

  const [elementosSuperior, setElementosSuperior] = useState("0");
  const [elementosInferior, setElementosInferior] = useState("0");


  const operacoesAritmeticas = (operador, agrupamentoSemOperadorAritmeticoBotoesClicados, agrupamentoAnteriorIgualdade) => {

    console.log(`Iniciando operação de ${operador}`);

    let resultadoDaOperacao;

    if (operador === "%") {

      console.log("Porcentagem");
      resultadoDaOperacao = agrupamentoSemOperadorAritmeticoBotoesClicados / 100;

      if (parseInt(resultadoDaOperacao) !== parseFloat(resultadoDaOperacao)) {

        resultadoOperacao = resultadoDaOperacao.toFixed(2);

        return;
      };

      resultadoOperacao = Math.trunc(resultadoDaOperacao);
    };

    if (agrupamentoSemOperadorAritmeticoBotoesClicados != null && agrupamentoAnteriorIgualdade != null) {

      switch (operador) {
        case " x ":
          console.log("Mutiplicacao");
          console.log(resultadoDaOperacao = agrupamentoSemOperadorAritmeticoBotoesClicados * agrupamentoAnteriorIgualdade);
          break;
        case " + ":
          console.log("Soma");
          console.log(resultadoDaOperacao = agrupamentoSemOperadorAritmeticoBotoesClicados + agrupamentoAnteriorIgualdade);
          break;
        case " ÷ ":
          console.log("Divisao");
          console.log(resultadoDaOperacao = agrupamentoSemOperadorAritmeticoBotoesClicados / agrupamentoAnteriorIgualdade);
          break;
        case " - ":
          console.log("Subritacao")
          console.log(resultadoDaOperacao = agrupamentoSemOperadorAritmeticoBotoesClicados - agrupamentoAnteriorIgualdade);
          break;
        default:
          console.log("Operador inválido");
          break;
      };

      if (parseInt(resultadoDaOperacao) !== parseFloat(resultadoDaOperacao)) {

        resultadoOperacao = resultadoDaOperacao.toFixed(2);

        return;
      }

      resultadoOperacao = Math.trunc(resultadoDaOperacao);
    };
  };


  const quantidadeClicksBtnsOperadores = (valuleButton) => {
    const elementosARepetirem = [" ÷ ", " x ", " - ", " + ", ","];
    const quantidades = {
      quantClicksBtnMultipliacao: "quantClicksBtnMultipliacao",
      quantClicksBtnDivisao: "quantClicksBtnDivisao",
      quantClicksBtnSubritacao: "quantClicksBtnSubritacao",
      quantClicksBtnSoma: "quantClicksBtnSoma",
      quantClickBtnVirgula: "quantClickBtnVirgula",
    };

    elementosARepetirem.forEach((valorElementosARepetirem, indexelementosARepetirem) => {
      if (valuleButton === valorElementosARepetirem) {
        const quantidadeClicks = Object.keys(quantidades)[indexelementosARepetirem];
        console.log(quantidadeClicks)

        elementosRepetidos.push(quantidadeClicks)

        if (elementosRepetidos.length >= 2) {
          naoAdicaoElementDuplicado = true;
          exebindoBotoesClicados({ naoAdicaoElementDuplicado });

          elementosRepetidos = [];
        }
      }
    });
  };


  const alternacaEntreElementosInferioresESuperiores = () => {

    let tiposOperadores = [" + ", " x ", " ÷ ", " - "];

    tiposOperadores.forEach((elemento) => {

      let indexOperadoresAritmeticos = botoesClicados.indexOf(elemento);

      // eslint-disable-next-line eqeqeq
      if (indexOperadoresAritmeticos == -1) {
        return;
      }

      let agrupamentoComOperadorAritmetico = botoesClicados.slice(0, indexOperadoresAritmeticos + 1);

      armagenarElementosInferiores = agrupamentoComOperadorAritmetico;
    });
  };


  const btnsOperadoresClicadosERecente = (operadorOuVirgula) => {

    if (operadorOuVirgula === undefined) {

      operadoresClicados.push();
    }
    else {

      operadoresClicados.push(operadorOuVirgula);
    };

    let ultimoElementoOperadoresClicados = operadoresClicados[operadoresClicados.length - 1];

    operadoresClicadosAnterioresAoRecente(operadoresClicados, ultimoElementoOperadoresClicados);
  }


  const operadoresClicadosAnterioresAoRecente = (operadoresClicados, ultimoElementoOperadoresClicados) => {

    operadoresClicados.forEach((elemento) => {

      // eslint-disable-next-line eqeqeq
      if (elemento == ultimoElementoOperadoresClicados) {

        return;
      }
      else {

        let indexOperadorAnteriores = botoesClicados.indexOf(elemento);

        exclusaoElementosRepitidos(ultimoElementoOperadoresClicados, operadoresClicados, indexOperadorAnteriores);
      };
    });
  };


  const exclusaoElementosRepitidos = (operadoresClicados, indexOperadorAnteriores) => {

    const tiposOperadores = [" + ", " x ", " ÷ ", " - ", ","];
    let contador = {};

    botoesClicados.forEach((elemento, index) => {

      if (tiposOperadores.includes(elemento)) {
        contador[elemento] = (contador[elemento] || 0) + 1;

        if (contador[elemento] >= 2) {
          console.log(botoesClicados.splice(index, 1));
          contador[elemento] = 0;

          armagenarElementosSuperiores = botoesClicados;
          setElementosSuperior(armagenarElementosSuperiores);
        }

        // eslint-disable-next-line eqeqeq
        if (operadoresClicados == undefined) {
          return;
        };
      };
    });

    botoesClicadosTranscrevido.forEach((elemento, index) => {

      if (tiposOperadores.includes(elemento)) {
        contador[elemento] = (contador[elemento] || 0) + 1;

        if (contador[elemento] > 2) {

          console.log(botoesClicadosTranscrevido.splice(index, 1));
          contador[elemento] = 0;

          armagenarElementosInferiores = botoesClicadosTranscrevido;
          setElementosInferior(armagenarElementosInferiores);
        }
      };
    });
  };


  const sistemaDeNumerosDecimal = (uniaoElementosBotoesClicadosTranscrevido) => {

    let conversaoInteriro = parseInt(uniaoElementosBotoesClicadosTranscrevido);

    let sistemaDecimal = conversaoInteriro.toLocaleString('pt-BR');

    armagenarSistemaDecimal = sistemaDecimal;
  }


  const exebindoBotoesClicados = (parametros) => {

    if (parametros.naoAdicaoElementDuplicado) return;

    if (parametros.btnValule === ",") {

      btnsOperadoresClicadosERecente(parametros.btnValule);
    }
    else {
      btnsOperadoresClicadosERecente(parametros.operador);
    }

    if (botoesClicadosTranscrevido.length === 15) {
      console.log("Número limite permitido atingido");
      return;
    }

    if (parametros.btnValule !== null) {
      botoesClicadosTranscrevido.push(parametros.btnValule);
    }

    const uniaoElementosBotoesClicadosTranscrevido = botoesClicadosTranscrevido.join("");

    sistemaDeNumerosDecimal(uniaoElementosBotoesClicadosTranscrevido);

    if (parametros.alteraPosicaoElementosInferiorSuperior) {

      parametros.telaElementosInferior.style.visibility = "visible";
      parametros.tela.style.flexDirection = "column-reverse";

      if (alteraPosicaoElementosInferiorSuperior) {

        alternacaEntreElementosInferioresESuperiores();

        return;
      }

      let indexOperadoresAritmeticos = botoesClicadosTranscrevido.indexOf(parametros.operador);

      let agrupamentoComOperadorAritmetico = botoesClicadosTranscrevido.slice(0, indexOperadoresAritmeticos + 1);

      let agrupamentoSemOperadorAritmetico = botoesClicadosTranscrevido.slice(0, indexOperadoresAritmeticos);

      armagenarElementosInferiores = agrupamentoComOperadorAritmetico;

      botoesClicadosTranscrevido.splice(0, indexOperadoresAritmeticos + 1);
      armagenarElementosSuperiores = agrupamentoSemOperadorAritmetico;

      if (alteraPosicaoElementosInferiorSuperior) {

        botoesClicadosTranscrevido.pop();
      };

      return;
    };

    armagenarElementosSuperiores = uniaoElementosBotoesClicadosTranscrevido;
  };


  const alternacaoEntreTiposOperacoesMatematicas = (operdorAtual) => {

    let tiposOperadores = [" + ", " x ", " ÷ ", " - "];

    tiposOperadores.forEach((elemento) => {

      if (botoesClicados.includes(elemento)) {

        botoesClicados.indexOf(elemento, 0);
        botoesClicados.splice(botoesClicados.indexOf(elemento, 0), 1, operdorAtual);

        alteraPosicaoElementosInferiorSuperior = true;
      };
    });
  };


  const selecaoFuncoesAritmeticas = (paramento) => {

    const operadores = {
      " ÷ ": operacoesAritmeticas,
      " x ": operacoesAritmeticas,
      " - ": operacoesAritmeticas,
      " + ": operacoesAritmeticas,
    };

    const operadorSelecionado = operadores[paramento.elementoTiposOperadores];

    if (operadorSelecionado) {

      if (paramento.agrupamentoSemOperadorAritmeticoBotoesClicados.includes(",")) {

        operadorSelecionado(paramento.operador, paramento.numeroDecimalOuEntaoInteiro, parseFloat(paramento.uniaoElementosSemOperadorEAnteriorIgualdade));
      }
      else {

        operadorSelecionado(paramento.operador, paramento.numeroDecimalOuEntaoInteiro, paramento.uniaoElementosSemOperadorEAnteriorIgualdade);
      };
    };
  };


  const tipoDeOperacao = (operador) => {
    const tiposOperadores = [" ÷ ", " x ", " - ", " + ", "%"];

    botoesClicados.forEach((valor, index) => {

      if (tiposOperadores.includes(valor)) {
        const agrupamentoSemOperadorAritmeticoBotoesClicados = botoesClicados.slice(0, index);

        const indexOperadorAritmeticoIgualdade = botoesClicados.indexOf(" = ", 0);
        let agrupamentoSemOperadorEAnteriorIgualdade = botoesClicados.slice(index + 1, indexOperadorAritmeticoIgualdade);

        if (agrupamentoSemOperadorEAnteriorIgualdade.length === 0) {
          agrupamentoSemOperadorEAnteriorIgualdade = agrupamentoSemOperadorAritmeticoBotoesClicados;
        };

        let uniaoElementosSemOperadorEAnteriorIgualdade = agrupamentoSemOperadorEAnteriorIgualdade.reduce((acc, num) => acc + num, 0);
        const uniaoSemOperadorAritmeticoBotoesClicados = agrupamentoSemOperadorAritmeticoBotoesClicados.join("");

        let numeroDecimalOuEntaoInteiro = uniaoSemOperadorAritmeticoBotoesClicados.includes(",") ? parseFloat(uniaoSemOperadorAritmeticoBotoesClicados.replace(",", ".")) : parseInt(uniaoSemOperadorAritmeticoBotoesClicados);

        if (agrupamentoSemOperadorAritmeticoBotoesClicados.includes("%")) {

          numeroDecimalOuEntaoInteiro = parseInt(numeroDecimalOuEntaoInteiro) / 100;
        }

        if (agrupamentoSemOperadorEAnteriorIgualdade.includes("%")) {

          uniaoElementosSemOperadorEAnteriorIgualdade = parseInt(uniaoElementosSemOperadorEAnteriorIgualdade) / 100;
        }

        selecaoFuncoesAritmeticas({ operador, agrupamentoSemOperadorAritmeticoBotoesClicados, numeroDecimalOuEntaoInteiro, uniaoElementosSemOperadorEAnteriorIgualdade, elementoTiposOperadores: valor });
      };
    });
  };


  const iniciarOperacaoAritmetica = (e) => {

    let valuleButton = e.target.value;

    let telaElementosInferior = document.querySelector(".tela__elementos__inferior");
    let tela = document.querySelector(".tela");

    alternacaoEntreTiposOperacoesMatematicas(valuleButton);

    quantidadeClicksBtnsOperadores(valuleButton);

    botoesClicados.push(valuleButton);

    alteraPosicaoElementosInferiorSuperior ? exebindoBotoesClicados({ btnValule: valuleButton, alteraPosicaoElementosInferiorSuperior: true, telaElementosInferior: telaElementosInferior, tela: tela, operador: valuleButton }) : exebindoBotoesClicados({ btnValule: valuleButton, alteraPosicaoElementosInferiorSuperior: true, telaElementosInferior: telaElementosInferior, tela: tela, operador: valuleButton });

    setElementosSuperior(armagenarElementosSuperiores);
    setElementosInferior(armagenarElementosInferiores);
  };


  const botoesClicadosASerExebindos = (e) => {

    let valuleButton = e.target.value;

    botoesClicados.push(valuleButton);

    exebindoBotoesClicados({ btnValule: valuleButton, alteraPosicaoElementosInferiorSuperior: false });
    setElementosSuperior(armagenarElementosSuperiores);
  };


  const rendenizarNumerosDecimais = (e) => {
    let valuleButton = e.target.value;
 
    quantidadeClicksBtnsOperadores(valuleButton);

    if (naoAdicaoElementDuplicado) {

      return;
    }

    botoesClicados.push(valuleButton);
    exebindoBotoesClicados({ btnValule: valuleButton, alteraPosicaoElementosInferiorSuperior: false });

    ;

    // eslint-disable-next-line eqeqeq
    if (armagenarElementosSuperiores == ",") {

      armagenarElementosInferiores = "0,";
    };

    setElementosSuperior(armagenarElementosSuperiores);
    setElementosInferior(armagenarElementosInferiores);
  };


  const resultadosDasOperacoesAritmeticas = (e) => {

    let valuleButton = e.target.value;
    botoesClicados.push(valuleButton);
    let tela = document.querySelector(".tela");

    exebindoBotoesClicados({ btnValule: " = ", alteraPosicaoElementosInferiorSuperior: false });
    tela.style.flexDirection = "column";

    let tiposOperadores = [" + ", " x ", " ÷ ", " - "];

    botoesClicados.forEach((valor) => {

      if (tiposOperadores.includes(valor)) {

        tipoDeOperacao(valor);
      };
    });

    armagenarElementosSuperiores = botoesClicados;
    armagenarElementosInferiores = resultadoOperacao;

    setElementosSuperior(armagenarElementosSuperiores);
    if (armagenarElementosInferiores.length === 1) {

      let indexOperadorIgualdade = botoesClicados.slice(0, botoesClicados.indexOf(" = ", 0));

      resultadoOperacao = indexOperadorIgualdade;
      let telaElementosInferior = document.querySelector(".tela__elementos__inferior");
      telaElementosInferior.style.visibility = "visible";
    };

    armagenarElementosInferiores = resultadoOperacao;
    setElementosInferior(armagenarElementosInferiores);
  };

  const operacoesProps = {
    botoesClicados,
    botoesClicadosTranscrevido,
    botoesClicadosASerExebindos,
    armagenarElementosSuperiores,
    armagenarElementosInferiores,
    operadoresClicados,
    setElementosSuperior,
    setElementosInferior,
  };

  const propsNumerosEOpearacoesAritmeticas = {
    botoesClicadosASerExebindos,
    iniciarOperacaoAritmetica,
  };

  return (
    <ConteinerCalculadoraPadrao>
      <CalculadoraPadraoDiv>

        <Tela className="tela">

          <TelaH1 className="tela__elementos__superior"> {elementosSuperior} </TelaH1>
          <TelaH2 className="tela__elementos__inferior"> {elementosInferior} </TelaH2>
        </Tela>

        <OperacoesEspeciais props={operacoesProps} />

        <NumerosEDivisao props={propsNumerosEOpearacoesAritmeticas} />

        <NumerosEMultiplicacao props={propsNumerosEOpearacoesAritmeticas} />

        <NumerosESubritacao props={propsNumerosEOpearacoesAritmeticas} />

        <Button value={0}

          onClick={(e) => { botoesClicadosASerExebindos(e); }}
        >0</Button>

        <Button value={","}
          onClick={(e) => {

            rendenizarNumerosDecimais(e);
          }}
        >,</Button>

        <Button value={" = "}
          onClick={(e) => {

            resultadosDasOperacoesAritmeticas(e);
          }
          }
        >=</Button>

        <Button value={" + "}
          onClick={(e) => {

            iniciarOperacaoAritmetica(e);
          }}
        >+</Button>

      </CalculadoraPadraoDiv >
    </ConteinerCalculadoraPadrao>
  )
};
export default CalculadoraPadrao;