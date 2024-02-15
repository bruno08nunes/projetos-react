import { useFavoritosContexto } from "../contexts/Favoritos";
import styles from "./Home.module.css"

const Favorites = () => {
    const { favoritos, addFavorito } = useFavoritosContexto();
    const isFavorite = (fav) => favoritos.includes(fav) && "favoritos";
    return (
        <section className={styles.favoritos}>
            {favoritos.map((item, key) => (
                <div key={key} onClick={() => addFavorito(item)}>{item}</div>
            ))}
        </section>
    );
};

export default Favorites;
