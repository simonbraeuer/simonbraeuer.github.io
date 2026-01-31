import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolio.models';

const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
    {
        "id": "project-1",
        "title": {
            "de": "Projekt Eins",
            "en": "Project One",
            "es": "Proyecto Uno",
            "af": "Projek Een",
            "la": "Projectum Unum",
            "tlh": "wa' mIw'"
        },
        "description": {
            "de": "Kurze Beschreibung von Projekt Eins.",
            "en": "Short description of Project One.",
            "es": "Breve descripción del Proyecto Uno.",
            "af": "Kort beskrywing van Projek Een.",
            "la": "Brevis descriptio Projecti Unus.",
            "tlh": "qechvam vIghro'"
        },
        "imageUrl": "/assets/portfolio/project-1.png",
        "demoUrl": "https://example.com/project-1",
        "repoUrl": "https://github.com/example/project-1",
        "tags": ["angular", "spa"],
        "year": 2024
    },
    {
        "id": "project-2",
        "title": {
            "de": "Portfolio Zwei",
            "en": "Portfolio Two",
            "es": "Portfolio Dos",
            "af": "Portefeulje Twee",
            "la": "Portfolio Duo",
            "tlh": "cha' mIw'"
        },
        "description": {
            "de": "Beschreibung von Portfolio Zwei.",
            "en": "Description for Portfolio Two.",
            "es": "Descripción del Portfolio Dos.",
            "af": "Beskrywing van Portefeulje Twee.",
            "la": "Descriptio Portfolio Duo.",
            "tlh": "tlhIngan Hol pat"
        },
        "imageUrl": "/assets/portfolio/project-2.png",
        "demoUrl": "https://example.com/project-2",
        "repoUrl": "https://github.com/example/project-2",
        "tags": ["design", "scss"],
        "year": 2023
    }
];

@Injectable({
    providedIn: 'root'
})
export class PortfolioItemService {
    getAll(): readonly PortfolioItem[] {
        return PORTFOLIO_ITEMS;
    }

    getById(id: string): PortfolioItem | undefined {
        return PORTFOLIO_ITEMS.find((p) => p.id === id);
    }

    searchByTag(tag: string): readonly PortfolioItem[] {
        return PORTFOLIO_ITEMS.filter((p) => p.tags?.includes(tag) ?? false);
    }

    // Async helpers if consumers expect promises
    async getAllAsync(): Promise<readonly PortfolioItem[]> {
        return Promise.resolve(this.getAll());
    }

    async getByIdAsync(id: string): Promise<PortfolioItem | undefined> {
        return Promise.resolve(this.getById(id));
    }
}