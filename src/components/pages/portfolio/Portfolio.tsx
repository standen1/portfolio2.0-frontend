import React from "react";
import styles from "./Portfolio.module.css";
import PorfolioCard from "./PortfolioCard/PorfolioCard";
import { PortfolioProps } from "./PorfolioProps";
import { Project } from "@/types/types";


const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    if (data) {
        const projects = data.map((project: Project) => (
            <PorfolioCard key={project.name} project={project} />
        ));
        return (
            <div className={styles.Portfolio}>
                <div className={styles.Projects}>
                    {projects}
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.Error}>Oops, something went wrong!  Try refreshing the page.</div>
        );
    }
}

export default Portfolio;