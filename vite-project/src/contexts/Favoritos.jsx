import { createContext, useState, useContext } from "react";

export const FavoritosContexto = createContext();
FavoritosContexto.displayName = "MeusFavoritos";

export default function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);
    return (
        <FavoritosContexto.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritosContexto.Provider>
    );
}

export function useFavoritosContexto() {
    const { favoritos, setFavoritos } = useContext(FavoritosContexto);
    function addFavorito(novoFavorito) {
        const favoritoRepetido = favoritos.some(
            (item) => item === novoFavorito,
        );
        let novaLista = [...favoritos];
        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista);
        }
        novaLista = favoritos.filter((fav) => fav !== novoFavorito); // Remove caso tenha essa adicionado
        return setFavoritos(novaLista);
    }
    return {
        favoritos,
        addFavorito,
    };
}
