import PropTypes from "prop-types";

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>Carro da marca: {marca}. Lançado em {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
	marca: "Não passada",
	ano_lancamento: 0
}


export default Item;