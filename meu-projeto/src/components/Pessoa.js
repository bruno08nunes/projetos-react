import styles from "./Pessoa.module.css"

function Pessoa({ nome, foto, idade, profissao }) {
    return(
        <div className={styles.fraseContainer} >
            <img src={foto} alt={nome} />
            <h2 className={styles.fraseContent}>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;