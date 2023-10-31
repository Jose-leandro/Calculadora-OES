
import { Button } from "../CalculadoraPadrao";

function NumerosEDivisao({ props }) {
    return (
        <>
            <Button value={7}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >7</Button>

            <Button value={8}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >8</Button>

            <Button value={9}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >9</Button>

            <Button value={" ÷ "}
            
                onClick={(e) => {

                    props.iniciarOperacaoAritmetica(e);
                }}
            >÷</Button>
        </>
    );
};
export default NumerosEDivisao;