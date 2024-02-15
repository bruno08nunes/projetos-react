// import { Link } from "react-router-dom";
// import Carrossel from "./components/Carrossel";
// import Search from "./components/Search";
// import AppRoutes from "./routes";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div>
            {/* <Search />
            <Carrossel />
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favoritos</Link>
            </nav>
            <AppRoutes /> */}
            <Outlet />
        </div>
    );
}

export default App;
