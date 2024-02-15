import React from "react";
import styles from "./Container.module.css";

const Container = ({ childs }) => {
    return (
        <div className={styles.container}>
            <div>{childs}</div>
        </div>
    );
};

export default Container;
