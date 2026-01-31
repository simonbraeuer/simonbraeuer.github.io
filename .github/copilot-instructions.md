# AI Coding Agent Instructions for Simon Bräuer Portfolio

## Project Overview
Personal portfolio website built with **Angular 21** standalone components. Single-page application (SPA) with routing, responsive design, and multi-language support (DE, EN, ES, AF, LA, Klingon). Deployed to GitHub Pages.

## Architecture Patterns

### Standalone Components (Angular 21)
All components use `standalone: true` with explicit imports. Do NOT use `NgModules`. Example:
```typescript
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrl: './about.component.scss'
})
export class AboutComponent { }
```

### Routing Structure
- Root: `AppComponent` (header, nav, footer)
- Child routes defined in [src/app/app.routes.ts](src/app/app.routes.ts): `/about`, `/portfolio`
- Default route redirects to `/about`
- Navigation tracked via `NavigationEnd` events to sync UI state

### Multi-Language Implementation
Language is managed as `signal<Language>` in `AppComponent`. Each component defines local `Translations` interface with key-language mappings:
```typescript
translations: Translations = {
  about: { de: 'Über mich', en: 'About', es: 'Acerca de', ... }
}
```
Access via: `{{ translations['key'][currentLanguage()] }}`

**Pass language to child components via:**
- Input properties (preferred)
- Or inject via parent context if needed
- NOT through services (violates isolation pattern)

### Signals for State Management
Components use Angular's `signal()` instead of RxJS observables for local state:
- `currentLanguage = signal<Language>('de')`
- `menuOpen = signal(false)`
- Updated via `.set()` or `.update()`
- No dedicated state management service; keep state in components

## Critical File References
- **Routes:** [src/app/app.routes.ts](src/app/app.routes.ts)
- **Main component:** [src/app/app.component.ts](src/app/app.component.ts#L1-L90) - handles navigation, language, menu state
- **About page:** [src/app/pages/about/about.component.ts](src/app/pages/about/about.component.ts) - skills, hero, resume download
- **Styling:** SCSS only, color palette at [src/app/app.component.scss](src/app/app.component.scss#L3-L6)

## Development Workflow

### Commands
```bash
npm start              # Dev server on http://localhost:4200
npm run build:prod    # Production build (required before deploy)
npm run deploy        # Deploy to GitHub Pages (runs predeploy)
```

### Build & Deployment
- Output directory: `dist/simonbraeuer/`
- GitHub Pages base: `/` (published from gh-pages branch)
- Production build includes size budgets: initial 500kb, component styles 4kb

## Project-Specific Conventions

1. **Component Template Placement:**
   - Inline `template` property for small components (Portfolio, etc.)
   - `templateUrl` for complex components (About with skills grid)
   - Inline `styles` array acceptable for component-scoped styling

2. **CSS/SCSS:**
   - Global styles in [src/styles.scss](src/styles.scss)
   - Component colors defined at top of [app.component.scss](src/app/app.component.scss)
   - Use CSS Grid for responsive layouts (see portfolio grid)

3. **Language Keys Pattern:**
   - Use flat keys in `translations` object (e.g., `'downloadResume'`, `'imprint'`)
   - Supports 6 languages: German, English, Spanish, Afrikaans, Latin, Klingon
   - Never hardcode strings; always use translation object

4. **Mobile Navigation:**
   - Hamburger menu toggled by `menuOpen` signal
   - Menu overlay (`menu-overlay`) prevents scrolling when active
   - Routes automatically close menu on navigation

## Common Tasks

### Add New Route
1. Create standalone component in `src/app/pages/<section>/`
2. Import in [app.routes.ts](src/app/app.routes.ts)
3. Add route object with `path` and `component`
4. Add translation keys and nav link in `AppComponent`

### Update Portfolio Content
Edit inline template in [portfolio.component.ts](src/app/pages/portfolio/portfolio.component.ts). Add items to `.portfolio-container` grid.

### Add Skills
Edit the skills grid in [about.component.ts](src/app/pages/about/about.component.ts) template. Each skill card uses class `skill-card`.

### Modify Resume Download
Resume button in About component calls `downloadResume()` method. Update URL and logic in [about.component.ts](src/app/pages/about/about.component.ts).

## Technologies & Constraints
- **Angular:** 21.0.0 with strict template checking enabled
- **TypeScript:** 5.9.3, target ES2022
- **Styling:** SCSS only, no CSS-in-JS libraries
- **No packages** for animations, state, or HTTP (minimal footprint)
- **GitHub Pages ready:** Includes `gh-pages` npm package for deployment
