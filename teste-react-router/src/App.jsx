import {
    Form,
    NavLink,
    Outlet,
    useLoaderData,
    useNavigation,
    useRouteLoaderData,
} from "react-router-dom";
import styles from "./App.module.css";

function App() {
    const checkIsActive = ({ isActive, isPending }) =>
        isActive ? styles.active : isPending ? styles.pending : "";

    const navigation = useNavigation();
    return (
        <div className={styles.main}>
            <aside className={styles.aside}>
                <nav>
                    <NavLink to="/" className={checkIsActive}>
                        Home
                    </NavLink>
                    <NavLink to="/contacts" className={checkIsActive}>
                        Contatos
                    </NavLink>
                    <NavLink to="/company" className={checkIsActive}>
                        Company
                    </NavLink>
                </nav>
                <NavLink to="/contacts/a" className={checkIsActive}>
                    Bruno
                </NavLink>
            </aside>
            {navigation.state === "loading" ? <div>Carregando...</div> : <Outlet />}
        </div>
    );
}

export default App;
