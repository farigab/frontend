# Technology Stack

## Framework & Core

- **Angular 21.1** - Latest version with standalone components
- **TypeScript 5.9** - Strict mode enabled
- **Vite** - Fast build tool and dev server
- **RxJS 7.8** - Reactive programming

## UI Libraries

- **PrimeNG 21** - Component library (Table, Card, Dialog, Toast, Stepper, etc.)
- **PrimeIcons 7** - Icon library
- **@primeuix/themes** - Theming system with custom Aura preset
- **Chart.js 4.4** - Data visualization

## Additional Libraries

- **marked 17** - Markdown parsing
- **DOMPurify 3** - XSS protection for markdown
- **jwt-decode 4** - JWT token handling

## Testing

- **Vitest 4** - Unit testing framework
- **jsdom 27** - DOM testing environment

## Build & Deploy

- **Angular CLI 21** - Project tooling
- **Wrangler** - Cloudflare Pages deployment
- **Service Worker** - PWA support via @angular/pwa

## Common Commands

```bash
# Development
npm start                 # Start dev server (http://localhost:4200)
npm run watch            # Build with watch mode

# Building
npm run build            # Development build
npm run build:prod       # Production build with optimizations

# Testing
npm test                 # Run unit tests
npm run test:watch       # Run tests in watch mode

# Linting
npm run lint             # Run ESLint

# Deployment
npm run deploy:preview   # Build and deploy to Cloudflare Pages
npm run cf:dev          # Run Cloudflare Pages locally
```

## Environment Configuration

Environment files in `src/environments/`:
- `environment.ts` - Development (apiUrl: http://localhost:8080/api)
- `environment.prod.ts` - Production (configure for deployed backend)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
