# AGENTS.md

## Stack

TypeScript landing page, Tailwind CSS 3.4 (via PostCSS), Lit 3 (Web Components — reactive components only), Parcel 2.13.3. No framework, no tests.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server on `:3000` (background, sem abrir browser) |
| `npm start` | Dev server on `:3000` (abre browser) |
| `npm run build` | Build to `build/` dir (`--dist-dir build --public-url ./`) |
| `npm run clean` | Remove `dist/` and `.parcel-cache/` |
| `npm run stop` | Kill dev server |
| `npm run restart` | `stop` → `clean` → `dev` |
| `npx tsc --noEmit` | TypeScript typecheck |
| `npx eslint .` | Lint check |

> **Cache do Parcel**: o Parcel 2 faz cache em `.parcel-cache/` (não em `dist/`). O cache armazena artefatos de build (transformações, resolução de dependências, bundling, otimizações) e é **invalidado automaticamente** quando arquivos relevantes mudam. A flag `--no-cache` **não desativa o cache por completo** — ela torna o cache **read-only** (Parcel não escreve novos entries mas ainda lê entries existentes). Isso significa que um cache corrompido ou desatualizado em `.parcel-cache/` pode servir bundles velhos mesmo com `--no-cache`.
> 
> **Quando limpar o cache**: se alterações de JS/CSS não refletirem no navegador, rodar `npm run clean` (ou `rm -rf dist .parcel-cache`) e reiniciar o dev server. Entre ciclos de teste, sempre limpar `.parcel-cache/` se comportamento novo não aparecer. O `dist/` também deve ser removido pois arquivos residuais de builds anteriores podem permanecer se o cache não for limpo.

## Architecture

- **Entry**: `index.html` → `src/ts/index.ts` mounts custom elements.
- **Components**: Hybrid approach — components with reactive state use **Lit 3**; static components use vanilla `HTMLElement`.
  - **Lit (reactive)**: `<app-navbar>`, `<hero-section>`, `<contact-form>`, `<pdf-viewer>` — use `@state`, `@click`, `?disabled`, and incremental DOM updates.
  - **Vanilla (static)**: `<about-section>`, `<about-card>`, `<quote-section>`, `<articles-grid>`, `<article-card>`, `<app-footer>` — extend `HTMLElement`, render once via `connectedCallback()` + `innerHTML`.
- **PDF viewer**: `<pdf-viewer>` — Lit wrapper around `pdfjs-dist`. Accessed at `/display_pdf`.
- **Contact form**: POSTs JSON to `https://emailsending.psiccamilamelissa.com.br/leads` with `{ service: { name: 'site.psiccamilamelissa' } }` injected client-side.
- **Analytics**: Google tag `G-XJS48Z72ZV` in `index.html`.

## Key conventions

- **Components**: LitElements with `createRenderRoot() { return this }` (no Shadow DOM for Tailwind compat).
- **Decorators**: `@customElement`, `@property`, `@state` from `lit/decorators.js`.
- CSS: Tailwind CSS via `src/css/main.css` + custom component classes (`.input-brand`, `.card-brand`, `.nav-link`).
- Icons: Bootstrap Icons (social), Lucide Icons (all others).
- TypeScript: strict mode enabled.

### Animações

- **Todas as animações usam exclusivamente classes Tailwind.** Nada de CSS puro, keyframes avulsos, libs de animação ou CSS inline.
- Preferir `transition-all` + `duration-300` + `ease-in-out` como padrão.
- Para estados animados controlados por JS, usar classes Tailwind condicionais ou bindings de classe no Lit. **CSS inline (`element.style`) é estritamente proibido.**

## Design Context

- **Register**: brand — landing page for psychologist/psychoanalyst
- **North Star**: "O Espelho Profundo" (introspective, intellectual, elegant)
- **Colors**: Roxo Poético `#2B112C` (primary), Latão `#B38B3E` (gold accent), Lavanda Silenciosa `#C8C1C8` (muted bg)
- **Typography**: Playfair Display (headings) + Plus Jakarta Sans (body) + Poppins (labels)
- **Key files**: `PRODUCT.md` (strategy), `DESIGN.md` (visual system), `.impeccable/design.json` (tokens)
- **Live mode**: pre-configured — run `/impeccable live` to visually iterate

## Production

- Apache `.htaccess` handles: HTTPS redirect, www→non-www, `/home`→`/` redirect.
- Build output is `build/` — deploy its contents to the document root.
- Canonical domain: `https://psiccamilamelissa.com.br`.

---

## Workflow & MCP rules

### Regra inviolável — Verificação visual obrigatória

**Todo código implementado deve ser testado e verificado visualmente no navegador antes de ser considerado completo.** Nenhuma alteração de layout, estilo, componente ou animação pode ser finalizada sem validação via **chrome-devtools MCP** nas 3 viewports obrigatórias (360px, 768px, 1280px+). A verificação deve incluir:

- Screenshot ou snapshot da alteração funcionando
- Checagem de scroll horizontal (`document.documentElement.scrollWidth <= document.documentElement.clientWidth`)
- Console limpo (sem erros)
- Comportamento responsivo nas 3 viewports

Esta regra se aplica a toda e qualquer alteração no código, independentemente de tamanho ou escopo.

### Regra inviolável — Context7

