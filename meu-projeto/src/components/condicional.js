import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail)
    }
    function limparEmail(e) {
        setUserEmail("");
    }
    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" name="email" id="email" placeholder="Digite o seu e-mail..." onChange={(e) => {setEmail(e.target.value)}} />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            </form>
            {
                userEmail ? (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                ) : (
                    <div>
                        <p>Poggers</p>
                    </div>
                )
            }
        </div>
    )
}

export default Condicional;