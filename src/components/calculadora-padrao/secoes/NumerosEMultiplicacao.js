
import { Button } from "../CalculadoraPadrao";

function NumerosEMultiplicacao({ props }) {
    return (
        <>
            <Button value={4}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >4</Button>

            <Button value={5}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >5</Button>

            <Button value={6}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >6</Button>

            <Button value={" x "}
                onClick={(e) => {

                    props.iniciarOperacaoAritmetica(e);
                }}
            >×</Button>
        </>
    );
};
export default NumerosEMultiplicacao;