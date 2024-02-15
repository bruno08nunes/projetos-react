import styles from "./Company.module.css"
import {Link} from "react-router-dom";

function Company() {
    return (
        <div className={styles.companyContainer}>
            <h1>Costs</h1>
            <p>Nossa empresa busca por tornar mais fácil a criação de projetos, ajudando na parte de planejamento, organização de custos e muito mais.</p>
            <p>Crie já seu primeiro projeto na <Link to="/newproject">no nosso site</Link> </p>
        </div>
    )
}

export default Company;