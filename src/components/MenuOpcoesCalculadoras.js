import styled from "styled-components";

const ConteinerOpcoes = styled.div`
  align-items: center;
  display: flex;
  height: 77px;
  justify-content: space-evenly;

  @media screen and (max-width: 480px) {
    height: 88px;
    width: 89%;
  }
`;

const BotaoPadrao = styled.button`
  background-color: #252a2e;
  border: none;
  border-radius: 13px;
  color: #896161;
  cursor: pointer;
  font-size: 17px;
  margin: 0px 10px;
  margin-bottom: 0.8em;
  padding: 5px 15px; 
  
  @media screen and (max-width: 480px) {
    border-radius: 8px;
    font-size: 15px;
    margin: 0px 0px 0px 3px;
    padding: 5px 7px;
      &:last-child {
        font-size: 14px;
      }
      &:hover {
        border-radius: 8px;
        font-size: 15.5px;
        padding: 5px 7px;
      }
      &:active {
        border-radius: 16px;
      }
  }
`;

const BotaoCientifica = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffffad;
  cursor: pointer;
  font-size: 17px;
  margin: 0px 4px;
  padding: 5px 15px;
  text-align: center;
    &:hover {
      background-color: #252a2e;
      border-radius: 13px;
      color: #896161;
      font-size: 17.5px;
      margin-bottom: 1.3em;
      margin-top: 0.3em;
    }
    &:active {
      border-radius: 18px;
      background-color: #252a2e8a;
    }

  @media screen and (max-width: 480px) {
    border-radius: 8px;
    font-size: 15px;
    margin: 0px 0px 0px 3px;
    padding: 5px 7px;
      &:last-child {
        font-size: 14px;
      }
      &:hover {
        border-radius: 8px;
        font-size: 15.5px;
        padding: 5px 7px;
      }
      &:active {
        border-radius: 16px;
      }
  }
`;

const BotaoFinanceira = styled(BotaoCientifica)`
`;

const BotaoGrafica = styled(BotaoCientifica)`
`;

const EmBreveP = styled.p`
  background-color: #252a2e;
  border-radius: 7px;
  color: #896161;
  font-size: 12px;
  padding: 0px 2px;
`;

const ConteinerCientifica = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 120%;
  justify-content: center;
    
  @media screen and (max-width: 480px) {
    margin-left: 1em;
    width: 20%;
  }
`;

const ConteinerFinanceira = styled(ConteinerCientifica)`
`;

const ConteinerGrafica = styled(ConteinerCientifica)`
`;


