import { useState } from "react";
import pessoas from "../assets/pessoas.json";

const Search = () => {
    const [pesquisa, setPesquisa] = useState("");
    const pessoasOrdenadas = pessoas.toSorted((a, b) => {
        if (a.nome < b.nome) {
            return -1;
        } else {
            return true;
        }
    });
    const pessoasFiltradas = pessoasOrdenadas.filter(
        ({ nome, sobrenome, adjetivo }) =>
            nome.toLowerCase().includes(pesquisa) ||
            sobrenome.toLowerCase().includes(pesquisa) ||
            adjetivo.toLowerCase().includes(pesquisa),
    );

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setPesquisa(e.target.value.toLowerCase())}
            />
            <ul>
                {pessoasFiltradas.map(({ nome, sobrenome }, index) => (
                    <li key={index}>
                        {nome} {sobrenome}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
