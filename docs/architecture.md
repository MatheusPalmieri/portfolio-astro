# 🏗️ Arquitetura — portfolio-astro

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| [Astro](https://astro.build) | ^6.0.3 | Framework principal (SSR/SSG) |
| TypeScript | strict | Tipagem em todos os componentes |
| CSS Variables | — | Sistema de temas (dark/light) |
| pnpm | — | Gerenciador de pacotes |
| Node.js | >=22.12.0 | Runtime |

---

## Estrutura de pastas

```
portfolio-astro/
├── public/
│   ├── styles/
│   │   └── global.css          # CSS global, variáveis de tema, container system
│   └── favicon.svg / favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Header.astro         # Nav fixo: logo | links | theme toggle | lang selector
│   │   ├── Hero.astro           # Seção de apresentação (greeting, nome, bio, skills)
│   │   ├── Experience.astro     # Lista de experiências profissionais
│   │   ├── Education.astro      # Educação + idiomas
│   │   └── Footer.astro         # Rodapé com links sociais
│   │
│   ├── i18n/
│   │   └── translations.ts      # Todas as traduções (EN, PT-BR, ES, ZH, IT)
│   │
│   ├── layouts/
│   │   └── Layout.astro         # HTML base, meta tags, Google Fonts, anti-flash theme
│   │
│   ├── pages/
│   │   └── index.astro          # Página principal — monta todos os componentes
│   │
│   └── styles/                  # (reservado para estilos scoped futuros)
│
├── docs/
│   ├── README.md                # Índice da documentação
│   ├── architecture.md          # Este arquivo
│   └── context-prompt.md        # Prompt de contexto para IA
│
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## Sistema de temas (dark/light)

- Controlado via `data-theme` no `<html>`
- Valores: `'dark'` | `'light'`
- Persistido em `localStorage` com chave `'theme'`
- Anti-flash: script inline no `<head>` do `Layout.astro`
- CSS: `:root` = light, `[data-theme='dark']` = dark

---

## Sistema de idiomas (i18n)

- Idiomas suportados: `en`, `pt-br`, `es`, `zh`, `it`
- Tipo: `Locale` exportado de `src/i18n/translations.ts`
- Persistido em `localStorage` com chave `'lang'`
- Passado via query param `?lang=pt-br`
- Todos os componentes recebem `lang: Locale` como prop

---

## Container system

Classes disponíveis em `public/styles/global.css`:

| Classe | Max-width |
|---|---|
| `.container` | `1280px` (padrão) |
| `.container-sm` | `640px` |
| `.container-md` | `768px` |
| `.container-lg` | `1024px` |
| `.container-xl` | `1280px` |
| `.container-2xl` | `1440px` |
| `.container-full` | `100%` |

Padding responsivo automático: `1rem` → `1.5rem` → `2rem` → `2.5rem` → `3rem`

---

## Padrões de componente

- Sempre receber `lang: Locale` como prop
- Importar traduções via `translations[lang]`
- Estilos scoped com `<style>` dentro do `.astro`
- Sem dependências externas de UI (zero libs de componente)
- Tipagem estrita — sem `any`

---

## Comandos

```bash
pnpm install     # instalar dependências
pnpm dev         # servidor de desenvolvimento
pnpm build       # build de produção
pnpm preview     # preview do build
```

---

## Branches

| Branch | Uso |
|---|---|
| `main` | produção / estável |
| `dev` | desenvolvimento ativo |
