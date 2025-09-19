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
} | null;

export type Project = {
    name: string | undefined;
    websiteURL: string | undefined;
    technologies: string[] | undefined;
    description: any;
    featuredImage?: ImageProps;
}

export type Responsibility = {
    name: string | undefined;
    description: any;
}

export type Job = {
    companyName: string | undefined;
    jobTitle: string | undefined;
    startDate: string | undefined;
    currentlyEmployed: boolean | undefined;
    endDate: string | undefined;
    websiteURL: string | undefined;
    responsibilities: Responsibility[] | undefined;
}

export type Endpoint = string;

export type NavLink = {
    linkText: string | undefined;
    linkURL: string | undefined;
}

export type EmploymentHistory = Job[] | null;