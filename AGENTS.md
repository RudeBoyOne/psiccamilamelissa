# AGENTS.md

## Stack

TypeScript landing page, Tailwind CSS (via PostCSS), Parcel 2.13.3. No framework, no tests.

## Commands

| Command | Action |
|---------|--------|
| `npm start` | Dev server on `:3000` (`parcel index.html --open --port 3000 --no-cache`) |
| `npm run build` | Build to `build/` dir (`--dist-dir build --public-url ./`) |
| `npm run clean` | Remove `dist/` and `.parcel-cache/` (`rm -rf dist .parcel-cache`) |
| `npx tsc --noEmit` | TypeScript typecheck |
| `npx eslint .` | Lint check |

> **Cache do Parcel**: o Parcel 2 faz cache em `.parcel-cache/` (não em `dist/`). O cache armazena artefatos de build (transformações, resolução de dependências, bundling, otimizações) e é **invalidado automaticamente** quando arquivos relevantes mudam. A flag `--no-cache` **não desativa o cache por completo** — ela torna o cache **read-only** (Parcel não escreve novos entries mas ainda lê entries existentes). Isso significa que um cache corrompido ou desatualizado em `.parcel-cache/` pode servir bundles velhos mesmo com `--no-cache`.
> 
> **Quando limpar o cache**: se alterações de JS/CSS não refletirem no navegador, rodar `npm run clean` (ou `rm -rf dist .parcel-cache`) e reiniciar o dev server. Entre ciclos de teste, sempre limpar `.parcel-cache/` se comportamento novo não aparecer. O `dist/` também deve ser removido pois arquivos residuais de builds anteriores podem permanecer se o cache não for limpo.

## Architecture

- **Entry**: `index.html` → `src/js/index.ts` mounts sections sequentially.
- **Sections**: navbar → hero → about → quote → articles → footer.
- **PDF viewer**: `src/js/pages/displayPdf.ts` — uses `pdfjs-dist`. Accessed at `/display_pdf`.
- **Contact form**: POSTs JSON to `https://emailsending.psiccamilamelissa.com.br/leads` with `{ service: { name: 'site.psiccamilamelissa' } }` injected server-side.
- **Analytics**: Google tag `G-XJS48Z72ZV` in `index.html`.

## Key conventions

- CSS: Tailwind CSS via `src/css/main.css`. No SCSS, no Bootstrap.
- Icons: Bootstrap Icons (social), Lucide Icons (all others).
- JS: Components are factory functions that create DOM elements.

### Animações

- **Todas as animações usam Tailwind CSS.** Nada de CSS puro, keyframes avulsos ou libs de animação.
- Preferir `transition-all` + `duration-300` + `ease-in-out` como padrão.
- Para estados animados controlados por JS, usar `element.style.propriedade` (inline). Para estado inicial estático, usar classes Tailwind.

## Production

- Apache `.htaccess` handles: HTTPS redirect, www→non-www, `/home`→`/` redirect.
- Build output is `build/` — deploy its contents to the document root.
- Canonical domain: `https://psiccamilamelissa.com.br`.

---

## Workflow & MCP rules

### MCPs obrigatórios

1. **Framelink MCP for Figma** — Extrair layout, componentes, espaçamentos, tipografia, cores e variações responsivas. Garantir aderência visual ao design.
2. **chrome-devtools** — Validar no navegador, debugar console/rede/layout, testar responsivo e interações.
   - **Navegação**: sempre usar `reload` para atualizar a página, nunca abrir novas abas/instâncias. Reutilizar a aba existente.
   - **Gestão de páginas**: manter apenas uma página ativa. Fechar páginas excedentes com `chrome-devtools_close_page`.
3. **context7** — Consultar documentação oficial das stacks antes de implementar decisões críticas.

### Restrições técnicas

- **Sem React**.
- Toda estilização via **Tailwind CSS**. CSS puro só em casos extremos onde Tailwind não oferecer solução — e com autorização explícita do usuário (reportar motivo + local + aguardar OK).
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

### Regras de segurança

- Não remover funcionalidades essenciais sem substituto adequado.
- Não fazer mudanças silenciosas de stack fora do escopo.
- Em caso de dúvida, consultar `context7` antes de decidir.
- Conflito entre layout e código existente: priorizar fidelidade ao layout + estabilidade técnica.
- Não implementar CSS puro sem autorização explícita do usuário.
