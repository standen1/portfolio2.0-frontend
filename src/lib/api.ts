import { Endpoint } from "@/types/types";
import { AboutPage, SkillsPage, ContactPage, ResumePage, PrivacyPolicyPage, PortfolioPage } from "@/types/pages";

import { ABOUT_ENDPOINT, SKILLS_ENDPOINT, CONTACT_ENDPOINT, RESUME_ENDPOINT, JOBS_ENDPOINT, PORTFOLIO_ENDPOINT, PROJECTS_ENDPOINT } from '@/lib/endpoints';


//Main API Call to Strapi App Backend
export async function get(endpoint: Endpoint) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.NEXT_FRONTEND_STRAPI_KEY}`);

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch(`${process.env.STRAPI_URL}${endpoint}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.text();
        return result;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error so the caller can handle it
    }
}


//About Page API Call
//Returns data: AboutPage
export async function getAboutPage(): Promise<AboutPage | string> {
    try {
        const response = await get(ABOUT_ENDPOINT);
        const data = JSON.parse(response).data;
        //console.log(data)

        const pageData: AboutPage = data ? {
            ProfileImage: data.ProfileImage ? {
                src: data.ProfileImage.ImageURL,
                alt: data.ProfileImage.AltText,
                width: data.ProfileImage.Width,
                height: data.ProfileImage.Height
            }: null,
            PageInfo: {
                Title: data.PageInfo.PageTitle,
                Description: data.PageInfo.PageExcerpt,
                featuredImage: data.FeaturedImage ? {
                    src: data.FeaturedImage.ImageURL,
                    alt: data.FeaturedImage.AltText,
                    width: data.FeaturedImage.Width,
                    height: data.FeaturedImage.Height
                } : null
            },
            PageData: data.PageData ? data.PageData : null
        } : null
        
        return pageData;
    } catch (error) {
        return "Something Went Wrong";
    }
} 

//Skills Page API Call
//Returns data: SkillsPage
export async function getSkillsPage(): Promise<SkillsPage | string> {
    try {
        const response = await get(SKILLS_ENDPOINT);
        const data = JSON.parse(response).data;

        const pageData: SkillsPage = {
            Category: data ? data.Category: null
        }

        
        return pageData.Category;
    } catch (error) {
        return "Something Went Wrong";
    }
} 

//About Page API Call
//Returns data: AboutPage
export async function getContactPage(): Promise<ContactPage | string> {
    try {
        const response = await get(CONTACT_ENDPOINT);
        const data = JSON.parse(response).data;

        const pageData: ContactPage = data ? {
            ProfileImage: data.ProfileImage ? {
                src: data.ProfileImage.ImageURL,
                alt: data.ProfileImage.AltText,
                width: data.ProfileImage.Width,
                height: data.ProfileImage.Height
            }: null,
            PageInfo: {
                Title: data.PageInfo.PageTitle,
                Description: data.PageInfo.PageExcerpt,
                featuredImage: data.FeaturedImage ? {
                    src: data.FeaturedImage.ImageURL,
                    alt: data.FeaturedImage.AltText,
                    width: data.FeaturedImage.Width,
                    height: data.FeaturedImage.Height
                } : null
            },
            PageData: data.PageContent[0] ? {
                Title: data.PageContent[0].Title ? data.PageContent[0].Title : null,
                Content: data.PageContent[0].Content ? data.PageContent[0].Content : null
            } : null
        } : null;
        
        return pageData;
    } catch (error) {
        return "Something Went Wrong";
    }
} 

