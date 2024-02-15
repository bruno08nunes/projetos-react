import styles from "./Modal.module.css";

import Title from "./layout/Title";
import AudioButton from "./layout/AudioButton";

const Modal = ({ setIsModalOpen, word, words, action, state }) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const closeModal = async (e) => {
        if (e.target.id === "backdrop") {
            let backdrop = document.querySelector("#backdrop");
            let efeito = [{ opacity: 1 }, { opacity: 0 }];
            let configs = { duration: 400, iterations: 1, fill: "forwards" };
            await backdrop.animate(efeito, configs).finished
            setIsModalOpen(false);
        }
    };

    let palavra = words[word];

    return (
        <div className={styles.backdrop} onClick={closeModal} id="backdrop">
            <div className={styles.modal}>
                <Title
                    text={capitalize(word)}
                    Action={AudioButton}
                    type={word}
                    action={action}
                    state={state}
                />
                <p>{palavra.descricaoIngles}</p>
                <Title
                    text={capitalize(palavra.traducao)}
                    Action={AudioButton}
                    type={palavra.traducao.toLowerCase().replaceAll(" ", "-")}
                    action={action}
                    state={state}
                />
                <p>{palavra.descricaoPortugues}</p>
            </div>
        </div>
    );
};

export default Modal;
