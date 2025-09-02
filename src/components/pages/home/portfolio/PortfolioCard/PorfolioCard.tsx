import React, { useState } from "react";
import Image from "next/image";
import { PorfolioCardProps } from "./PortfolioCardProps"
import styles from "./PortfolioCard.module.css";

import CardFeaturedImage from "@/components/Card/CardFeaturedImage/CardFeaturedImage";

const PorfolioCard: React.FC<PorfolioCardProps> = ({ project }) => {
    const [hover, setHover] = useState(false);

    const hoverComponent = (
        <div className={styles.PortolioCardHover}>
            <a href={project.websiteURL} target="blank">Visit Website</a>
        </div>
    );

    const technologiesString = project.technologies.join(', ')

    return (
        <div 
            className={styles.PorfolioCard}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <CardFeaturedImage image={project.featuredImage} />
            <div className={styles.PorfolioCardText}>
                <h3>
                    {project.name}
                </h3>
                <p>
                    {technologiesString}
                </p>
            </div>
            { hover && hoverComponent }
        </div>
    );
};

export default PorfolioCard;
