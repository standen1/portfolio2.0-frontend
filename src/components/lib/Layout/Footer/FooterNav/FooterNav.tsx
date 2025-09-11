import React from "react";
import Link from "next/link";
import styles from './FooterNav.module.css'

import { navLinks, legalLinks } from "@/lib/navLinks";


const FooterNav = () => {
    const displayNavLinks = navLinks.map(navLink => {
        return (
            <li key={navLink.linkText}>
                <Link href={navLink.linkURL} >
                    {navLink.linkText}
                </Link>
            </li>
        );
    });

    const displayLegalLinks = legalLinks.map(legalLink => {
        return (
            <li key={legalLink.linkText}>
                <Link href={legalLink.linkURL} >
                    {legalLink.linkText}
                </Link>
            </li>
        );
    });

    return (
        <nav id="desktop-navigation" className={styles.FooterNav}>
            <div className={styles.FooterMenu}>
                <h3>Menu</h3>
                <ul className={styles.FooterNavLinks}>
                    {displayNavLinks}
                </ul>
            </div>

            <div className={styles.FooterMenu}>
                <h3>Other</h3>
                <ul className={styles.FooterNavLinks}>
                    {displayLegalLinks}
                    <li>
                        <a href="https://webpunk.tech/" target="_blank">Webpunk</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default FooterNav;