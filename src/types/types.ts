export type ImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type PageInfo = {
    title: string;
    description: string;
    featuredImage: ImageProps;
}