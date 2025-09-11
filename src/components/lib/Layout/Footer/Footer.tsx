import React from "react";
import styles from './Footer.module.css';

import FooterNav from "./FooterNav/FooterNav";
import FooterContact from "./FooterContact/FooterContact";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterUpperContent}>
                <FooterContact />
                <FooterNav />
            </div>
            <div className={styles.FooterLowerContent}>
                <div id="copyright">©Copyright Sean Standen | WebPunk 2024</div>
            </div>
        </footer>
    );
};

export default Footer;