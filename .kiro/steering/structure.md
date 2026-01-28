# Project Structure

## Root Configuration

```
angular.json          # Angular CLI configuration
tsconfig.json         # TypeScript strict settings
eslint.config.js      # ESLint configuration
package.json          # Dependencies and scripts
vite.config.ts        # Vite build configuration
ngsw-config.json      # Service worker configuration
```

## Source Directory (`src/`)

### Application Core (`src/app/`)

```
app.component.ts      # Root component
app.config.ts         # Application providers and configuration
app.routes.ts         # Route definitions with lazy loading
aura-preset.ts        # Custom PrimeNG theme configuration
polyfills.ts          # Browser polyfills
```

### Components (`src/app/components/`)

Organized by feature:
- `backend-loading/` - Backend health check loading screen
- `github-import/` - 4-step GitHub integration wizard
- `layout/` - Main layout wrapper with header/nav
- `login/` - Authentication pages and OAuth callback

Each component includes:
- `.component.ts` - Component logic
- `.component.html` - Template
- `.component.css` - Scoped styles
- `.facade.ts` (optional) - Presentation logic layer

### Services (`src/app/services/`)

Business logic and API communication:
- `auth.service.ts` - Authentication and user session
- `backend-health.service.ts` - Backend availability checks
- `github-import.service.ts` - GitHub data import
- `logging.service.ts` - Centralized logging
- `notification.service.ts` - Toast notifications
- `report.service.ts` - Report generation and management

### Guards (`src/app/guards/`)

Route protection:
- `auth.guard.ts` - Requires authenticated session
- `backend-health.guard.ts` - Checks backend availability

### Interceptors (`src/app/interceptors/`)

HTTP middleware:
- `auth.interceptor.ts` - Adds credentials to requests
- `error.interceptor.ts` - Global error handling

### Models (`src/app/models/`)

TypeScript interfaces and types:
- `achievement.model.ts` - Achievement data structures
- `report.model.ts` - Report data structures

### Pipes (`src/app/pipes/`)

Template transformations:
- `markdown.pipe.ts` - Markdown to HTML with sanitization

### Utils (`src/app/utils/`)

Helper functions:
- `date.utils.ts` - Date formatting and manipulation

### Environments (`src/environments/`)

Configuration per environment:
- `environment.ts` - Development settings
- `environment.prod.ts` - Production settings

## Assets

```
src/assets/           # Static images and files
public/               # Public files (favicon, manifest, icons)
public/icons/         # PWA icons (various sizes)
```

## Architecture Patterns

### Component Structure
- Standalone components (no NgModules)
- OnPush change detection
- Signal-based state management
- Functional guards and interceptors

### State Management
- Signals for local component state
- Computed signals for derived state
- RxJS for async operations
- Services for shared state

### Routing
- Lazy loading with `loadComponent()`
- Route guards for protection
- Component input binding enabled
- View transitions enabled

### Styling
- Global styles in `src/styles.css`
- Component-scoped CSS
- CSS custom properties for theming
- Apple-inspired design system
