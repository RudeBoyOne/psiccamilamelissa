# psiccamilamelissa

Landing page profissional da psicóloga Camila Melissa de Souza.

## Stack

| Camada | Tecnologia |
|--------|-----------|
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS (via PostCSS) |
| **Build** | Parcel 2.13.3 |
| **Ícones sociais** | Bootstrap Icons |
| **Demais ícones** | Lucide Icons |
| **PDF viewer** | pdfjs-dist |
| **Lint** | ESLint + typescript-eslint |

## Comandos

| Comando | Ação |
|---------|------|
| `npm start` | Dev server em `localhost:3000` |
| `npm run build` | Build para `build/` |
| `npx tsc --noEmit` | Typecheck |
| `npx eslint .` | Lint |

## Convenções de estilização

- **Toda estilização usa Tailwind CSS** diretamente nos componentes.
- CSS puro só é usado em casos excepcionais com autorização explícita.
- Ícones seguem a política:
  - Redes sociais (Instagram, LinkedIn, WhatsApp, Email) → **Bootstrap Icons**
  - Demais ícones (menu, setas, features) → **Lucide Icons**

## Estrutura

```
src/
├── assets/           # Imagens, PDFs, ícones SVG
├── css/
│   └── main.css      # Tailwind directives + Google Fonts
├── js/
│   ├── components/   # Seções da landing page (hero, about, articles, etc.)
│   ├── pages/        # Páginas especiais (PDF viewer, 404)
│   ├── services/     # API e email
│   ├── types/        # TypeScript declarations
│   └── utils/        # Utilitários (ícones, DOM)
```

## Produção

- Build estático em `build/` — deploy do conteúdo para document root.
- `.htaccess` gerencia HTTPS, www→non-www, `/home`→`/`.
- Domínio canônico: `https://psiccamilamelissa.com.br`.