**Todo planejamento deve obrigatoriamente consultar o MCP Context7 antes de ser finalizado.** Nenhum plano de implementação, refatoração, migração ou alteração de stack pode ser considerado completo sem ao menos uma consulta ao Context7 para validar:

- Versões de dependências e compatibilidade entre stacks
- Configuração correta de ferramentas
- Riscos técnicos de implementação
- Correção de decisões arquiteturais

Esta regra se aplica a qualquer tarefa que envolva bibliotecas, frameworks, SDKs, CLIs ou serviços externos.

### MCPs obrigatórios

1. **Framelink MCP for Figma** — Extrair layout, componentes, espaçamentos, tipografia, cores e variações responsivas. Garantir aderência visual ao design.
2. **chrome-devtools** — Validar no navegador, debugar console/rede/layout, testar responsivo e interações.
   - **Navegação**: sempre usar `reload` para atualizar a página, nunca abrir novas abas/instâncias. Reutilizar a aba existente.
   - **Gestão de páginas**: manter apenas uma página ativa. Fechar páginas excedentes com `chrome-devtools_close_page`.
3. **context7** — **Obrigatório em todo planejamento.** Consultar documentação oficial das stacks antes de implementar decisões críticas.

### Restrições técnicas

- **Mobile-first obrigatório.** Toda responsividade deve seguir o paradigma mobile-first do Tailwind: classes **sem prefixo** = estilo mobile padrão (aplica em todas as viewports), `sm:`, `md:`, `lg:`, `xl:` para overrides progressivos. `max-*` só é permitido para **targetiar um range específico** em conjunto com um prefixo min-width (ex: `sm:max-md:flex`). **Nunca** use `max-*` como substituto de base mobile — o correto é `px-2 sm:px-4`, não `px-4 max-sm:px-2`.
- **Sem scroll horizontal.** Nunca deve haver scroll horizontal em nenhuma viewport. Scroll permitido apenas no eixo vertical. O layout deve ser coeso até **360px de largura** (Samsung S8).
- **Verificação em 3 viewports obrigatória** antes de finalizar qualquer alteração de layout: 360px (mobile), 768px (tablet), 1280px+ (desktop). Sem scroll horizontal em nenhuma delas.
- **Preferir valores da escala do Tailwind** (`text-xl`, `text-3xl`, `p-4`, `gap-8`) em vez de valores arbitrários (`text-[44px]`, `gap-[33px]`). Arbitrários só quando o design exigir tamanho fora da escala disponível.
- **Sem React, sem frameworks pesados** — Lit + Web Components nativos.
- Toda estilização via **Tailwind CSS**. CSS puro só em casos extremos onde Tailwind não oferecer solução — e com autorização explícita do usuário (reportar motivo + local + aguardar OK).
- **CSS inline é estritamente proibido.** O atributo `style=""` não deve ser usado em hipótese alguma. Preferir classes Tailwind, bindings de classe no Lit, ou (como último recurso, com autorização explícita) CSS puro em arquivo `.css`.
- Ícones:
  - Redes sociais → **Bootstrap Icons**
  - Demais ícones → **Lucide Icons**
- Não misturar bibliotecas de ícones fora dessa regra.
- Evitar dependências desnecessárias.

### Output obrigatório a cada alteração

1. O que foi alterado (arquivos e objetivo)
2. Por que foi alterado (decisão técnica)
3. Como validar (comandos/passos)
4. Pendências/riscos (se houver)
5. Necessidade de CSS puro (se houver) com pedido de autorização
6. Próximo passo recomendado

### Impacto de alterações no layout

- Toda modificação em classes de um elemento (padding, margin, font-size, width, display, etc.) deve ser testada em **elementos filhos, vizinhos e no site como um todo**.
- Verificar sempre em **3 viewports**: 360px (mobile), 768px (tablet), 1280px+ (desktop).
- Padding e margin devem sempre ser **balanceados** — jamais alterar apenas um lado sem verificar o outro. Se reduzir `px-4` para `px-2`, garantir que ambos os lados foram reduzidos simetricamente.
- Alterações em display (ex: `inline` → `inline-block`) podem afetar o box model e o fluxo de elementos adjacentes.
- Antes de finalizar, validar:
  - `document.documentElement.scrollWidth <= document.documentElement.clientWidth` nas 3 viewports (sem scroll horizontal)
  - Badges/spans com animação não cortam texto: `clientWidth >= scrollWidth`
  - Navegação não quebra no breakpoint de transição (1024px)

### Regras de segurança

- Não remover funcionalidades essenciais sem substituto adequado.
- Não fazer mudanças silenciosas de stack fora do escopo.
- **Context7 é obrigatório em todo planejamento** — consultar antes de decidir.
- Conflito entre layout e código existente: priorizar fidelidade ao layout + estabilidade técnica.
- Jamais implementar CSS puro ou CSS inline sem autorização explícita do usuário. Violações serão rejeitadas em code review.

### Cleanup pós-verificação

**Após finalizar testes e verificações visuais, todo artefato gerado durante o processo deve ser removido.** Isso inclui screenshots, snapshots, arquivos de trace, dumps de console, ou qualquer outro arquivo criado exclusivamente para validação. O diretório `screenshots/` na raiz do projeto, se existir, deve ser excluído por completo (`rm -rf screenshots/`). A exceção são arquivos committed intencionalmente como parte da documentação do projeto.
