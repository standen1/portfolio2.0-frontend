import React from "react";
import styles from './FooterContact.module.css'
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";

const FooterContact = () => {
    return (
        <div className={styles.FooterContact}>
            <h2>Let’s Keep In Touch</h2>
            <p>Give me a follow or send me a message on any of the following platforms.</p>
            <SocialMediaLinks />
        </div>
    );
}

export default FooterContact;