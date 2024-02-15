import styles from "./ToggleButton.module.css";

function ToggleButton({ handleClick, condition, textOne, textTwo }) {
    return (
        <button className={styles.btn} onClick={handleClick}>
            {condition ? textOne : textTwo}
        </button>
    )
}

export default ToggleButton;