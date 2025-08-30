import React from "react";
import { ContentContainerProps } from "./ContentContainerProps";
import styles from "./ContentContainer.module.css";

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
    return <div className={styles.ContentContainer}>{children}</div>;
};

export default ContentContainer;
