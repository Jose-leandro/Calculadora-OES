
import { Button } from "../CalculadoraPadrao";

function NumerosESubritacao({ props }) {
    return (
        <>
            <Button value={1}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >1</Button>

            <Button value={2}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >2</Button>

            <Button value={3}

                onClick={(e) => { props.botoesClicadosASerExebindos(e); }}
            >3</Button>

            <Button value={" - "} 
                onClick={(e) => {

                    props.iniciarOperacaoAritmetica(e);
                }}
            >-</Button>
        </>
    );
};
export default NumerosESubritacao;