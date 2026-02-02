import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language, PortfolioItem, Translations } from './portfolio.models';
import portfolioTranslations from './portfolio.translations.json';
@Component({
    selector: 'app-portfolio-item',
    standalone: true,
    imports: [CommonModule],
    template: `
        <article class="portfolio-item">
            <figure *ngIf="item.imageUrl" class="thumb">
                <img [src]="item.imageUrl" [alt]="title" />
            </figure>

            <header class="meta">
                <h3 class="title">{{ title }}</h3>
                <time *ngIf="item.year" class="year">{{ translations.year[currentLanguage] }}: {{ item.year }}</time>
            </header>

            <p class="description">{{ description }}</p>

            <ul class="tags" *ngIf="(item.tags ?? []).length">
                <li *ngFor="let t of item.tags" class="tag">{{ t }}</li>
            </ul>

            <nav class="actions">
                <a
                    *ngIf="item.projectUrl"
                    [href]="item.projectUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn primary"
                >
                    {{ translations.openProject[currentLanguage] }}
                </a>

                <a
                    *ngIf="item.repoUrl"
                    [href]="item.repoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn"
                >
                    {{ translations.viewRepo[currentLanguage] }}
                </a>
            </nav>
        </article>
    `,
    styles: [
        `
            :host { display: block; }
            .portfolio-item {
                border: 1px solid rgba(0,0,0,0.08);
                border-radius: 8px;
                padding: 1rem;
                background: var(--card-bg, #fff);
            }
            .thumb { margin: 0 0 0.75rem 0; display:block; }
            .thumb img { width:100%; height:auto; border-radius:6px; display:block; }
            .meta { display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.5rem; }
            .title { margin:0; font-size:1.05rem; }
            .year { font-size:0.85rem; color:rgba(0,0,0,0.6); }
            .description { margin:0 0 0.75rem 0; color:rgba(0,0,0,0.8); }
            .tags { list-style:none; padding:0; margin:0 0 0.75rem 0; display:flex; gap:0.5rem; flex-wrap:wrap; }
            .tag { background:rgba(0,0,0,0.06); padding:0.25rem 0.5rem; border-radius:4px; font-size:0.8rem; }
            .actions { display:flex; gap:0.5rem; }
            .btn { text-decoration:none; padding:0.4rem 0.6rem; border-radius:4px; font-size:0.9rem; color:inherit; border:1px solid rgba(0,0,0,0.08); }
            .btn.primary { background:var(--accent,#0066ff); color:#fff; border-color:transparent; }
        `,
    ],
})
export class PortfolioItemComponent {
    @Input({ required: true }) item!: PortfolioItem;
    @Input({ required: true }) currentLanguage!: Language;

    translations: Translations = portfolioTranslations;

    get title(): string {
        return this.item?.title?.[this.currentLanguage] ?? '';
    }

    get description(): string {
        return this.item?.description?.[this.currentLanguage] ?? '';
    }
}