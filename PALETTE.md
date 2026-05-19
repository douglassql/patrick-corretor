Paleta de cores — Identidade visual (Patrick Corretor)
=====================================================

Resumo
-----
Paleta vibrante, urbana e comercial, com laranja como cor principal. Pensada para transmitir confiança, dinamismo jovem e sensação de conquista da casa própria.

Tokens principais
-----------------
- Cor primária: `primary` — laranja energético
  - `primary-500`: #ff7a1f (marca viva)
  - `primary-600`: #ff6100 (hover/active)

- Secundária: `petrol` — azul petróleo/azul-escuro para contraste
  - `petrol-500`: #0f5670
  - `petrol-700`: #0a3a4a

- Destaque / Accent: `accent` — dourado/amarelo para sinais positivos
  - `accent-500`: #ffbf00

- Apoio: `sand` — tons areia/bege moderno para áreas acolhedoras
  - `sand-300`: #e7d8bf

- Escala de neutros: `charcoal` — grafite/ carvão para textos e elementos pesados
  - `charcoal-700`: #111827

- Backgrounds e UI
  - `ui-bg`: #fbf9f7 (fundo principal, off-white sofisticado)
  - `ui-section`: #ffffff (superfícies claras)

- CTAs
  - `cta.primary`: #ff7a1f
  - `cta.primaryHover`: #ff6100
  - `cta.secondary`: #0f5670

- Cards
  - `card.1`: #fff4ef (card quente, leve)
  - `card.2`: #fff9f0 (card claro)
  - `card.3`: #f7fbfb (card azulado suave)

Recomendações de uso
--------------------
- Hero / Branding: usar gradientes que misturem `primary-500` com `accent-500` e leve toque de `petrol-500` para contraste.
- CTAs: usar `cta.primary` em botões primários e `cta.secondary` para ações alternativas.
- Cards: use `card.*` para diferenciar blocos — combinações de imagem + legenda com sombra `pop`.
- Fundo: `ui-bg` como fundo geral; seções podem ter `ui-section` para contraste. Inserir áreas vibrantes com gradientes sutis.
- Tipografia: texto principal em `charcoal-700`, textos secundários em `charcoal-300`.

Exemplos CSS/Tailwind
---------------------
- Botão principal: `bg-[color:var(--primary-500)] hover:bg-[color:var(--primary-600)] text-white rounded-full px-6 py-2`
- Card destaque: `bg-card-1 shadow-pop rounded-xl p-4`
- Hero gradient: `bg-gradient-to-r from-primary-500 via-accent-500 to-petrol-500`

Acessibilidade
--------------
- Validar contraste de `primary-500` com texto branco em botões; usar `primary-600` no hover para visibilidade.
- Para textos longos, preferir `charcoal-700` sobre branco em fundos claros.

Observações finais
-----------------
Esta paleta foi pensada para ser marcante, comercial e acolhedora — adequada para marketing imobiliário voltado a jovens compradores e clientes que buscam sensação de conquista e proximidade humana.
