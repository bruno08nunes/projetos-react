import {BsPencil, BsFillTrashFill} from "react-icons/bs";
import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";

function ProjectCard({id, name, budget, cost, category, handleRemove}) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p>
                <span>Restante do Orçamento:</span> R${budget - cost}
            </p>
            <p className={styles.categoryText}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.projectCardActions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;