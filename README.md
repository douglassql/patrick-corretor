## Especificação do projeto

Aplicação: landing page informativa para apresentação de imóveis e serviços imobiliários.

Stack técnico
- Vite + React + TypeScript
- Tailwind CSS para estilos
- Framer Motion para animações suaves

Scripts principais
- `npm install` — instalar dependências
- `npm run dev` — iniciar servidor de desenvolvimento (padrão Vite)
- `npm run build` — gerar build de produção em `dist`
- `npm run preview` — pré-visualizar build localmente

Estrutura relevante
- `src/` — código-fonte React + TypeScript
- `src/components/` — componentes da interface (Hero, Featured, Financing, etc.)
- `src/data/` — dados estáticos consumidos pelos componentes
- `src/styles/` — folhas e configurações do Tailwind
- `assets/img/` — imagens públicas (avatar, selo, galeria)

Notas de operação
- O projeto destina-se a ser uma landing estática; o conteúdo de `src/data/` pode ser atualizado para apontar para imagens remotas ou arquivos locais.
- Deploy: hospede a pasta `dist` gerada pelo `npm run build` em qualquer serviço de hospedagem estática.

Contribuição
- Abra issues ou pull requests com alterações propostas. Mantenha alterações pequenas e com mensagens de commit descritivas.

Licença
- Consulte o mantenedor do repositório para a política de licença desejada.
