import React, { useState } from "react";
import { PorfolioCardProps } from "./PortfolioCardProps";
import styles from "./PortfolioCard.module.css";
import Card from "@/components/Card/Card";
import CardFeaturedImage from "@/components/Card/CardFeaturedImage/CardFeaturedImage";

const PorfolioCard: React.FC<PorfolioCardProps> = ({ project }) => {
    const [hover, setHover] = useState(false);

    const hoverComponent = (
        <div className={styles.PortfolioCardHover}>
            {/* <h4>{project.name}</h4>
            <p>{project.description}</p> */}
            <a href={project.websiteURL} target="blank">Visit Website
                <div className={styles.Arrow}>
                    <i />
                </div>
            </a>
        </div>
    );

    const cardImage = project.featuredImage ? (
        <CardFeaturedImage image={project.featuredImage} />
    ) : null;

    return (
        <Card>
            <div 
                className={styles.PortfolioCard}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {cardImage}
                <div className={styles.PortfolioCardText}>
                    <h3>
                        {project.name}
                    </h3>
                    <p>{project.description}</p>
                </div>
                { hover && hoverComponent }
            </div>
        </Card>
    );
};

export default PorfolioCard;
