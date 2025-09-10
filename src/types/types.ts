export type ImageProps = {
    src: string;
    alt: string;
    width: string;
    height: string;
};

export type PageInfo = {
    Title: string;
    Description: string;
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
    Title: string;
    Content: any;
}

export type Project = {
    name: string;
    websiteURL: string;
    technologies: string[];
    description: any;
    featuredImage?: ImageProps;
}

export type Job = {
    companyName: string;
    jobTitle: string;
    startDate: string;
    endDate: string | null;
    description: any;
    websiteURL: string;
    responsibilities: any;
    projects: Project[];
    featuredImage: ImageProps;
}

export type Endpoint = String;