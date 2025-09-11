import React, { useState } from "react";
import Link from "next/link";
import styles from './MobileNav.module.css'

import { navLinks } from "@/lib/navLinks";


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    function menuToggleHandler() {
        setIsOpen(!isOpen);
    }

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
        <div>
            <div className={styles.Hamburger}>
                <button onClick={() => menuToggleHandler()}>
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </button>
            </div>
            {
                isOpen && (
                    <nav id="mobile-navigation" className={styles.MobileNav}>
                        <div className={styles.MobileNavContents}>
                            <button id="close-mobile-nav" className={styles.CloseButton} onClick={() => menuToggleHandler()} />
                            <ul className={styles.MobileNavList}>
                                {displayLinks}
                            </ul>
                        </div>
                    </nav>
                )
            }
        </div>
    );
}

export default MobileNav;