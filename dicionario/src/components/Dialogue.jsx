import capitalize from "../scripts/capitalize";
import AudioButton from "./layout/AudioButton";
import Title from "./layout/Title";
import styles from "./DIalogue.module.css";

const Dialogue = ({ isDialogueOpen, words, word, action, state }) => {
    return (
        <>
            {isDialogueOpen && (
                <div className={styles.dialogue} id="dialogue">
                    <div>
                        <Title
                            text={"Frase em inglês - " + capitalize(word)}
                            Action={AudioButton}
                            type={word + "-frase"}
                            action={action}
                            state={state}
                        />
                        <p>{words[word]["fraseIngles"]}</p>
                    </div>
                    <div>
                        <Title
                            text={
                                "Frase em português - " +
                                words[word]["traducao"]
                            }
                            action={action}
                            state={state}
                        />
                        <p>{words[word]["fraseConto"]}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dialogue;
