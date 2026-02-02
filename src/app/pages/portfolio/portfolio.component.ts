import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { PortfolioItemComponent } from './portfolio-item.component';
import { PortfolioItemService } from './portfolio-item.service';
import { Language, PortfolioItem } from './portfolio.models';
import portfolioTranslations from './portfolio.translations.json';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  template: `
    <section id="portfolio">
      <h1>{{ translations["portfolio"][currentLanguage] }}</h1>
      <div class="portfolio-container">
        <app-portfolio-item
          *ngFor="let item of items; trackBy: trackById"
          [item]="item"
          [currentLanguage]="currentLanguage"
        ></app-portfolio-item>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 4rem 2rem;
      padding-top: 8rem;
      max-width: 1000px;
      margin: auto;
      scroll-margin-top: 70px;

      h2 {
        color: #2f3e46;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }

    .portfolio-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
  `]
})
export class PortfolioComponent {
  @Input() currentLanguage: Language = 'de';
  private readonly portfolioItemService = inject(PortfolioItemService);
  translations = portfolioTranslations;

  items = this.portfolioItemService.getAll();
  
  trackById(index: number, item: PortfolioItem): string {
    return item.id;
  }
}
