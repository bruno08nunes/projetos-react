import { Link } from "react-router-dom";

import styles from "./Header.module.css"

const Header = () => {
    const pages = [
        {
            path: "/",
            name: "home",
        },
        {
            path: "/contacts",
            name: "contacts",
        },
    ];

    return (
        <header className={styles.header}>
            <h1>Teste</h1>
            <nav>
                <ul>
                    {pages.map(({ name, path }, key) => (
                        <li key={key}>
                            <Link to={path}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
