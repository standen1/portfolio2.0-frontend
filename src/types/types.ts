export type ImageProps = {
    src: string | undefined;
    alt: string | undefined;
    width: string | undefined;
    height: string | undefined;
} | null;

export type PageInfo = {
    Title: string | undefined;
    Description: string | undefined;
    featuredImage: ImageProps;
}

export type SocialLink = {
    linkURL: string | undefined;
    icon: ImageProps;
}
export type FreelanceLink = {
    calloutText: string | undefined;
    linkText: string | undefined;
    linkURL: string | undefined;
}

export type SkillsTechnologies = {
    Title: string | undefined;
    Content: any;
}

export type Project = {
    name: string | undefined;
    websiteURL: string | undefined;
    technologies: string[] | undefined;
    description: any;
    featuredImage?: ImageProps;
}

export type Job = {
    companyName: string | undefined;
    jobTitle: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    description: any;
    websiteURL: string | undefined;
    responsibilities: any;
    projects: Project[];
    featuredImage: ImageProps;
}

export type Endpoint = string;

export type NavLink = {
    linkText: string | undefined;
    linkURL: string | undefined;
}