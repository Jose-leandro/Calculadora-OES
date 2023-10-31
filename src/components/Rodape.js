import styled from "styled-components";

import Logo from "../assets/img/calculadora.png"

const ConteinerRodape = styled.div`
    align-items: center;
    background-color: #1115184f;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    width: 100%;
`;

const DivLogo = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: space-evenly;
    padding: 10px 15px;
`;

const LogoImg = styled.img`
    height: 50px;
    width: 50px;

    @media screen and (max-width: 480px) {
        height: 40px;
        width: 40px;
    }

    @media screen and (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`;

const LogoH1 = styled.h1`
    font-size: 27px;
    font-weight: 100;
    margin-left: 0.4em;

    @media screen and (max-width: 480px) {
        font-size: 15px;
        margin-top: 1.2em;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin-top: 1em;
    }
`;

const InformacoesAdicionais = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: space-evenly;
    width: 100%;
`;

const InformacoesAdicionaisConteiner = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 20px 0px;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`;

const InformacaoAdicional = styled.div`
    @media screen and (max-width: 768px) {
        display: flex;
        height: 146px;
        flex-direction: column;
        width: 40%;
    }
`;

const InformacaoAdicionalH2 = styled.h2`
    @media screen and (max-width: 480px) {
        font-size: 18px;
        margin-bottom: 1em;
    }
`;

const InformacaoAdicionalP = styled.p`
    font-size: 18px;
    padding: 17px 10px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-top: 1em;
        text-align: center;
    }
`;

const StyledA = styled.a`
    color: #ffffffad;
`;

function Rodape() {

    return (
        <ConteinerRodape>

            <div>

                <DivLogo>

                    <LogoImg src={Logo} alt="Logo do site" />
                    <LogoH1>Calculadora OES</LogoH1>
                </DivLogo>
            </div>

            <InformacoesAdicionais>

                <InformacoesAdicionaisConteiner>

                    <InformacaoAdicional>

                        <InformacaoAdicionalH2>Sobre nós</InformacaoAdicionalH2>

                        <ul>

                            <li>O que é Calculadora OES</li>
                            <li></li>
                        </ul>
                    </InformacaoAdicional>

                    <InformacaoAdicional>

                        <InformacaoAdicionalH2>Contato</InformacaoAdicionalH2>

                        <ul>

                            <li>Por Telefone</li>
                            <li>Por email</li>
                            <li>Whatsapp</li>
                            <li>E Mais</li>
                        </ul>
                    </InformacaoAdicional>

                    <InformacaoAdicional>

                        <InformacaoAdicionalH2>Termos e politicas</InformacaoAdicionalH2>

                        <ul>

                            <li>Termos de uso</li>
                            <li>Politica de privadicade</li>
                            <li>Politica de cookes</li>
                        </ul>
                    </InformacaoAdicional>

                    <InformacaoAdicional>

                        <InformacaoAdicionalH2>Direitos autorais</InformacaoAdicionalH2>

                        <ul>

                            <li><StyledA href="imagensAutorais.html">Uso de imagens e icones</StyledA></li>
                        </ul>
                    </InformacaoAdicional>
                </InformacoesAdicionaisConteiner>

                <InformacaoAdicionalP>&copy; Construido e desenvolvido por José leandro do nascimento</InformacaoAdicionalP>

            </InformacoesAdicionais>
        </ConteinerRodape>
    );
};

export default Rodape;