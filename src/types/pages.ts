import * as types from './types';

export type AboutPage = {
    ProfileImage?: types.ImageProps;
    PageInfo?: types.PageInfo;
    PageData?: types.SkillsTechnologies;
} | null;

export type SkillsPage = {
    Category: any;
} | null;
