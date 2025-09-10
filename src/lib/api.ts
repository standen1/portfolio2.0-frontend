import { Endpoint } from "@/types/types";
import { AboutPage } from "@/types/pages";

import { ABOUT_ENDPOINT } from '@/lib/endpoints';


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

//Call to Strapi App for About Page using the get function above.  Returns AboutPage data type
export async function getAboutPage(): Promise<any> {
    try {
        const response = await get(ABOUT_ENDPOINT);
        const data = JSON.parse(response).data;

        const pageData: AboutPage = {
            PageInfo: data.PageInfo,
            PageData: data.PageData
        }
        
        return pageData;
    } catch (error) {
        return "Something Went Wrong";
    }
} 