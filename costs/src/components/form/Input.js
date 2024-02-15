import styles from "./Input.module.css"

function Input({ type, text, name, placeholder, handleOnChange, value, required }) {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} required={required} />
        </div>
    )
}

export default Input