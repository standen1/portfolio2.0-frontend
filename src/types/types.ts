export type ImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type PageInfo = {
    title: string;
    description: string;
    featuredImage: ImageProps;
}

export type SocialLink = {
    linkURL: string;
    icon: ImageProps;
}
export type FreelanceLink = {
    calloutText: string;
    linkText: string;
    linkURL: string;
}

export type SkillsTechnologies = {
    title: string;
    content: any;
}

export type Project = {
    name: string;
    websiteURL: string;
    technologies: SkillsTechnologies[];
    description: any;
    featuredImage: ImageProps;
}

export type Job = {
    companyName: string;
    jobTitle: string;
    startDate: Date | string;
    endDate: string;
    description: any;
    websiteURL: string;
    responsibilities: any;
    projects: Project[];
    featuredImage: ImageProps;
}