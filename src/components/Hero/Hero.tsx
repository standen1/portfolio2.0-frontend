import React from "react";
import { HeroProps } from "./HeroProps";
import styles from './Hero.module.css';

const Hero: React.FC<HeroProps> = ({pageInfo, children}) => {
    const featuredImage = pageInfo.featuredImage ? pageInfo.featuredImage.src : '';
    const featuredImageAlt = pageInfo.featuredImage ? pageInfo.featuredImage.alt : '';

    return (
        <div className={styles.Hero}>
            <img src={featuredImage} alt={featuredImageAlt} />
            <div className={styles.innerContentContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{pageInfo.Title}</h1>
                    <p className={styles.description}>{pageInfo.Description}</p>
                    {children ? children : null}
                </div>
            </div>
        </div>
    );
};

export default Hero;