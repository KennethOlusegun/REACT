import React from "react";
import styles from './Frase.module.css'

export default function Phrase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                Este é um componente com uma frase!
            </p>
        </div>
    )
}
