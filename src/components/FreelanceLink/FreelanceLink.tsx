import React from "react";
import styles from './FreelanceLink.module.css';

const FreelanceLink = () => (
    <div className={styles.FreelanceLink}>
        <p>To inquire about freelancing work, please click the link below.</p>
        <a href="https://webpunk.tech/" target="_blank">
            WebPunk.tech
            <div className={styles.Arrow}>
                <i />
            </div>
        </a>
    </div>
);

export default FreelanceLink;