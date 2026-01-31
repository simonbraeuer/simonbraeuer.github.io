import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import aboutTranslations from './about.translations.json';
type Language = 'de' | 'en' | 'es' | 'af' | 'la' | 'tlh';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-me">
      <h1>{{ translations['title'][currentLanguage] }}</h1>
      <p><strong>{{ translations['subtitle'][currentLanguage] }}</strong></p>
      <p>{{ translations['description'][currentLanguage] }}</p>
      <div class="cta">
        <button class="btn-primary" (click)="downloadResume()">{{ translations['downloadResume'][currentLanguage] }}</button>
      </div>
    </section>

    <section id="skills">
      <h2>{{ translations['skills'][currentLanguage] }}</h2>
      <div class="skills-container">
        <div class="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>Angular 21</li>
            <li>TypeScript</li>
            <li>SCSS/CSS</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Java</li>
            <li>Database Design</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Cloud & DevOps</h3>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>OpenShift</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 4rem 2rem;
      max-width: 1000px;
      margin: auto;
      scroll-margin-top: 70px;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

      &:first-of-type {
        padding-top: 8rem;
      }

      h1, h2, h3 {
        color: #2f3e46;
        margin-bottom: 1rem;
      }

      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-size: 2rem;
      }

      p {
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      ul {
        padding-left: 1.2rem;
      }
    }

    .about-me {
      p {
        font-size: 1.1rem;
      }
    }

    .cta {
      background: #cad2c5;
      border-radius: 14px;
      padding: 2rem;
      margin-top: 2.5rem;
    }

    .btn-primary {
      padding: 0.8rem 1.6rem;
      background: #52796f;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #2f3e46;
      }
    }

    .skills-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;

      .skill-card {
        background: #cad2c5;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

        h3 {
          margin-top: 0;
          color: #2f3e46;
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            padding: 0.5rem 0;
            padding-left: 1rem;

            &:before {
              content: "✓ ";
              color: #52796f;
              font-weight: bold;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  `]
})
export class AboutComponent {
  @Input() currentLanguage: Language = 'de';

  translations: Translations = aboutTranslations as unknown as Translations;

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/cv_simon_braeuer_deutsch.pdf';
    link.download = 'cv_simon_braeuer_deutsch.pdf';
    link.click();
  }
}
