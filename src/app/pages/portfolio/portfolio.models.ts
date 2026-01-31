export type Language = 'de' | 'en' | 'es' | 'af' | 'la' | 'tlh';

export interface PortfolioItem {
    "id": string;
    "title": Record<Language, string>;
    "description": Record<Language, string>;
    "imageUrl"?: string;
    "projectUrl"?: string;
    "repoUrl"?: string;
    "demoUrl"?: string;
    "year"?: number;
    "tags"?: string[];
}

export interface Translations {
    "openProject": Record<Language, string>;
    "viewRepo": Record<Language, string>;
    "year": Record<Language, string>;
}