function MenuOpcoesCalculadoras() {

  const adicaoElementId = (selector, id) => {

    const element = document.querySelector(selector);
    if (element) {

      element.setAttribute("id", id);
    } else {

      console.log("Erro ao executar");
    };

    return element;
  };
  
  const classNamesIds = (valorIdTipoPadrao, valorIdTipoCientifica, valorIdTipoFinanceira, valorIdTipoGrafica) => {
    const tipoPadrao = adicaoElementId(".tipo-padrao", valorIdTipoPadrao);
    const tipoCientifica = adicaoElementId(".tipo-cientifica", valorIdTipoCientifica);
    const tipoFinanceira = adicaoElementId(".tipo-financeira", valorIdTipoFinanceira);
    const tipoGrafica = adicaoElementId(".tipo-grafica", valorIdTipoGrafica);
  
    return [tipoPadrao, tipoCientifica, tipoFinanceira, tipoGrafica];
  };
  
  const setElementId = (selector, id) => {

    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute("id", id);
    };
  };
  
  function readicionarIdsAoClicarTiposCaluladoras(parametros) {
    setElementId(parametros.primeiroNomeClass, parametros.primeiroNomeId);
    setElementId(parametros.segundoNomeClass, parametros.segundoNomeId);
    setElementId(parametros.terceiroNomeClass, parametros.terceiroNomeId);
  };
  
  const remocaoDeEstilos = (classNames, nomeId) => {
    const tipoPadrao = document.querySelector(".tipo-padrao");
    const elemento1 = document.getElementById("1");
    
    console.log(classNames);
    console.log(nomeId);
  
    classNames.forEach(element => {
      console.log(element);
      let id = element.id;
      console.log(id);
  
      if (id === "1") {
        element.style.color = "#896161";
        element.style.borderRadius = "13px";
        element.style.backgroundColor = "#252a2e";
        element.style.marginBottom = "0.8em";
        element.style.fontSize = "16.5px";
        elemento1.setAttribute("id", nomeId);
      } else {
        tipoPadrao.style.marginTop = "0.8em";
        element.style.marginBottom = "0em";
        element.style.color = "#ffffffad";
        element.style.backgroundColor = "transparent";
  
        element.addEventListener("mouseover", () => {
          element.style.color = "#896161";
          element.style.borderRadius = "13px";
          element.style.backgroundColor = "#252a2e";
          element.style.marginBottom = "0.8em";
          element.style.fontSize = "16.5px";
        });
  
        element.addEventListener("mouseleave", () => {
          element.style.color = "#ffffffad";
          element.style.backgroundColor = "transparent";
          element.style.marginBottom = "0em";
        });
      }
    });
  }
 
  return (
    <ConteinerOpcoes>

      <BotaoPadrao className="tipo-padrao" id="tipo-padrao" onClick={() => {

        let classNameParaRemocaoEstilos = (classNamesIds("1", "0", "0", "0"))

        remocaoDeEstilos(classNameParaRemocaoEstilos, "tipo-padrao")
        readicionarIdsAoClicarTiposCaluladoras( {
          primeiroNomeClass: ".tipo-cientifica", primeiroNomeId: "tipo-cientifica", 
          segundoNomeClass: ".tipo-financeira", segundoNomeId: "tipo-financeira", 
          terceiroNomeClass: ".tipo-grafica", terceiroNomeId: "tipo-grafica"} );
      }} >
        Padrão
      </BotaoPadrao>

      <ConteinerCientifica>

        <EmBreveP>Em breve</EmBreveP>

        <BotaoCientifica className="tipo-cientifica" id="tipo-cientifica" onClick={() => {
          let classNameParaRemocaoEstilos = (classNamesIds("0", "1", "0", "0"))

          remocaoDeEstilos(classNameParaRemocaoEstilos, "tipo-cientifica")

          readicionarIdsAoClicarTiposCaluladoras( {
            primeiroNomeClass: ".tipo-cientifica", primeiroNomeId: "tipo-cientifica", 
            segundoNomeClass: ".tipo-financeira", segundoNomeId: "tipo-financeira", 
            terceiroNomeClass: ".tipo-grafica", terceiroNomeId: "tipo-grafica"} );
        }}>
          Científica
        </BotaoCientifica>
      </ConteinerCientifica>

      <ConteinerFinanceira>

        <EmBreveP>Em breve</EmBreveP>

        <BotaoFinanceira className="tipo-financeira" id="tipo-financeira"
          onClick={() => {

            let classNameParaRemocaoEstilos = (classNamesIds("0", "0", "1", "0"));

            remocaoDeEstilos(classNameParaRemocaoEstilos, "tipo-financeira")

            readicionarIdsAoClicarTiposCaluladoras( {
              primeiroNomeClass: ".tipo-cientifica", primeiroNomeId: "tipo-cientifica", 
              segundoNomeClass: ".tipo-financeira", segundoNomeId: "tipo-financeira", 
              terceiroNomeClass: ".tipo-grafica", terceiroNomeId: "tipo-grafica"} );
          }}>
          Financeira
        </BotaoFinanceira>
      </ConteinerFinanceira>

      <ConteinerGrafica>

        <EmBreveP>Em breve</EmBreveP>

        <BotaoGrafica className="tipo-grafica" id="tipo-grafica" onClick={() => {

          let classNameParaRemocaoEstilos = (classNamesIds("0", "0", "0", "1"));

          remocaoDeEstilos(classNameParaRemocaoEstilos, "tipo-grafica");

          readicionarIdsAoClicarTiposCaluladoras( {
            primeiroNomeClass: ".tipo-cientifica", primeiroNomeId: "tipo-cientifica", 
            segundoNomeClass: ".tipo-financeira", segundoNomeId: "tipo-financeira", 
            terceiroNomeClass: ".tipo-grafica", terceiroNomeId: "tipo-grafica"} );
        }}>
          Gráfica
        </BotaoGrafica>
      </ConteinerGrafica>
    </ConteinerOpcoes>
  );
}

export default MenuOpcoesCalculadoras;




