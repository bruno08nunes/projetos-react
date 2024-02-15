function Lista({ itens }) {
    return (
        <>
            <h3>Lista de Frameworks:</h3>
            {
                itens.length > 0 ? (
                    itens.map((item, key) => <p key={key}>{item}</p>)
                ) : (
                    <p>Não há itens na lista.</p>
                )
            }

        </>
    )
}

export default Lista;