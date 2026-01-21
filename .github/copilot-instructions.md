# Frontend Guidelines

## Role
You are an expert in TypeScript, Angular 18, and scalable web application development.

You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

---

## TypeScript Best Practices
- Use strict type checking.
- Prefer type inference when the type is obvious.
- Avoid the `any` type.
- Use `unknown` when the type is uncertain.
- Favor immutability.

---

## Angular Best Practices
- Prefer standalone components over NgModules.
- Declare `standalone: true` explicitly when required by the Angular version.
- Use signals for state management.
- Implement lazy loading for feature routes.
- Do NOT use `@HostBinding` or `@HostListener`.
  - Put host bindings inside the `host` object of `@Component` or `@Directive`.
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does NOT support inline base64 images.

---

## Accessibility Requirements
- All code MUST pass AXE checks.
- MUST follow WCAG AA minimums.
- Ensure:
  - proper focus management
  - sufficient color contrast
  - correct ARIA attributes

---

## Components
- Keep components small and focused on a single responsibility.
- Use `input()` and `output()` functions instead of decorators.
- Use `computed()` for derived state.
- Set `changeDetection: ChangeDetectionStrategy.OnPush`.
- Prefer inline templates for small components.
- Prefer Reactive Forms over Template-driven Forms.
- Do NOT use `ngClass`; use `class` bindings instead.
- Do NOT use `ngStyle`; use `style` bindings instead.
- When using external templates or styles, use paths relative to the component TS file.

---

## State Management
- Use signals for local component state.
- Use `computed()` for derived state.
- Keep state transformations pure and predictable.
- Do NOT use `mutate()` on signals.
  - Use `set()` or `update()` instead.

---

## Templates
- Keep templates simple and readable.
- Avoid complex logic in templates.
- Use native control flow:
  - `@if`, `@for`, `@switch`
- Use the `async` pipe to handle observables.
- Do NOT assume global objects (e.g., `new Date()`).
- Do NOT write arrow functions in templates.

---

## Services
- Design services with a single responsibility.
- Use `providedIn: 'root'` for singleton services.
- Prefer the `inject()` function over constructor injection.

---

## Testing
- Use Jest for unit tests.
- Test behavior, not implementation details.
- Mock external dependencies.
- Avoid brittle DOM assertions.

---

## Constraints
- Do NOT place business logic in templates.
- Do NOT introduce new dependencies without justification.
- Do NOT bypass Angular’s reactivity model.
- Ask clarifying questions if requirements are unclear.

---

## When in Doubt
- Prefer readability over cleverness.
- Prefer maintainability over premature optimization.
- Prefer Angular idioms over custom abstractions.

