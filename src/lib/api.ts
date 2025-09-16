import { Endpoint } from "@/types/types";
import { AboutPage, SkillsPage } from "@/types/pages";

import { ABOUT_ENDPOINT, SKILLS_ENDPOINT } from '@/lib/endpoints';


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
export async function getAboutPage(): Promise<any> {
    try {
        const response = await get(ABOUT_ENDPOINT);
        const data = JSON.parse(response).data;
        //console.log(data)

        const pageData: AboutPage = {
            ProfileImage: {
                src: data.ProfileImage.ImageURL,
                alt: data.ProfileImage.AltText,
                width: data.ProfileImage.Width,
                height: data.ProfileImage.Height
            },
            PageInfo: {
                Title: data.PageInfo.PageTitle,
                Description: data.PageInfo.PageExcerpt,
                featuredImage: data.PageInfo.FeaturedImage
            },
            PageData: data.PageData
        }
        
        return pageData;
    } catch (error) {
        return "Something Went Wrong";
    }
} 

//About Page API Call
//Returns data: AboutPage
export async function getSkillsPage(): Promise<any> {
    try {
        const response = await get(SKILLS_ENDPOINT);
        const data = JSON.parse(response).data;
        //console.log(data)

        const pageData: SkillsPage = {
            Category: data.Category
        }

        // console.log(pageData.Category)
        
        return pageData.Category;
    } catch (error) {
        return "Something Went Wrong";
    }
} 