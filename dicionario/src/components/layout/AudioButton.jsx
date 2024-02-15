import { FaVolumeUp } from "react-icons/fa";
import styles from "./AudioButton.module.css";

const AudioButton = ({ type, action, state }) => {
    let audio;

    (async () => {
        let src = `../../assets/audios/${type}.mp3`;
        let audioSrc = await import(src);
        audio = new Audio(audioSrc.default);
        audio.addEventListener("ended", () => action(false));
    })();

    const tocarAudio = () => {
        if (!state) {
            audio.play();
            action(true);
        }
    };


    return (
        <button className={styles.button} onClick={tocarAudio}>
            <FaVolumeUp />
        </button>
    );
};

export default AudioButton;
