import React from "react";
import styles from './SocialMediaLinks.module.css'
import Image from "next/image";

const SocialMediaLinks = () => {
    return (
        <div className={styles.SocialMediaLinks}>
            <a href="https://www.linkedin.com/in/sean-standen/" target="_blank">
                <Image src="/social-media-links/linkedin.png" alt="LinkedIn" width={50} height={46} />
            </a>

            <a href="https://github.com/standen1" target="_blank">
                <Image src="/social-media-links/github.png" alt="GitHub" width={50} height={46} />
            </a>
        </div>
    );
}

export default SocialMediaLinks;