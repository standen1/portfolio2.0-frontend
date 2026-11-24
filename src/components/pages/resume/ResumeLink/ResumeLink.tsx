import React from "react";
import styles from './ResumeLink.module.css';

const ResumeLink = () => (
    <div className={styles.ResumeLink}>
        <a href="Sean_Standen_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume (PDF)
            <div className={styles.Arrow}>
                <i />
            </div>
        </a>
        <a href="https://webpunk.tech/#contact" target="_blank" rel="noopener noreferrer">
            Inquire About Freelance Work
            <div className={styles.Arrow}>
                <i />
            </div>
        </a>
    </div>
);

export default ResumeLink;