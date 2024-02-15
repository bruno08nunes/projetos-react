import { useState, useEffect } from "react";
import styles from "./ArrowButton.module.css";

const ArrowButton = ({ action }) => {
    const [aberto, setAberto] = useState(true);
    useEffect(() => {
        (async () => {
            let dialogue = document.querySelector("#dialogue");
            if (!aberto) {
                action(true);
            }
            if (aberto && dialogue) {
                let efeito = [
                    { height: "300px", padding: "20px" },
                    { height: 0, padding: "0 20px" },
                ];
                let configs = {
                    duration: 700,
                    iterations: 1,
                    fill: "forwards",
                    easing: "ease-out",
                };
                await dialogue.animate(efeito, configs).finished;
                action(false);
                return;
            }
        })();
    }, [aberto]);

    return (
        <button
            className={`${styles.arrowButton} ${aberto && styles.aberto}`}
            onClick={() => setAberto(!aberto)}
        >
            <span>▼</span>
        </button>
    );
};

export default ArrowButton;
