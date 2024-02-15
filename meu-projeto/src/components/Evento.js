import Button from "./eventos/Button";

function Evento() {

    function meuEvento() {
        alert("Fui ativado");
    }

    function segundoEvento() {
        alert("Segundo evento ativado");
    }

    return (
        <div>
            <h1>Clique para disparar um evento:</h1>
            <Button text="Primeiro Evento" event={meuEvento} />
            <Button text="Segundo Evento" event={segundoEvento} />
        </div>
    )
}

export default Evento;