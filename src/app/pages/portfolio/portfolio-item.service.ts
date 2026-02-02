import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolio.models';
import portfolioItems from './portfolio-items.json';

// Initialize the portfolio items from the imported JSON data
const PORTFOLIO_ITEMS: readonly PortfolioItem[] = portfolioItems as readonly PortfolioItem[];

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