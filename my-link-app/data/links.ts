import {
    IconBrandInstagram,
    IconBrandYoutube,
    IconArticle,
    IconBrandGithub,
    IconUser,
    type Icon,
} from "@tabler/icons-react";

export type LinkItem = {
    id: string;
    title: string;
    url: string;
    icon?: Icon;
};

export const dummyLinks: LinkItem[] = [
    {
        id: "link-1",
        title: "Instagram",
        url: "https://instagram.com",
        icon: IconBrandInstagram,
    },
    {
        id: "link-2",
        title: "YouTube",
        url: "https://youtube.com",
        icon: IconBrandYoutube,
    },
    {
        id: "link-3",
        title: "Blog",
        url: "https://blog.example.com",
        icon: IconArticle,
    },
    {
        id: "link-4",
        title: "GitHub",
        url: "https://github.com",
        icon: IconBrandGithub,
    },
    {
        id: "link-5",
        title: "Portfolio",
        url: "https://portfolio.example.com",
        icon: IconUser,
    },
];
