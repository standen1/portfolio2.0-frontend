import React from "react";
import { ButtonNavWrapperProps } from "./ButtonNavWrapperProps";
import styles from "./ButtonNavWrapper.module.css";

const ButtonNavWrapper: React.FC<ButtonNavWrapperProps> = ({ children }) => {
    return <div className={styles.ButtonNavWrapper}>{children}</div>;
};

export default ButtonNavWrapper;