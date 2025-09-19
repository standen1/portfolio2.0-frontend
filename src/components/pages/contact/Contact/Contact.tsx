import React from "react";
import Markdown from "markdown-to-jsx";
import { ContactPageProps } from "@/types/interfaces";
import styles from "./Contact.module.css";

import FreelanceLink from "@/components/FreelanceLink/FreelanceLink";
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";

const Contact: React.FC<ContactPageProps> = ({ data }) => {
    if (data) {
        const profileImage = () => {
            if (data.ProfileImage) {
                return(
                    <img src={data.ProfileImage.src} alt={data.ProfileImage?.alt} width={data.ProfileImage?.width} height={data.ProfileImage?.height} />
                );
            }
            return (<></>);
        };
        if (data.PageData) {
        return (
            <div className={styles.Contact}>
                <div className={styles.ContactContentText}>
                    <h2>{data.PageData.Title || ""}</h2>
                    <div className={styles.ContactTextWrapper}>
                        <Markdown>
                            {typeof data.PageData.Content === "string" ? data.PageData.Content : ""}
                        </Markdown>
                        <div className={styles.SocialContact}>
                            <p>Give me a follow or send me a message on any of the following platforms.</p>
                            <SocialMediaLinks />
                        </div>
                        <FreelanceLink />
                    </div>
                </div>
                <div className={styles.ProfileImage}>
                    {profileImage()}
                </div>
            </div>
        );
    }
    } else {
        return (
            <div className={styles.Error}>Oops, something went wrong!  Try refreshing the page.</div>
        );
    }
};

export default Contact;