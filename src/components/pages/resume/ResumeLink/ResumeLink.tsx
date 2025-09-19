import React from "react";
import styles from './ResumeLink.module.css';

const ResumeLink = () => (
    <div className={styles.ResumeLink}>
        <p>To inquire about freelancing work, please click the link below.</p>
        <a href="https://intuitive-gem-3495d29428.media.strapiapp.com/Sean_Standen_Web_Developer_Resume_29959c5814.pdf" target="_blank">
            Resume
            <div className={styles.Arrow}>
                <i />
            </div>
        </a>
    </div>
);

export default ResumeLink;