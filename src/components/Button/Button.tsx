import React from "react";
import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className={styles.Button}>{children}</button>;
};

export default Button;
