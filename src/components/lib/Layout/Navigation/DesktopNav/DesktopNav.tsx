import React from "react";
import Link from "next/link";
import styles from './DesktopNav.module.css'

import { navLinks } from "@/lib/navLinks";


const DesktopNav = () => {
    const displayLinks = navLinks.map(navLink => {
        return (
            <li key={navLink.linkText}>
                <Link href={navLink.linkURL} >
                    {navLink.linkText}
                </Link>
            </li>
        );
    });

    return (
        <nav id="desktop-navigation">
            <ul className={styles.DesktopNavList}>
                {displayLinks}
            </ul>
        </nav>
    );
}

export default DesktopNav;