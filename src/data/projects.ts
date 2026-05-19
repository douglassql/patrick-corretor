export type Project = {
  id: string
  name: string
  short: string
  description: string
  beds?: string
  area?: string
  badges: string[]
  gallery: string[]
  location: string
  amenities: string[]
  metro?: string
  detailsUrl: string
  contactWhatsApp?: string
}

const projects: Project[] = [
  {
    id: 'vila-sonia',
    name: 'Vibra Parque Vila Sônia',
    short: 'Apartamentos de 1 e 2 dorms — Lazer completo e opções HIS',
    description: 'Localizado na Vila Sônia (Zona Oeste, SP). Unidades 1 e 2 dormitórios, lazer completo com piscina, coworking, espaço gourmet, pet place e mais. Próximo ao Parque Vila Sônia e transporte público.',
    beds: '1 e 2 dorms',
    area: '32–58 m²',
    badges: ['Lazer Completo','Próximo ao metrô','Minha Casa Minha Vida','1-2 Dorms'],
    gallery: [
      'https://vibraresidencial.com.br/wp-content/uploads/2025/12/VIB_Vibra_PqVilaSonia_Banner_Desktop_V1_JB-2-1.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2025/12/CAE-IMG-DC-0001-POR-R04-1.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2025/12/CAE-IMG-DC-0002-FIT-R03-1.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2025/12/CAE-IMG-DC-0001-PIS-R04-1.jpg'
    ],
    location: 'Rua Caminho do Engenho, 584 — Vila Sônia, São Paulo',
    amenities: ['Piscina adulto e infantil','Salão de festas','Espaço Gourmet','Coworking','Pet Place','Playground'],
    metro: 'Estação Vila Sônia — Linha 4 (aprox. 6 min de carro)',
    detailsUrl: 'https://vibraresidencial.com.br/produtos/vibra-parque-vila-sonia/',
    contactWhatsApp: '5511985384538'
  },
  {
    id: 'vila-prudente',
    name: 'Vibra Parque Vila Prudente',
    short: '1 e 2 dorms — Localização estratégica e mobilidade',
    description: 'Empreendimento em Vila Ema / Vila Prudente com unidades de 1 e 2 dormitórios. Lazer completo com piscina, playground, academia, salão de festas e espaços gourmet. Próximo à estação Oratório (Linha 15-Prata).',
    beds: '1 e 2 dorms',
    area: '41 m² (exemplo de planta)',
    badges: ['Lazer Completo','Próximo ao metrô','1-2 Dorms'],
    gallery: [
      'https://vibraresidencial.com.br/wp-content/uploads/2026/02/VIB_Vibra_PQ_Vila_Prudente_Banner_Desktop_V2_JB.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2026/03/SMP-IMG-DC-0001_T41-R00-scaled.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2026/02/SMP-IMG-DC-0001-PIS-R00.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2026/02/SMP-IMG-DC-0001-PLY-R00.jpg'
    ],
    location: 'Av. Professor Luiz Ignácio Anhaia Mello, 3500 — Vila Ema / Vila Prudente, São Paulo',
    amenities: ['Piscina','Playground','Academia','Salão de festas','Espaços gourmet','Pet Care'],
    metro: 'Estação Oratório — Linha 15-Prata (≈ 800m)',
    detailsUrl: 'https://vibraresidencial.com.br/produtos/vibra-parque-vila-prudente/',
    contactWhatsApp: '5511985384538'
  },
  {
    id: 'rio-bonito',
    name: 'Vibra Rio Bonito',
    short: '2 dorms — Lazer completo em bairro com forte área de lazer',
    description: 'Localizado próximo à Represa do Guarapiranga, com apartamentos de 2 dormitórios, lazer completo, pet place, piscinas e proximidade com estações CPTM (Linha 9-Esmeralda).',
    beds: '2 dorms',
    area: 'ex.: 58 m²',
    badges: ['Lazer Completo','Próximo ao metrô','2 Dorms'],
    gallery: [
      'https://vibraresidencial.com.br/wp-content/uploads/2026/02/VIB_Vibra_RioBonito_Banner_Desktop_V2_VP-1.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2025/12/OLV-IMG-DC-0001-POR-R00.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2025/12/OLV-IMG-DC-0001-PIS-R00.jpg',
      'https://vibraresidencial.com.br/wp-content/uploads/2025/12/OLV-IMG-DC-0001-PLA-R00.jpg'
    ],
    location: 'Rua Olívia Guedes Penteado, 1184 — Socorro, São Paulo',
    amenities: ['Piscina adulto e infantil','Salão de festas','Academia','Playground','Pet Care'],
    metro: 'Estações Socorro/Jurubatuba — CPTM Linha 9 (≈ 5–10 min)',
    detailsUrl: 'https://vibraresidencial.com.br/produtos/vibra-rio-bonito/',
    contactWhatsApp: '5511985384538'
  }
]

export default projects
