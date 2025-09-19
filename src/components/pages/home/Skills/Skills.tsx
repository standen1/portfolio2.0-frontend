import React from "react";
import Markdown from "markdown-to-jsx";
import { SkillsPageProps } from "@/types/interfaces";
import styles from "./Skills.module.css";

const Skills: React.FC<SkillsPageProps> = ({ data }) => {
    if (data) {
        const skillsContent = data.map((skill: any) => {
            return (
                <div className={styles.Skill} key={skill.Title}>
                    <h3>{skill.Title}</h3>
                    <Markdown>{skill.Content}</Markdown>
                </div>
            );
        })
        return (
            <div className={styles.Skills}>
                {skillsContent}
            </div>
        );
    } return (
        <div className={styles.Error}>Oops, something went wrong!  Try refreshing the page.</div>
    );
};

export default Skills;