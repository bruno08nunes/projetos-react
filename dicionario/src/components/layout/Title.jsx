import ArrowButton from "./ArrowButton";
import styles from "./Title.module.css";

const Title = ({ text, Action, type, action, state }) => {
    return (
        <div className={styles.divTitulo}>
            <h2>{text}</h2>
            {Action && <Action type={type} action={action} state={state} />}
        </div>
    );
};

export default Title;
