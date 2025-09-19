import React, { useState } from "react";
import { PorfolioCardProps } from "./PortfolioCardProps"
import styles from "./PortfolioCard.module.css";

import CardFeaturedImage from "@/components/Card/CardFeaturedImage/CardFeaturedImage";

const PorfolioCard: React.FC<PorfolioCardProps> = ({ project }) => {
    const [hover, setHover] = useState(false);

    const hoverComponent = (
        <div className={styles.PortfolioCardHover}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <a href={project.websiteURL} target="blank">Visit Website <i className="arrow right"></i></a>
        </div>
    );

    return (
        <div 
            className={styles.PortfolioCard}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* <CardFeaturedImage image={project.featuredImage} /> */}
            <div className={styles.PortfolioCardText}>
                <h3>
                    {project.name}
                </h3>
            </div>
            { hover && hoverComponent }
        </div>
    );
};

export default PorfolioCard;
