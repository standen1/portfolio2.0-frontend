import React, { useState } from "react";
import { ResumeCardProps } from "./ResumeCardProps"
import styles from "./ResumeCard.module.css";

import CardFeaturedImage from "@/components/Card/CardFeaturedImage/CardFeaturedImage";

const ResumeCard: React.FC<ResumeCardProps> = ({ job }) => {
    const [hover, setHover] = useState(false);

    const hoverComponent = (
        <div className={styles.ResumeCardHover}>
            <h4>{job.companyName}</h4>
            <h5>{job.description}</h5>
            <a href={job.websiteURL} target="blank">Visit Website <i className="arrow right"></i></a>
        </div>
    );
    
    const dateString = () => {
        const startDate = job.startDate ? new Date(Date.parse(job.startDate)).toLocaleDateString("en-US",{
            year: "numeric",
            month: "long"
        }) : null;

        const endDate = job.endDate ? new Date(Date.parse(job.endDate)).toLocaleDateString("en-US",{
            year: "numeric",
            month: "long"
        }) : "Present";
        return (`${startDate} - ${endDate}`);
    }

    return (
        <div 
            className={styles.ResumeCard}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <CardFeaturedImage image={job.featuredImage} />
            <div className={styles.ResumeCardText}>
                <h3>
                    {job.companyName}
                </h3>
                <h4>
                    {job.jobTitle}
                </h4>
                <p>
                    {dateString()}
                </p>
            </div>
            { hover && hoverComponent }
        </div>
    );
};

export default ResumeCard;
