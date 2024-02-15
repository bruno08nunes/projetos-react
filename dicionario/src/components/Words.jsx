import styles from "./Words.module.css";
import capitalize from "../scripts/capitalize";

const Words = ({ words, setIsModalOpen, setPalavra }) => {
    let keys = Object.keys(words);

    const openModal = (key) => {
        setIsModalOpen(true);
        setPalavra(key);
    };

    return (
        <section className={styles.divPalavras}>
            {keys.map((key, id) => (
                <p key={id} onClick={() => openModal(key)} onMouseOver={() => setPalavra(key)}>
                    {capitalize(key)}
                </p>
            ))}
        </section>
    );
};

export default Words;
