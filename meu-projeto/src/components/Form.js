import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name);
        console.log(password)
        console.log("Usuário Cadastrado");
    }

    const [name, setName] = useState("Matheus");
    const [password, setPass] = useState("Matheus");

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" autoComplete="currentpassword" onChange={(e) => setPass(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;