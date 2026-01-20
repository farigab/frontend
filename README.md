# BragDoc Frontend

A modern, Apple-inspired Angular application for tracking professional achievements.

## 🚀 Technologies

- **Angular 18.2** - Latest stable Angular version with standalone components
- **PrimeNG 18** - Rich UI component library
- **TypeScript 5.5** - Strict type checking enabled
- **Chart.js 4.4** - Data visualization
- **PrimeFlex** - Flexbox utilities
- **PrimeIcons** - Icon library

## ✨ Features

- **Apple-Style Design** - Clean, modern UI inspired by Apple's design language
- **Standalone Components** - Modern Angular architecture without NgModules
- **Signal-Based State Management** - Reactive state using Angular signals
- **Lazy Loading** - Optimized bundle sizes with route-level code splitting
- **Type-Safe** - Strict TypeScript configuration
- **Responsive** - Mobile-first design approach
- **Accessible** - WCAG AA compliant

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── achievement-form/      # Form for creating/editing achievements
│   │   ├── achievement-list/      # List view with filtering and search
│   │   ├── dashboard/             # Overview with charts and stats
│   │   ├── layout/                # Main layout with navigation
│   │   ├── reports/               # Analytics and reports
│   │   └── timeline/              # Timeline visualization
│   ├── models/
│   │   ├── achievement.model.ts   # Achievement types and constants
│   │   └── report.model.ts        # Report types
│   ├── services/
│   │   ├── achievement.service.ts # Achievement API service
│   │   └── report.service.ts      # Report API service
│   ├── app.component.ts           # Root component
│   ├── app.config.ts              # Application configuration
│   └── app.routes.ts              # Route definitions with lazy loading
├── environments/
│   ├── environment.ts             # Production environment
│   └── environment.development.ts # Development environment
├── styles.css                     # Global Apple-inspired styles
├── main.ts                        # Application bootstrap
└── index.html                     # HTML entry point
```

## 🎯 Architecture Highlights

### Following Angular Best Practices

1. **Standalone Components** - All components use `standalone: true`
2. **Signal-Based State** - Using `signal()`, `computed()` for reactive state
3. **inject() Function** - Dependency injection using functional approach
4. **OnPush Change Detection** - Optimized performance
5. **Lazy Loading** - Routes loaded on-demand
6. **Reactive Forms** - Type-safe forms with validation
7. **Strict TypeScript** - Maximum type safety

### Code Quality Standards

- ✅ No `any` types - Strict typing throughout
- ✅ Readonly properties - Immutability where appropriate
- ✅ No `@HostBinding`/`@HostListener` - Using host object
- ✅ No `ngClass`/`ngStyle` - Using class/style bindings
- ✅ Native control flow - `@if`, `@for`, `@switch`
- ✅ input()/output() functions - Modern component API
- ✅ No template arrow functions - Clean templates
- ✅ No business logic in templates - Component-driven

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build

```bash
npm run build
```

Production build outputs to `dist/`

### Configuration

Update API URL in environment files:

**src/environments/environment.ts**
```typescript
export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080/api'
};
```

## 🎨 Design System

### Apple-Inspired Colors

- **Primary Blue**: `#007aff` - Main action color
- **Success Green**: `#34c759` - Positive actions
- **Warning Orange**: `#ff9500` - Warning states
- **Danger Red**: `#ff3b30` - Error states
- **Gray Scale**: Multiple shades for text and backgrounds

### Typography

- **Font Family**: SF Pro Display/Text (system fallbacks)
- **Font Weights**: 300-800
- **Letter Spacing**: -0.02em for headings
- **Line Height**: 1.2 for headings, 1.5 for body

### Component Styling

- **Border Radius**: 8px-20px (rounded corners)
- **Shadows**: Subtle layered shadows
- **Transitions**: Smooth 150-350ms animations
- **Glassmorphism**: Backdrop blur effects on headers

## 📦 Key Components

### Dashboard

- Overview statistics cards
- Category distribution chart
- Recent achievements list
- Quick action buttons

### Achievement List

- Data table with sorting and filtering
- Search functionality
- Category filtering
- CRUD operations with confirmations

### Achievement Form

- Reactive form validation
- Date picker
- Category dropdown
- Impact level selection

### Layout

- Sticky header with blur effect
- Responsive navigation
- Mobile sidebar
- Apple-style footer

## 🔧 Scripts

```bash
npm start          # Start development server
npm run build      # Production build
npm run watch      # Build in watch mode
npm test           # Run tests
npm test:watch     # Run tests in watch mode
```

## 📝 Environment Variables

- `apiUrl`: Backend API URL (default: `http://localhost:8080/api`)

## 🤝 Contributing

Follow the coding standards defined in `.github/instructions/frontend.md`:

1. Use standalone components
2. Use signals for state management
3. Implement OnPush change detection
4. Follow strict TypeScript practices
5. Ensure WCAG AA accessibility
6. Keep components small and focused

## 📄 License

Private project

---

**Built with ❤️ using Angular 18 and PrimeNG**
