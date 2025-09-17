import { AboutPage, SkillsPage } from "./pages";

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