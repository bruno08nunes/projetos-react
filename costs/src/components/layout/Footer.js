import {FaFacebook, FaInstagram, FaGithub} from "react-icons/fa"

import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaGithub />
                </li>
            </ul>
            <address className={styles.copyright}><span>Costs</span> &copy; 2024</address>
        </footer>
    )
}

export default Footer;