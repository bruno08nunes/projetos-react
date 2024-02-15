import {useState} from "react"

function Teste() {
    const [contador, setContador] = useState(0);

    return (
        <>
            <p>{contador}</p>
            <button onClick={() => setContador(contador+1)}>Clique Aqui</button>
        </>
    )
}

export default Teste;