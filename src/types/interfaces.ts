import { AboutPage, ContactPage, PortfolioPage, PrivacyPolicyPage, ResumePage, SkillsPage } from "./pages";

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

export interface ResumePageProps {
    data: ResumePage
}

export interface PrivacyPolicyPageProps {
    data: PrivacyPolicyPage
}

export interface PortfolioPageProps {
    data: PortfolioPage
}