import { AboutPage, ContactPage, SkillsPage } from "./pages";

export interface AboutPageProps {
    data: AboutPage;
}

export interface SkillsPageProps {
    data: any;
}

export interface HomePageProps {
    data: {
        aboutPage: AboutPage,
        skillsPage: SkillsPage
    }
}

export interface ContactPageProps {
    data: ContactPage
}