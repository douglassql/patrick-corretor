
## Skill: Design e Engenharia Front-End (Sênior)

Propósito
-------
Esta skill descreve um fluxo repetível de nível sênior para projetar e implementar interfaces front-end modernas e prontas para produção. Une responsabilidades de um Engenheiro Front-End Sênior e de um Designer UX/UI focados em React/Next.js + TypeScript + TailwindCSS.

Escopo
-----
- Padrão: escopo no workspace (adaptável para uso pessoal).
- Saídas esperadas: componentes polidos, implementações acessíveis e um exemplo executável para verificação.

Quando usar esta skill
-----------------------
- Ao construir uma nova página ou dashboard.
- Ao projetar uma biblioteca de componentes reutilizáveis.
- Ao converter um mockup visual em implementação responsiva.

Processo passo a passo
--------------------
1. Descoberta & definição
   - Reunir objetivos, tarefas de usuário e restrições.
   - Determinar breakpoints, baseline de acessibilidade (WCAG AA) e necessidades de internacionalização.
   - Decidir entre prototipar ou implementar diretamente.

2. Sistema de design & layout
   - Definir tokens-chave: escala de espaços, papéis de cor, escala tipográfica, raios de borda, elevações.
   - Criar esqueleto de layout (mobile-first). Usar grid de 12 colunas para desktop.
   - Identificar componentes reutilizáveis: `Button`, `Card`, `FormField`, `Modal`, `Sidebar`, `Table`, `ChartCard`.

3. Validação de baixa fidelidade
   - Produzir wireframes ou frames rápidos no Figma para hierarquia e layout.
   - Validar fluxo de interação e casos de borda com stakeholders.

4. Design de alta fidelidade
   - Aplicar tipografia, espaçamentos e regras de movimento sutis.
   - Fornecer estados: hover, focus, pressed, disabled, loading, empty.
   - Definir contrastes acessíveis e padrões ARIA.

5. Implementação (component-first)
   - Criar componentes pequenos e tipados em `src/components/` com stories ou páginas de exemplo.
   - Usar HTML semântico, suporte por teclado e atributos ARIA.
   - Preferir composição; componentes orientados por props.

6. Integração & testes
   - Construir uma página ou story demonstrando dados realistas e estados de carregamento/erro.
   - Testar responsividade, navegação por teclado e fluxo com leitores de tela.
   - Executar checagens básicas de performance (tamanho do bundle, imagens).

7. Polimento & entrega
   - Adicionar micro-interações (Framer Motion) quando melhoram a clareza.
   - Exportar ativos finais, documentar uso e adicionar testes básicos.

Pontos de decisão & lógica de ramificação
--------------------------------
- Prototipar vs implementar diretamente
  - Prototipar quando requisitos são incertos ou alinhamento com stakeholders é necessário.
  - Implementar diretamente quando critérios de aceitação estão claros.
- Escopo do componente
  - Tornar o componente genérico se for reutilizado entre telas.
  - Manter específico se fortemente acoplado a uma tela.
- Compromissos de acessibilidade
  - Preferir ARIA e marcação semântica; só usar controles não padrão com suporte total a teclado e leitores de tela.

Critérios de qualidade & checagens de conclusão
----------------------------------
- Visual: consistente com mockups, espaçamento equilibrado e hierarquia clara.
- Acessibilidade: operável por teclado, foco visível, contraste >= AA, labels ARIA quando necessários.
- Responsividade: mobile-first com breakpoints padrão (640px/768px/1024px/1280px).
- Qualidade do código: TypeScript, API de componente pequena, testes unitários/snapshot para UI crítica.
- Performance: evitar bundles grandes; imagens otimizadas; evitar re-renders desnecessários.

Entregáveis gerados por esta skill
---------------------------------
- Um conjunto de componentes em `src/components/`.
- Página demo ou Stories mostrando estados comuns.
- Um `README.md` curto explicando uso de cada componente.
- Checklist de acessibilidade e testes.

Modelos & exemplos
--------------------
- Trecho de template para pull request: resumo do design, screenshots, checklist de acessibilidade.
- Prompts de exemplo:
  - "Projetar e implementar um componente `Card` responsivo para métricas com estados de loading e empty."
  - "Converter esta seção do Figma em `Card` e `Table` responsivos usando TailwindCSS e TypeScript."

Dúvidas & pontos ambíguos para o solicitante
---------------------------------------
- Escopo: as saídas devem ser uma biblioteca compartilhada ou por-feature?
- Aceitação: qual nível de testes é necessário (QA manual vs testes automatizados)?
- Fonte de design: existe arquivo Figma/Sketch ou devo propor direções visuais?

Guia de iteração
------------------
1. Começar pequeno: produzir um componente funcional com página demo.
2. Coletar feedback e iterar em espaçamentos, rótulos e tempos de interação.
3. Expandir para o conjunto mínimo de componentes necessários pela tela.

Notas para mantenedores
--------------------
- Manter API de componentes estável; preferir novos componentes a breaking changes.
- Documentar tokens de design e quando cada um deve ser usado.
- Usar Storybook ou app demo para verificar visualmente estados e acessibilidade.

Contato / Próximos passos
--------------------
Quando pronto, confirme o escopo (workspace vs pessoal), forneça arquivos de design ou páginas de exemplo e indique tokens de marca ou breakpoints preferidos.
