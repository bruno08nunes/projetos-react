import styles from "./Home.module.css";
import { useFavoritosContexto } from "../contexts/Favoritos";

const Home = () => {
    // const lista = []
    // for (let i = 0; i < 10; i++) {
    //     lista.push(i+1);
    // }
    // const {favoritos, addFavorito} = useFavoritosContexto();
    // return (
    //     <section className={styles.section}>
    //         {lista.map((lista, key) => <div key={key} onClick={() => addFavorito(lista)}>{lista}</div>)}
    //     </section>
    // );
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
