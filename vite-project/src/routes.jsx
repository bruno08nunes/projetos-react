import { Route, Routes } from "react-router-dom";
import FavoritosProvider from "./contexts/Favoritos";
import Home from "./routes/Home";
import Company from "./routes/Company";
import Contact from "./routes/Contact";
import Favorites from "./routes/Favorites";

const AppRoutes = () => {
    return (
        <FavoritosProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/company" element={<Company />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </FavoritosProvider>
    );
};

export default AppRoutes;
