import React from "react";
import { ResumePageProps } from "@/types/interfaces";
import Job from "./Job/Job";
import styles from "./Resume.module.css";

const Resume: React.FC<ResumePageProps> = ({ data }) => {
    if (data && data.EmploymentHistory) {
        const jobElements = data.EmploymentHistory.map((job) => (
            <div key={job.companyName}>
                <Job job={job} />
            </div>
        ));
        return (
            <div className={styles.Resume}>
                {jobElements}
            </div>
        )
    }

    return (
        <div className={styles.Error}>
            <div>Oops, something went wrong.  Try refreshing the page.</div>
        </div>
    );
};

export default Resume;
