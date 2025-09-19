import * as types from './types';

export type AboutPage = {
    ProfileImage?: types.ImageProps;
    PageInfo: types.PageInfo;
    PageData: types.SkillsTechnologies;
} | null;

export type SkillsPage = {
    Category: any;
} | null;

export type ContactPage = {
    ProfileImage?: types.ImageProps;
    PageInfo: types.PageInfo;
    PageData: types.SkillsTechnologies;
} | null;

export type ResumePage = {
    PageInfo: types.PageInfo;
    EmploymentHistory?: types.EmploymentHistory;
} | null;

export type PrivacyPolicyPage = {
    PageInfo: types.PageInfo;
    PageData: types.SkillsTechnologies;
} | null;

export type PortfolioPage = {
    PageInfo: types.PageInfo;
    Projects: types.Project[];
} | null;