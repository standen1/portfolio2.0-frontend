import React from "react";
import { CardProps } from "./CardProps";
import styles from "./Card.module.css";

const Card: React.FC<CardProps> = ({ children }) => {
    return <div className={styles.Card}>{children}</div>;
};

export default Card;
