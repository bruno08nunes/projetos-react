import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1963} />
                <Item marca="Ford" ano_lancamento={2001} />
                <Item marca="Porsche" />
            </ul>
        </>
    )
}

export default List;