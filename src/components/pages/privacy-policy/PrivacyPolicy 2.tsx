import React from "react";
import { PrivacyPolicyPageProps } from "@/types/interfaces";
import styles from "./PrivacyPolicy.module.css";
import Markdown from "markdown-to-jsx";

const PrivacyPolicy: React.FC<PrivacyPolicyPageProps> = ({ data }) => {
    if (data) {
        return (
            <div className={styles.PrivacyPolicy}>
            <h2>Privacy Policy</h2>
                <Markdown>
                    {typeof data.PageData?.Content === "string" ? data.PageData.Content : ""}
                </Markdown>
            </div>  
        );
    } else {
        return (
            <div className={styles.Error}>Oops, something went wrong!  Try refreshing the page.</div>
        );
    }
};

export default PrivacyPolicy;
