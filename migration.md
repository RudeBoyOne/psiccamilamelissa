# Migration

Você vai atuar como engenheiro(a) frontend responsável por **migrar e refatorar** o projeto abaixo, mantendo foco em qualidade de código, consistência visual e validação técnica.

**Contexto atual:** site SPA em JavaScript vanilla, com estilização baseada em Bootstrap  
**Objetivo final:** transformar em **landing page** com novo layout + migração de stack para TypeScript + migração de CSS para Tailwind, mantendo o projeto funcional, performático e fácil de manter.

---

### 1) Objetivos principais (obrigatórios)

1. Migrar o projeto de **JavaScript para TypeScript**.
2. Migrar a estrutura de **SPA para landing page**.
3. Migrar a estilização de **Bootstrap CSS para Tailwind CSS**.
4. Implementar o novo layout com fidelidade ao design de referência.
5. Melhorar fluxo de desenvolvimento (tipagem, lint, organização de código, validação).
6. Não introduzir React ou outros frameworks não solicitados.

---

### 2) Restrições técnicas e padrões (obrigatórios)

- **Sem React**.
- Stack deve continuar adequada para site estático/landing page.
- Linguagem principal: **TypeScript**.
- CSS principal e prioritário: **Tailwind CSS**.
- **Toda estilização deve ser feita via Tailwind CSS**.
- **CSS puro só pode ser usado em casos extremamente específicos onde Tailwind não oferecer solução viável**.
- Sempre que houver necessidade de CSS puro:
  1. reportar claramente o motivo técnico,
  2. indicar exatamente onde será aplicado,
  3. **aguardar autorização explícita do usuário antes de implementar**.
- Ícones:
  - **Bootstrap Icons**: usar **exclusivamente** para ícones de redes sociais.
  - **Lucide Icons**: usar **exclusivamente** para todos os demais ícones do projeto.
- Não misturar bibliotecas de ícones fora dessas regras.
- Evitar dependências desnecessárias.

---

### 3) MCPs que devem ser usados durante a execução

Use obrigatoriamente os seguintes MCPs no fluxo:

1. **Framelink MCP for Figma**
   - Extrair layout, estrutura de seções, componentes, espaçamentos, tipografia, cores e variações responsivas.
   - Garantir aderência visual da landing page ao design.

2. **chrome-devtools**
   - Validar implementação no navegador.
   - Debugar erros de console/rede/layout.
   - Testar comportamento responsivo e interações.

3. **context7**
   - Consultar documentação oficial das stacks e bibliotecas utilizadas.
   - Buscar snippets e exemplos corretos antes de implementar decisões críticas.

---

### 4) Plano de execução esperado

1. **Diagnóstico inicial do repositório**
   - Mapear estrutura atual, entrypoints, scripts, assets e gargalos.
2. **Plano de migração incremental**
   - Propor etapas pequenas e seguras (sem quebrar o site).
3. **Setup de TypeScript**
   - Adicionar/configurar `tsconfig.json`.
   - Migrar arquivos JS progressivamente para TS.
4. **Setup e migração para Tailwind CSS**
   - Configurar Tailwind CSS no projeto.
   - Remover dependência de Bootstrap CSS gradualmente.
   - Migrar classes/estilos existentes para utilitários Tailwind.
   - Garantir responsividade, espaçamentos e consistência visual.
5. **Padronização de qualidade**
   - Configurar ESLint para JS/TS sem React.
   - Regras focadas em DX e segurança (ex.: `prefer-const`, `no-console`, etc.).
6. **Refatoração de arquitetura de frontend**
   - Reorganizar para modelo de landing page (seções, componentes reutilizáveis, utilitários).
7. **Migração de layout**
   - Implementar novo layout com base no Figma via Framelink MCP.
8. **Ícones**
   - Aplicar política de ícones obrigatória (Bootstrap social / Lucide restante).
9. **Validação final**
   - Rodar checks de lint, typecheck, build e testes manuais no navegador.
10. **Documentação**
   - Atualizar README com instruções de desenvolvimento, lint, typecheck e convenções de estilização com Tailwind.

---

### 5) Critérios de aceite (Definition of Done)

Considere concluído apenas quando TODOS os itens abaixo forem verdadeiros:

- [ ] Projeto migrado para TypeScript de forma funcional.
- [ ] Estrutura final é de landing page (não mais SPA no formato antigo).
- [ ] Bootstrap CSS removido do fluxo principal de estilização.
- [ ] Estilização implementada prioritariamente com Tailwind CSS.
- [ ] Qualquer necessidade de CSS puro foi:
  - [ ] reportada,
  - [ ] justificada tecnicamente,
  - [ ] autorizada explicitamente antes da implementação.
- [ ] Layout novo implementado com fidelidade ao design.
- [ ] Regras de ícones respeitadas estritamente:
  - [ ] Redes sociais = Bootstrap Icons
  - [ ] Demais ícones = Lucide Icons
- [ ] ESLint configurado e passando.
- [ ] Typecheck passando sem erros bloqueantes.
- [ ] Sem erros no console do navegador nas páginas principais.
- [ ] README atualizado com fluxo de desenvolvimento e comandos.
- [ ] Código organizado, legível e com boa manutenção futura.

---

### 6) Requisitos de output durante a execução

Durante o trabalho, sempre reporte:

1. **O que foi alterado** (arquivos e objetivo).
2. **Por que foi alterado** (decisão técnica).
3. **Como validar** (comandos e passos de verificação).
4. **Pendências/riscos** (se houver).
5. **Necessidade de CSS puro** (se houver), com pedido explícito de autorização.
6. **Próximo passo recomendado**.

---

### 7) Regras de segurança de execução

- Não remover funcionalidades essenciais sem substituir adequadamente.
- Não fazer mudanças silenciosas de stack fora do escopo.
- Se houver dúvida de implementação, consultar `context7` antes de decidir.
- Se houver conflito entre layout e código existente, priorizar fidelidade ao layout + estabilidade técnica.
- Não implementar CSS puro sem autorização explícita do usuário.

---
