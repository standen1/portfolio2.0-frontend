import React from "react";
import { JobProps } from "./JobProps";
import styles from "./Job.module.css";
import Markdown from "markdown-to-jsx";

const Job: React.FC<JobProps> = ({ job }) => {
    const projects = job?.responsibilities ? job.responsibilities.map((responsibility, index) => (
        <div key={index} className={styles.Project}>
            <h4>{responsibility.name}</h4>
            <Markdown>{responsibility.description}</Markdown>
        </div>
    )) : null;
    const jobComponent = job ? (
        <>
            <div className={styles.Job}>
                <h2>{job.companyName}</h2>
                <h3>{job.jobTitle}</h3>
                <p className={styles.EmploymentDates}>{job.startDate} - {job.endDate || "Present"}</p>
                {job.websiteURL && (
                    <p>Website: <a href={job.websiteURL} target="_blank" rel="noopener noreferrer" className={styles.WebsiteLink}>
                        {job.websiteURL.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a></p>
                )}
            </div>
            <div className={styles.Projects}>
                {projects}
            </div>
        </>
    ) : <div className={styles.Error}>Oops, something went wrong!  Try refreshing the page.</div>;
    return <div className={styles.JobContainer}>
        {jobComponent}
    </div>;
};

export default Job;