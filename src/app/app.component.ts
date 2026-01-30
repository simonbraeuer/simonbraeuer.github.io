import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Language = 'de' | 'en' | 'es' | 'af' | 'la' | 'tlh';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Simon Bräuer - Software Developer';
  currentLanguage = signal<Language>('de');
  menuOpen = signal(false);

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
    skills: {
      de: 'Fähigkeiten',
      en: 'Skills',
      es: 'Habilidades',
      af: 'Vaardighede',
      la: 'Artes',
      tlh: 'QaPla\''
    },
    portfolio: {
      de: 'Portfolio',
      en: 'Portfolio',
      es: 'Portafolio',
      af: 'Portefeulje',
      la: 'Portfolio',
      tlh: 'wa\'DIch'
    },
    contact: {
      de: 'Kontakt',
      en: 'Contact',
      es: 'Contacto',
      af: 'Kontak',
      la: 'Contactus',
      tlh: 'ngoQ'
    },
    imprint: {
      de: 'Impressum',
      en: 'Imprint',
      es: 'Aviso Legal',
      af: 'Kopiereg',
      la: 'Notitia',
      tlh: 'mIw'
    },
    downloadResume: {
      de: 'Lebenslauf herunterladen',
      en: 'Download Resume',
      es: 'Descargar CV',
      af: 'Laai CV af',
      la: 'Curriculum vitae',
      tlh: 'puq yIjatlh'
    }
  };

  heroTexts: Translations = {
    title: {
      de: 'Fullstack Software Entwickler',
      en: 'Fullstack Software Engineer',
      es: 'Ingeniero de Software Fullstack',
      af: 'Volledige-stapel Sagteware-ingenieur',
      la: 'Artifex Programmatis Plenus',
      tlh: 'Puq wa\'DIch QaPla\''
    },
    subtitle: {
      de: 'Spezialisiert auf moderne Webanwendungen und Softwarearchitektur',
      en: 'Specialized in Modern Web Applications and Software Architecture',
      es: 'Especializado en Aplicaciones Web Modernas y Arquitectura de Software',
      af: 'Gespesialiseer in Moderne Webaplikasies en Sagteware-argitektuur',
      la: 'Peritissimus in Applicationibus Retialibus Modernae et Architecturae Programmatis',
      tlh: 'wa\'DIch qapla\' jatlhbe\''
    },
    description: {
      de: 'Ich entwickle robuste, skalierbare Webanwendungen mit Angular und TypeScript. Mit Erfahrung in Fullstack-Entwicklung biete ich durchdachte Lösungen für komplexe technische Anforderungen.',
      en: 'I develop robust, scalable web applications using Angular and TypeScript. With fullstack development expertise, I deliver well-architected solutions for complex technical requirements.',
      es: 'Desarrollo aplicaciones web robustas y escalables usando Angular y TypeScript. Con experiencia en desarrollo fullstack, entrego soluciones bien arquitectadas para requisitos técnicos complejos.',
      af: 'Ek ontwikkel robuuste, skaalbare webaplikasies wat Angular en TypeScript gebruik. Met fullstack-ontwikkelingservaring lewer ek goed-gearchitektuurde oplossings vir komplekse tegnieke vereistes.',
      la: 'Applicationes retiales robustas et scalabiles creo cum Angular et TypeScript. Cum expertisia programmatis plenus, solutiones bene architectae praebeo.',
      tlh: 'Software Qo\'noS potlh yIQaPla\''
    }
  };

  changeLanguage(lang: Language) {
    this.currentLanguage.set(lang);
  }

  onLanguageChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as Language;
    this.changeLanguage(value);
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Simon_Braeuer_Resume.pdf';
    link.download = 'Simon_Braeuer_Resume.pdf';
    link.click();
  }
}