//Resume Page API Call
//Returns data: string (URL to resume)
export async function getResumePage(): Promise<ResumePage | string> {
    try {
        const pageResponse = await get(RESUME_ENDPOINT);
        const pageData = JSON.parse(pageResponse).data;
        
        const jobsResponse = await get(JOBS_ENDPOINT);
        const jobsData = JSON.parse(jobsResponse).data;

        const resumeData: ResumePage = pageData ? {
            PageInfo: {
                Title: pageData.PageInfo.PageTitle,
                Description: pageData.PageInfo.PageExcerpt,
                featuredImage: pageData.FeaturedImage ? {
                    src: pageData.FeaturedImage.ImageURL,
                    alt: pageData.FeaturedImage.AltText,
                    width: pageData.FeaturedImage.Width,
                    height: pageData.FeaturedImage.Height
                } : null
            },
            EmploymentHistory: jobsData.Employer ? jobsData.Employer.map((employer: any) => {
                return {
                    companyName: employer.CompanyName,
                    jobTitle: employer.Title,
                    startDate: employer.StartDate,
                    currentlyEmployed: employer.CurrentlyEmployed,
                    endDate: employer.EndDate ? employer.EndDate : null,
                    websiteURL: employer.EmployerWebsite ? employer.EmployerWebsite : null,
                    responsibilities: employer.JobResponsibility ? employer.JobResponsibility.map((responsibility: any) => {
                        return {
                            name: responsibility.ResponsibilityTitle,
                            description: responsibility.Description
                        }
                    }) : null
                }
            }) : null
        } : null;

        return resumeData;
    } catch (error) {
        return "Something Went Wrong";
    }
}

export async function getPrivacyPolicyPage(): Promise<PrivacyPolicyPage | string> {
    try {
        const response = await get("/privacy-policy?populate=*");
        const data = JSON.parse(response).data;
        //console.log(data)
        const privacyPolicyData: PrivacyPolicyPage = data ? {
            PageInfo: {
                Title: data.PageInfo.PageTitle,
                Description: data.PageInfo.PageExcerpt,
                featuredImage: data.FeaturedImage ? {
                    src: data.FeaturedImage.ImageURL,
                    alt: data.FeaturedImage.AltText,
                    width: data.FeaturedImage.Width,
                    height: data.FeaturedImage.Height
                } : null
            },
            PageData: data.PrivacyPolicyPageContent ? {
                Title: data.PrivacyPolicyPageContent.Title ? data.PrivacyPolicyPageContent.Title : null,
                Content: data.PrivacyPolicyPageContent.Content ? data.PrivacyPolicyPageContent.Content : null
            } : null
        } : null;
        
        return privacyPolicyData;
    } catch (error) {
        return "Something Went Wrong";
    }
}

export async function getPortfolioPage(): Promise<PortfolioPage | string> {
    try {
        const pageResponse = await get(PORTFOLIO_ENDPOINT);
        const pageData = JSON.parse(pageResponse).data;

        const projectsResponse = await get(PROJECTS_ENDPOINT);
        const projects = JSON.parse(projectsResponse).data.Project;
        
        const portfolioData: PortfolioPage = pageData ? {
            PageInfo: {
                Title: pageData.PageInfo.PageTitle,
                Description: pageData.PageInfo.PageExcerpt,
                featuredImage: pageData.FeaturedImage ? {
                    src: pageData.FeaturedImage.ImageURL,
                    alt: pageData.FeaturedImage.AltText,
                    width: pageData.FeaturedImage.Width,
                    height: pageData.FeaturedImage.Height
                } : null
            },
            Projects: projects ? projects.map((project: any) => {
                return {
                    name: project.ProjectInfo ? project.ProjectInfo.ProjectName : null,
                    websiteURL: project.ProjectInfo ? project.ProjectInfo.WebsiteURL : null,
                    description: project.ProjectInfo ? project.ProjectInfo.Description : null,
                    featuredImage: project.ThumbnailImage ? {
                        src: project.ThumbnailImage.ImageURL,
                        alt: project.ThumbnailImage.AltText,
                        width: project.ThumbnailImage.Width,
                        height: project.ThumbnailImage.Height
                    } : null,
                }
            }) : null
        } : null;

        return portfolioData;
    } catch (error) {
        return "Something Went Wrong";
    }
}