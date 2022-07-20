export interface INews {
    title: string;
    link: string;
    keywords: string[] | null;
    creator: string[] | null;
    video_url: string | null;
    description: string;
    content: string | null;
    pubDate: Date,
    expire_at: Date,
    image_url: string | null;
    source_id: string;
    country: string[];
    category: string[];
    language: string;
}

export interface INewsResponseApi {
    status: string,
    totalResults: number;
    results: INews[];
}