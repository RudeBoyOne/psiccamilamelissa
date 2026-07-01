# AGENTS.md

## Stack

TypeScript landing page, Tailwind CSS (via PostCSS), Parcel 2.13.3. No framework, no tests.

## Commands

| Command | Action |
|---------|--------|
| `npm start` | Dev server on `:3000` (`parcel index.html --open --port 3000 --no-cache`) |
| `npm run build` | Build to `build/` dir (`--dist-dir build --public-url ./`) |
| `npx tsc --noEmit` | TypeScript typecheck |
| `npx eslint .` | Lint check |

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

## Production

- Apache `.htaccess` handles: HTTPS redirect, www→non-www, `/home`→`/` redirect.
- Build output is `build/` — deploy its contents to the document root.
- Canonical domain: `https://psiccamilamelissa.com.br`.

---

## Workflow & MCP rules

### MCPs obrigatórios

1. **Framelink MCP for Figma** — Extrair layout, componentes, espaçamentos, tipografia, cores e variações responsivas. Garantir aderência visual ao design.
2. **chrome-devtools** — Validar no navegador, debugar console/rede/layout, testar responsivo e interações.
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
