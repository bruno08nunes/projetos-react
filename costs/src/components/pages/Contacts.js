import styles from "./Contacts.module.css"
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

function Contacts() {
    return (
        <div className={styles.contactsContainer}>
            <h1>Redes Sociais</h1>
            <p>Você pode entrar em contato com a gente através das nossas redes:</p>
            <ul>
                <li>
                    <a href="#">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaTwitter />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts;