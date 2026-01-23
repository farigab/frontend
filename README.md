# BragDoc Frontend

Frontend web do BragDoc: aplicação Angular para gerenciar e visualizar conquistas profissionais e relatórios.

## 🚀 Tecnologias (versões atuais)

- **Angular 21.1.0** — Standalone components e recursos modernos
- **PrimeNG 21.0.4** — Biblioteca de componentes UI
- **TypeScript 5.9.2** — Tipagem rígida
- **Chart.js 4.4.0** — Visualização de dados
- **PrimeFlex** — Utilitários Flexbox
- **PrimeIcons 7.0.0** — Ícones

## ✨ Recursos principais

- Apple-inspired UI com foco em clareza e tipografia
- Componentes standalone e arquitetura moderna
- Gerenciamento reativo por sinais (`signal`, `computed`)
- Lazy loading de rotas para otimização de bundling
- Formulários reativos tipados
- Acessibilidade e responsividade (WCAG AA)

## 📁 Estrutura resumida

```
src/
├── app/
│   ├── components/
│   ├── models/
│   ├── services/
│   ├── app.component.ts
│   └── app.routes.ts
├── environments/
├── styles.css
├── main.ts
└── index.html
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+ (recomendado)
- npm (ou pnpm)

### Instalação

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm start
```

Abra http://localhost:4200/ (ou conforme configuração do projeto).

### Build de produção

```bash
npm run build
```

### Scripts comuns

```bash
npm start          # servidor de desenvolvimento
npm run build      # build de produção
npm run watch      # build em modo watch
npm test           # executar testes (jest/vitest)
npm test:watch     # testes em watch
```

## 🔧 Configuração

Atualize a URL da API em `src/environments/environment.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080/api'
};
```

## 🤝 Contribuições

- Crie uma branch `feature/descricao` ou `fix/descricao`.
- Abra um PR descrevendo mudanças e como testar.
- Siga as diretrizes do projeto (componentes standalone, sinais, OnPush, TypeScript estrito, acessibilidade).

## 📄 Licença

Projeto privado (adicione um arquivo LICENSE se quiser publicar).

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

**Built with ❤️ using Angular 21 and PrimeNG**
