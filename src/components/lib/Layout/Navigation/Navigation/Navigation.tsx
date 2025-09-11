import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from './Navigation.module.css';

import DesktopNav from "../DesktopNav/DesktopNav";
import MobileNav from "../MobileNav/MobileNav";
import Link from "next/link";
//import MobileNav from "../MobileNav/MobileNav";

const Navigation = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update the screenWidth state
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function: remove event listener when component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        }
    }, []);

    const MenuBaedOnScreenWidth = () => {
        if(screenWidth <= 800) {
            return <MobileNav />;
        }
        return <DesktopNav />
    };

    return (
        <div className={styles.Navigation}>
            <Link href="/">
                <div className={styles.Logo}>
                    <Image 
                        src="/logo.png"
                        alt="Sean Standen | Developer"
                        width={287}
                        height={28}
                    />
                </div>
            </Link>
            {MenuBaedOnScreenWidth()}
        </div>
    )
}

export default Navigation;