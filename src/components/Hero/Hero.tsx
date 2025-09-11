import Image from "next/image";
import React from "react";
import { HeroProps } from "./HeroProps";
import styles from './Hero.module.css';

const Hero: React.FC<HeroProps> = ({pageInfo}) => {

    return (
        <div className={styles.Hero}>
            <img src={pageInfo.featuredImage.src} alt={pageInfo.featuredImage.alt} />
            <div className={styles.innerContentContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{pageInfo.Title}</h1>
                    <p className={styles.description}>{pageInfo.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;