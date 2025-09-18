import React from "react";
import { JobProps } from "./JobProps";
import styles from "./ContentContainer.module.css";

const Job: React.FC<JobProps> = ({ job }) => {
    const jobComponent = job ? (
        <div className={styles.Job}>
            <h2>{job.companyName}</h2>
        </div>
    ) : <div className={styles.Error}>Oops, something went wrong!  Try refreshing the page.</div>;
    return <div className={styles.ContentContainer}>
        {jobComponent}
    </div>;
};

export default Job;