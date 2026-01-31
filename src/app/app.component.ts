import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

type Language = 'de' | 'en' | 'es' | 'af' | 'la' | 'tlh';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Simon Bräuer - Software Developer';
  currentLanguage = signal<Language>('de');
  menuOpen = signal(false);
  currentSection = signal<string>('about');
  private activeComponent: { currentLanguage?: Language } | null = null;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const section = event.url.split('/').pop() || 'about';
        this.currentSection.set(section);
        this.closeMenu();
      });

    effect(() => {
      const language = this.currentLanguage();
      if (this.activeComponent && 'currentLanguage' in this.activeComponent) {
        this.activeComponent.currentLanguage = language;
      }
    });
  }

  translations: Translations = {
    header: {
      de: 'Simon Bräuer',
      en: 'Simon Bräuer',
      es: 'Simon Bräuer',
      af: 'Simon Bräuer',
      la: 'Simon Bräuer',
      tlh: 'Simon Bräuer'
    },
    about: {
      de: 'Über mich',
      en: 'About',
      es: 'Acerca de',
      af: 'Oor my',
      la: 'De me',
      tlh: 'jIH\'a\''
    },
    portfolio: {
      de: 'Portfolio',
      en: 'Portfolio',
      es: 'Portafolio',
      af: 'Portefeulje',
      la: 'Portfolio',
      tlh: 'wa\'DIch'
    }
  };

  changeLanguage(event: Event) {
    const value = (event.target as HTMLSelectElement).value as Language;
    this.currentLanguage.set(value);
    this.closeMenu()
  }

  navigate(section: string) {
    this.router.navigate([section]);
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  onActivate(component: { currentLanguage?: Language }) {
    this.activeComponent = component;
    if (component && 'currentLanguage' in component) {
      component.currentLanguage = this.currentLanguage();
    }
  }

  getLanguageFlag(language: Language): string {
    const flags: Record<Language, string> = {
      de: '🇩🇪',
      en: '🇬🇧',
      es: '🇪🇸',
      af: '🇿🇦',
      la: '🇻🇦',
      tlh: '⚔️'
    };
    return flags[language];
  }
}
