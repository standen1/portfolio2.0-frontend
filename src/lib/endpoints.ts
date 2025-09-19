//Home page endpoints
export const ABOUT_ENDPOINT: string = "/about-page?populate=*";
export const SKILLS_ENDPOINT: string = "/skills-page?populate=*";

//Contact page endpoint
export const CONTACT_ENDPOINT: string = "/contact-page?populate=*";

//Resume page endpoint
export const RESUME_ENDPOINT: string = "/resume?populate[0]=PageInfo&populate[1]=FeaturedImage";

export const JOBS_ENDPOINT: string = "/resume?populate=Employer.JobResponsibility";