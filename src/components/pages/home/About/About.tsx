import React from "react";
import Markdown from "markdown-to-jsx";
import { AboutPageProps } from "@/types/interfaces";
import styles from "./About.module.css";

import FreelanceLink from "@/components/FreelanceLink/FreelanceLink";

const About: React.FC<AboutPageProps> = ({ data }) => {
    const profileImage = () => {
        if (data.ProfileImage) {
            return(
                <img src={data.ProfileImage?.src} alt={data.ProfileImage?.alt} width={data.ProfileImage?.width} height={data.ProfileImage?.height} />
            );
        }
    };


    return (
        <div className={styles.About}>
            <div className={styles.ProfileImage}>
                {profileImage()}
            </div>
            <div className={styles.AboutContentText}>
                <h2>{data.PageData.Title}</h2>
                <div className={styles.AboutTextWrapper}>
                    <Markdown>
                        {data.PageData.Content}
                    </Markdown>
                    <FreelanceLink />
                </div>
            </div>
        </div>
    );
};

export default About;