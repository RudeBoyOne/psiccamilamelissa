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

## Componentes

### Lit (reativos)

| Componente | Tipo | Descrição |
|---|---|---|
| `<app-navbar>` | LitElement | Navegação responsiva com menu hamburger |
| `<hero-section>` | LitElement | Seção hero com badge e CTA |
| `<contact-form>` | LitElement | Formulário de contato com validação |
| `<about-section>` | LitElement | Seção "Sobre" com grid de cards |
| `<about-card>` | LitElement | Card de experiência/instituição |

### Vanilla HTMLElement (estáticos)

| Componente | Tipo | Descrição |
|---|---|---|
| `<quote-section>` | HTMLElement | Seção de citação |
| `<articles-grid>` | HTMLElement | Grid de artigos com Observer |
| `<article-card>` | HTMLElement | Card de artigo com link externo/PDF |
| `<app-footer>` | HTMLElement | Rodapé |

## Animações

### Staggered Reveal (Entrada Sequencial)

Cards usam `IntersectionObserver` individual por elemento para animação de entrada:

- **Estado inicial**: `opacity-0 translate-y-8` (invisível, deslocado para baixo)
- **Transição**: `transition-all duration-[1700ms] ease-out`
- **Acessibilidade**: `motion-reduce:transition-none` reseta animação
- **Trigger**: Observer observa cada card individualmente com `threshold: 0.15` e `rootMargin: '0px 0px -80px 0px'`
- **Cleanup**: `unobserve` após trigger (não re-dispara)
- **Mobile**: Sem delays — timing natural pelo scroll
- **Desktop**: Delays escalonados via `lg:delay-*` (0/300/500/700ms)

### Comportamento

- **Scroll para baixo**: Cards aparecem um por um conforme entram no viewport
- **Scroll para cima**: Cards já animados permanecem visíveis (observer desconectado)
- **`overflow-hidden`**: Previne flash de conteúdo pré-animação

### Convenções

- **Todas as animações usam exclusivamente classes Tailwind**
- **CSS inline (`style=""`) é estritamente proibido**
- Preferir `transition-all` + `ease-out` como padrão
- Para estados animados controlados por JS, usar classes Tailwind condicionais

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
