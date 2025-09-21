//Home page endpoints
export const ABOUT_ENDPOINT: string = "/about-page?populate=*";
export const SKILLS_ENDPOINT: string = "/skills-page?populate=*";

//Contact page endpoint
export const CONTACT_ENDPOINT: string = "/contact-page?populate=*";

//Resume page endpoint
export const RESUME_ENDPOINT: string = "/resume?populate[0]=PageInfo&populate[1]=FeaturedImage";

export const JOBS_ENDPOINT: string = "/resume?populate=Employer.JobResponsibility";

export const PRIVACY_POLICY_ENDPOINT: string = "/privacy-policy?populate=*";

export const PORTFOLIO_ENDPOINT: string = "/portfolio?populate=*";
export const PROJECTS_ENDPOINT: string = "/portfolio?populate[0]=Project&populate[1]=Project.ThumbnailImage&populate[2]=Project.ProjectInfo";