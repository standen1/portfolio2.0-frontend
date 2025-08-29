import Image from "next/image";
import React from "react";
import { HeroProps } from "./HeroProps";
import styles from './Hero.module.css';

const Hero: React.FC<HeroProps> = ({pageInfo}) => {

    return (
        <div className={styles.Hero}>
            <Image src={pageInfo.featuredImage.src} alt={pageInfo.featuredImage.alt} fill />
            <div className={styles.innerContentContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{pageInfo.title}</h1>
                    <p className={styles.description}>{pageInfo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;