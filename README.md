# BragDoc - Rastreador de Conquistas Profissionais

Rastreie e mostre suas conquistas profissionais com insights alimentados por IA a partir de suas contribuições no GitHub.

## 🚀 Funcionalidades

- 🔐 **Autenticação OAuth do GitHub** - Login seguro com sua conta GitHub
- 📊 **Integração com GitHub** - Importe commits, pull requests e issues automaticamente
- 🤖 **Análise Alimentada por IA** - Gere resumos inteligentes do seu trabalho com prompts personalizados
- 📅 **Períodos de Tempo Flexíveis** - Analise conquistas por dia, semana, mês ou intervalos personalizados
- 📈 **Relatórios Visuais** - Gráficos e insights bonitos sobre suas contribuições
- 🎨 **Interface Moderna** - Design limpo e responsivo com tema escuro

## 🛠️ Stack Tecnológico

### Frontend
- **Angular 21** - Componentes standalone com signals
- **TypeScript** - Verificação de tipos rigorosa
- **PrimeNG** - Biblioteca de componentes UI
- **RxJS** - Programação reativa
- **Vite** - Ferramenta de build rápida

### Melhores Práticas
- ✅ Componentes standalone (sem NgModules)
- ✅ Signals para gerenciamento de estado
- ✅ Detecção de mudanças OnPush
- ✅ Lazy loading de rotas
- ✅ Guards e interceptors funcionais
- ✅ `provideAppInitializer` moderno (sem APIs depreciadas)
- ✅ Função `inject()` ao invés de injeção via construtor
- ✅ Formulários reativos
- ✅ Conformidade com acessibilidade WCAG AA

## 📋 Pré-requisitos

- Node.js 21+ e npm
- Angular CLI 21+
- API backend rodando (veja o repositório backend)

## 🚀 Começando

### 1. Clone o repositório

```bash
git clone <url-do-repositório>
cd bragdoc-frontend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie ou atualize `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

Para produção, atualize `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://seu-dominio-api.com/api'
};
```

### 4. Execute o servidor de desenvolvimento

```bash
npm start
```

Navegue para `http://localhost:4200/`

### 5. Build para produção

```bash
npm run build
```

Os artefatos de build serão armazenados no diretório `dist/`.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── github-import/     # Assistente de integração GitHub
│   │   ├── layout/            # Wrapper do layout principal
│   │   ├── login/             # Páginas de autenticação
│   │   └── reports/           # Relatórios e análises
│   ├── guards/
│   │   └── auth.guard.ts      # Proteção de rotas
│   ├── interceptors/
│   │   └── auth.interceptor.ts # Interceptor HTTP de autenticação
│   ├── models/                # Interfaces TypeScript
│   ├── pipes/
│   │   └── markdown.pipe.ts   # Renderização de Markdown
│   ├── services/              # Lógica de negócios
│   ├── app.component.ts       # Componente raiz
│   ├── app.config.ts          # Configuração da aplicação
│   └── app.routes.ts          # Definições de rotas
├── assets/                    # Arquivos estáticos
├── environments/              # Configurações de ambiente
└── styles.css                 # Estilos globais
```

## 🔑 Componentes Principais

### Fluxo de Autenticação

1. Usuário clica em "Login com GitHub"
2. Redirecionado para OAuth do GitHub
3. Callback tratado pelo `AuthCallbackComponent`
4. Sessão validada via `provideAppInitializer`
5. Dados do usuário cacheados no `AuthService`

### Assistente de Importação do GitHub

**Processo de 4 Etapas:**

1. **Conectar** - Inserir Token de Acesso Pessoal do GitHub
2. **Repositórios** - Selecionar repositórios para analisar
3. **Período de Tempo** - Escolher intervalo de datas (predefinidos ou personalizado)
4. **Análise IA** - Personalizar prompt e gerar insights

### Gerenciamento de Estado

- **Signals** para estado local reativo
- **Computed signals** para estado derivado
- **RxJS** para operações assíncronas
- **Interceptor HTTP** para gerenciamento de sessão

## 🎨 Sistema de Design

Sistema de design personalizado baseado em propriedades customizadas CSS:

```css
:root {
  --primary: #6B5DD3;
  --bg: #1C1B29;
  --surface: #2A273D;
  --text-primary: #E0DAFF;
  /* ... */
}
```

### Escala de Espaçamento (Base 8px)
- `--spacing-xs: 4px`
- `--spacing-sm: 8px`
- `--spacing-md: 16px`
- `--spacing-lg: 24px`
- `--spacing-xl: 32px`

## 🧪 Testes

```bash
# Executar testes unitários
npm test

# Executar testes e2e
npm run e2e
```

## 🔒 Segurança

- **Cookies HttpOnly** para gerenciamento de sessão
- **Proteção CSRF** via backend
- **Fluxo OAuth seguro** com parâmetro state
- **Proteção XSS** via DOMPurify (sanitização de markdown)
- **Sem localStorage** para dados sensíveis

## 🌐 Suporte de Navegadores

- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)

## 📝 Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `apiUrl` | URL da API backend | `http://localhost:8080/api` |

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/funcionalidade-incrivel`)
3. Siga o guia de estilo do Angular e as convenções do projeto
4. Garanta que todos os testes passem
5. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
6. Push para a branch (`git push origin feature/funcionalidade-incrivel`)
7. Abra um Pull Request

### Estilo de Código

- Use `prettier` para formatação
- Siga as convenções de nomenclatura do Angular
- Escreva mensagens de commit significativas
- Adicione comentários JSDoc para APIs públicas

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 👤 Autor

**farigab**

## 🙏 Agradecimentos

- PrimeNG pelos componentes UI incríveis
- Time do Angular pelo framework fantástico
- GitHub pelo acesso OAuth e API

---

**Built with ❤️ using Angular 21**
