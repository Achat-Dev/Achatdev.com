type Position = {
    x: number;
    y: number;
};

type ImageProps = {
    src: string;
    alt: string;
};

type Project = {
    slug: string;
    name: string;
    description: string;
    images: ImageProps[];
};

type SocialMediaProps = {
    url: string;
    name: string;
}
