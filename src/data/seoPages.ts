export interface SeoPageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  badge: string;
  headline: string;
  subheadline: string;
  searchesMonthly: string;
  searchesContext: string;
  areaFocus: string;
  keyProblems: string[];
  keySolutions: {
    title: string;
    desc: string;
  }[];
  deliverables: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const SEO_PAGES: Record<string, SeoPageData> = {
  'site-para-advogado-trabalhista': {
    slug: 'site-para-advogado-trabalhista',
    title: 'Site para Advogado Trabalhista | Criação Profissional & Otimizada',
    metaTitle: 'Site para Advogado Trabalhista #1 | Especialistas em Direito do Trabalho',
    metaDescription: 'Criação de site para advogado trabalhista com foco em captação de clientes no Google e autoridade digital. 100% ético com a OAB. Peça seu orçamento.',
    keywords: [
      'site para advogado trabalhista',
      'criação de site direito do trabalho',
      'marketing jurídico trabalhista',
      'landing page direito do trabalho',
      'site para escritório trabalhista'
    ],
    badge: 'Especialistas em Direito do Trabalho',
    headline: 'Site de Alta Performance para Advogado Trabalhista',
    subheadline: 'Seja a primeira opção de trabalhadores e empresas quando procuram auxílio jurídico trabalhista no Google.',
    searchesMonthly: '+110.000 buscas/mês',
    searchesContext: 'Mais de 110.000 pessoas pesquisam mensalmente no Google sobre rescisão, horas extras, verbas rescisórias e assédio no trabalho.',
    areaFocus: 'Direito do Trabalho (Reclamante e Reclamada)',
    keyProblems: [
      'Trabalhadores buscam advogado trabalhista no Google no momento imediato da demissão ou problema na empresa.',
      'Sites genéricos não explicam com clareza os direitos trabalhistas e geram dúvidas em vez de contatos.',
      'A falta de um botão direto para WhatsApp faz o reclamante procurar outro escritório no mesmo instante.',
      'Concorrentes que anunciam no Google Ads com sites rápidos e responsivos captam a maior fatia dos clientes.'
    ],
    keySolutions: [
      {
        title: 'Estrutura de Contato Imediato',
        desc: 'Botão de WhatsApp e formulário de triagem rápida para o trabalhador relatar seu caso com sigilo e rapidez.'
      },
      {
        title: 'Páginas de Serviços Trabalhistas Detalhadas',
        desc: 'Sessões claras sobre rescisão indireta, cálculo de horas extras, equiparação salarial, acidentes de trabalho e assédio moral.'
      },
      {
        title: 'SEO Estratégico para Comarcas Locais',
        desc: 'Otimização com Google Maps e palavras-chave locais (ex: Advogado Trabalhista na sua cidade) para dominar as buscas locais.'
      },
      {
        title: 'Total Conformidade com o Provimento da OAB',
        desc: 'Linguagem sóbria, informativa e acolhedora, sem mercantilização ou promessa de causa ganha.'
      }
    ],
    deliverables: [
      'Design responsivo para celular (90% das buscas trabalhistas ocorrem no smartphone)',
      'Calculadora / Formulário de pré-atendimento para triagem de casos',
      'Integração com WhatsApp Oficial e E-mail Corporativo',
      'Hospedagem rápida de alta segurança SSL',
      'Blog para artigos sobre novidades da CLT e decisões do TST'
    ],
    faqs: [
      {
        q: 'O site para advogado trabalhista pode ter cálculo de rescisão?',
        a: 'Sim, pode ter formulários informativos de simulação para o cliente preencher dados básicos e entrar em contato para uma consulta formal, respeitando sempre o Código de Ética da OAB.'
      },
      {
        q: 'O site atende tanto quem defende empregados quanto empresas?',
        a: 'Sim! Estruturamos o site com páginas distintas para Reclamante (direitos dos trabalhadores) e Reclamada (assessoria trabalhista preventiva e contenciosa para empresas).'
      },
      {
        q: 'Em quanto tempo meu site trabalhista fica pronto?',
        a: 'Entre 7 e 15 dias úteis, entregue com domínio, hospedagem, e-mails configurados e botão de WhatsApp ativo.'
      }
    ]
  },

  'site-para-advogado-de-familia': {
    slug: 'site-para-advogado-de-familia',
    title: 'Site para Advogado de Família | Criação Especializada em Sucessões & Divórcios',
    metaTitle: 'Site para Advogado de Família #1 | Especialistas em Direito de Família',
    metaDescription: 'Criação de sites para advogados de família e sucessões. Transmita acolhimento, discrição e autoridade para clientes que buscam divórcio, pensão e inventário.',
    keywords: [
      'site para advogado de familia',
      'criação de site divorcio e inventario',
      'marketing juridico direito de familia',
      'landing page advogado de familia',
      'site escritorio de familia'
    ],
    badge: 'Especialistas em Direito de Família & Sucessões',
    headline: 'Site de Alta Sensibilidade e Conversão para Advogado de Família',
    subheadline: 'Construa autoridade, respeito e acolhimento para clientes em momentos decisivos de suas vidas pessoais e patrimoniais.',
    searchesMonthly: '+90.000 buscas/mês',
    searchesContext: 'Termos como divórcio rápido, pensão alimentícia, guarda compartilhada e inventário registram mais de 90 mil buscas mensais no Google.',
    areaFocus: 'Direito de Família, Divórcios e Planejamento Sucessório',
    keyProblems: [
      'Clientes com conflitos familiares exigem discrição absoluta e acolhimento psicológico no primeiro contato.',
      'Sites frios ou excessivamente corporativos afastam mães, pais e famílias que precisam de suporte sensível.',
      'Dúvidas urgentes sobre pensão ou inventário precisam de respostas claras para motivar o agendamento de consulta.',
      'Falta de apresentação clara do advogado diminui a confiança em causas que envolvem filhos e patrimônio familiar.'
    ],
    keySolutions: [
      {
        title: 'Design Sóbrio, Elegante e Acolhedor',
        desc: 'Cores, tipografia e imagens que transmitem segurança, empatia e discrição para situações familiares delicadas.'
      },
      {
        title: 'Divisão Clara por Demandas da Família',
        desc: 'Sessões separadas para Divórcio Consensual/Litigioso, Pensão Alimentícia, Guarda, União Estável e Inventário Extrajudicial.'
      },
      {
        title: 'Canal Direto de Atendimento Sigiloso',
        desc: 'Botão de WhatsApp e formulário de contato com garantia explícita de sigilo profissional.'
      },
      {
        title: 'Conteúdo Educativo que Quebra Objeções',
        desc: 'Explicações diretas e acessíveis sobre a diferença entre inventário em cartório e judicial, tipos de guarda e partilha de bens.'
      }
    ],
    deliverables: [
      'Layout adaptado a celulares para contato discreto a qualquer hora',
      'Apresentação humanizada da advogada ou advogado titular',
      'Integração com Google Maps do escritório físico',
      'Certificado de segurança SSL para tráfego seguro de dados sensíveis',
      'E-mail profissional corporativo (@seuescritorio.adv.br)'
    ],
    faqs: [
      {
        q: 'O site pode divulgar atuação em divórcio online?',
        a: 'Sim, o Provimento 205/2021 da OAB permite informar a prestação de serviços por meios digitais e telepresenciais, desde que sem promessas sensacionalistas.'
      },
      {
        q: 'Como o site ajuda a atrair inventários de maior valor?',
        a: 'Através de uma página específica sobre Inventário Extrajudicial e Planejamento Sucessório, transmitindo sofisticação técnica para famílias com patrimônio relevante.'
      }
    ]
  },

  'site-para-advogado-previdenciario': {
    slug: 'site-para-advogado-previdenciario',
    title: 'Site para Advogado Previdenciário | Especialistas em Benefícios e INSS',
    metaTitle: 'Site para Advogado Previdenciário #1 | Criação de Sites para Direito Previdenciário',
    metaDescription: 'Criação de site para advogado previdenciário. Capte aposentadorias, BPC/LOAS e revisões do INSS no Google com um site claro, rápido e responsivo.',
    keywords: [
      'site para advogado previdenciario',
      'criação de site aposentadoria inss',
      'landing page bpc loas advogado',
      'marketing juridico previdenciario',
      'site escritorio previdenciario'
    ],
    badge: 'Especialistas em Direito Previdenciário',
    headline: 'Site Estratégico para Advogado Previdenciário e Aposentadorias',
    subheadline: 'O canal digital definitivo para aposentados, segurados do INSS e beneficiários encontrarem seu escritório no Google.',
    searchesMonthly: '+85.000 buscas/mês',
    searchesContext: 'Diariamente milhares de brasileiros têm benefícios negados pelo INSS e buscam auxílio de advogados previdenciários na internet.',
    areaFocus: 'Aposentadorias, Benefícios por Incapacidade, BPC/LOAS e Revisões',
    keyProblems: [
      'O público previdenciário precisa de letras legíveis, layout limpo e linguagem simples sem jargões jurídicos complexos.',
      'Segurados que tiveram o benefício negado pelo INSS estão ansiosos e precisam de atendimento rápido pelo WhatsApp.',
      'Muitos escritórios previdenciários ainda não possuem site otimizado para celulares, perdendo clientes para quem anuncia.',
      'A falta de explicação das regras pós-reforma da Previdência gera desconfiança sobre o direito do segurado.'
    ],
    keySolutions: [
      {
        title: 'Usabilidade e Acessibilidade Máxima',
        desc: 'Tipografia com excelente contraste, botões grandes e navegação intuitiva para idosos e pessoas com deficiência.'
      },
      {
        title: 'Páginas Focadas em BPC/LOAS e Aposentadorias',
        desc: 'Seções destacadas para Aposentadoria por Tempo, Especial, Rural, Auxílio-Doença, BPC/LOAS e Planejamento Previdenciário.'
      },
      {
        title: 'Chamada para Análise de Caso no WhatsApp',
        desc: 'Botão visível em todas as telas convidando o segurado a enviar sua carta de indeferimento do INSS para triagem.'
      },
      {
        title: 'SEO Local Previdenciário',
        desc: 'Otimização com endereço e comarca para atrair aposentados da sua região que preferem atendimento presencial ou híbrido.'
      }
    ],
    deliverables: [
      'Site ultrarrápido com carregamento em menos de 2 segundos',
      'Botão flutuante de WhatsApp com mensagem de triagem de benefício',
      'Sessão com dúvidas frequentes sobre o INSS para rankeamento no Google',
      'Hospedagem dedicada com e-mail corporativo',
      'Conformidade integral com as normas de publicidade da OAB'
    ],
    faqs: [
      {
        q: 'O site para advogado previdenciário atrai clientes de outros estados?',
        a: 'Sim! Com o processo 100% eletrônico e o INSS digital, muitos escritórios previdenciários atendem segurados de todo o país através de sites e landing pages bem indexadas.'
      },
      {
        q: 'Posso colocar depoimentos de clientes no site?',
        a: 'O Código de Ética veda a exposição sensacionalista, mas permite a integração com o Google Meu Negócio, onde clientes reais avaliam a pontualidade e o atendimento do escritório.'
      }
    ]
  },

  'site-para-advogado-criminalista': {
    slug: 'site-para-advogado-criminalista',
    title: 'Site para Advogado Criminalista | Plantão 24 Horas & Alta Autoridade',
    metaTitle: 'Site para Advogado Criminalista #1 | Criação de Sites para Direito Penal',
    metaDescription: 'Criação de site para advogado criminalista com botão de plantão 24h, defesa em audiências de custódia e tribunal do júri. Autoridade e discrição no Google.',
    keywords: [
      'site para advogado criminalista',
      'criação de site direito penal',
      'landing page plantão criminal 24h',
      'site para escritorio criminal',
      'marketing juridico criminal'
    ],
    badge: 'Especialistas em Direito Penal & Compliance',
    headline: 'Site de Alta Urgência e Autoridade para Advogado Criminalista',
    subheadline: 'Esteja visível 24 horas por dia no Google para familiares e investigados que precisam de assistência jurídica criminal urgente.',
    searchesMonthly: '+65.000 buscas/mês',
    searchesContext: 'Casos de flagrante, prisão preventiva e audiência de custódia geram buscas urgentes no Google a qualquer hora do dia ou da noite.',
    areaFocus: 'Direito Penal, Tribunal do Júri, Execução Penal e Crimes Econômicos',
    keyProblems: [
      'Familiares de detidos buscam advogado criminalista no meio da madrugada e precisam de contato telefônico e WhatsApp instantâneo.',
      'Sites lentos ou que não deixam claro o plantão 24h perdem o cliente nos primeiros 5 segundos para concorrentes.',
      'Casos complexos (crimes tributários, lavagem de dinheiro) exigem design executivo para transmitir alta reputação.',
      'Exposição inadequada de causas criminais pode ferir a ética da OAB.'
    ],
    keySolutions: [
      {
        title: 'Destaque de Plantão Criminal 24 Horas',
        desc: 'Botões destacados para ligação direta e WhatsApp de plantão em casos de prisão em flagrante ou cumprimento de mandado.'
      },
      {
        title: 'Design Executivo & Imponente',
        desc: 'Visual sóbrio que transmite peso institucional, experiência forense e capacidade técnica para atuar em qualquer instância.'
      },
      {
        title: 'Discrição e Proteção de Dados',
        desc: 'Certificado SSL de segurança máxima e canal direto sem intermediários para assegurar a inviolabilidade da defesa.'
      },
      {
        title: 'Áreas de Atuação Penal Estruturadas',
        desc: 'Defesa em Inquéritos Policiais, Audiência de Custódia, Tribunal do Júri, Crimes Cibernéticos e Habeas Corpus nos Tribunais Superiores.'
      }
    ],
    deliverables: [
      'Botão de plantão criminal 24h em destaque no topo e rodapé',
      'Layout adaptado a smartphones para contratações emergenciais',
      'Seção de biografia técnica dos advogados penalistas',
      'Hospedagem estável sem quedas de servidor',
      'E-mail profissional para comunicações judiciais seguras'
    ],
    faqs: [
      {
        q: 'É permitido ter botão de plantão 24 horas no site criminal?',
        a: 'Sim, a OAB autoriza expressamente a informação de canais de atendimento em regime de plantão para casos de urgência e privação de liberdade.'
      },
      {
        q: 'O site pode abordar atuação em compliance e direito penal econômico?',
        a: 'Com certeza! Estruturamos páginas específicas para advocacia penal empresarial, crimes contra a ordem tributária e compliance criminal.'
      }
    ]
  },

  'site-para-advogado-tributarista': {
    slug: 'site-para-advogado-tributarista',
    title: 'Site para Advogado Tributarista & Empresarial | Alta Complexidade',
    metaTitle: 'Site para Advogado Tributarista #1 | Especialistas em Direito Tributário e Corporativo',
    metaDescription: 'Criação de site para advogado tributarista e escritórios de direito empresarial. Atraia médias e grandes empresas com autoridade e compliance.',
    keywords: [
      'site para advogado tributarista',
      'criação de site direito tributario',
      'marketing juridico tributario',
      'site advocacia empresarial',
      'landing page recuperação de créditos'
    ],
    badge: 'Especialistas em Direito Tributário & Empresarial',
    headline: 'Site Institucional Premium para Advogado Tributarista',
    subheadline: 'Posicione sua banca no topo do mercado corporativo para atrair empresários, diretores financeiros e CFOs.',
    searchesMonthly: '+45.000 buscas/mês',
    searchesContext: 'Empresas em busca de recuperação de tributos, defesas contra autuações fiscais e planejamento tributário recorrem ao Google para encontrar especialistas.',
    areaFocus: 'Direito Tributário, Planejamento Fiscal e Defesa Administrativa/Judicial',
    keyProblems: [
      'Decisores de empresas (CEOs, Diretores Financeiros) não contratam escritórios com sites amadores ou desatualizados.',
      'Serviços de alto valor (como teses tributárias e recuperação fiscal) exigem comprovação de autoridade técnica e cases.',
      'Sites sem blog técnico perdem tráfego para grandes bancas de São Paulo e capitais.',
      'Falta de clareza nas teses tributárias ofertadas impede que o cliente perceba o retorno financeiro.'
    ],
    keySolutions: [
      {
        title: 'Design Corporativo de Alto Padrão',
        desc: 'Estética refinada, limpa e executiva, alinhada aos padrões de auditorias e grandes bancas tributárias.'
      },
      {
        title: 'Apresentação de Soluções Tributárias Estratégicas',
        desc: 'Páginas detalhadas sobre Recuperação de Créditos Fiscais, Planejamento Tributário, Blindagem Patrimonial e Defesa em Execuções Fiscais.'
      },
      {
        title: 'Blog com Artigos de Doutrina e Jurisprudência',
        desc: 'Área para publicação de análises sobre julgamentos do STF/STJ e mudanças da Reforma Tributária para rankear no topo do Google.'
      },
      {
        title: 'Formulário Corporativo de Diagnóstico',
        desc: 'Campos específicos para empresas informarem faturamento ou regime tributário para uma reunião de apresentação técnica.'
      }
    ],
    deliverables: [
      'Layout responsivo corporativo de padrão internacional',
      'Área de publicações técnicas e informativos tributários periódicos',
      'Integração com e-mails corporativos dos sócios e associados',
      'Segurança HTTPS e infraestrutura para tráfego corporativo',
      'Suporte técnico e manutenção contínua inclusos'
    ],
    faqs: [
      {
        q: 'O site tributário pode abordar a Reforma Tributária?',
        a: 'Sim! Criamos blocos especiais sobre a Reforma Tributária (IBS/CBS), que é um dos temas mais buscados por empresas atualmente.'
      },
      {
        q: 'Como atrair empresas de outros estados pelo site?',
        a: 'Com páginas otimizadas para temas tributários federais (PIS/COFINS, IRPJ, CSLL) e atendimento online com reuniões por videoconferência.'
      }
    ]
  },

  'site-para-escritorio-de-advocacia': {
    slug: 'site-para-escritorio-de-advocacia',
    title: 'Site para Escritório de Advocacia | Criação Completa para Bancas & Sócios',
    metaTitle: 'Site para Escritório de Advocacia #1 | Especialistas em Bancas Jurídicas',
    metaDescription: 'Criação de site para escritórios de advocacia de pequeno, médio e grande porte. Apresente seus sócios, áreas de atuação e consolide sua autoridade digital.',
    keywords: [
      'site para escritorio de advocacia',
      'criação de site para banca de advogados',
      'desenvolvimento de site advocacia',
      'marketing digital escritorio advocacia',
      'site institucional sociedade de advogados'
    ],
    badge: 'Especialistas em Sociedades de Advogados',
    headline: 'Site Institucional Completo para Escritórios de Advocacia',
    subheadline: 'Apresente a história, os sócios, a equipe e a excelência da sua banca jurídica em um portal institucional de primeira linha.',
    searchesMonthly: '+150.000 buscas/mês',
    searchesContext: 'O termo "escritório de advocacia" e suas variações são os termos mais pesquisados do mercado jurídico em todo o Brasil.',
    areaFocus: 'Sociedades de Advogados, Bancas Multidisciplinares e Boutiques Jurídicas',
    keyProblems: [
      'Escritórios consolidados com anos de mercado físico perdem clientes para escritórios novos apenas por não terem um site moderno.',
      'Dificuldade em organizar múltiplas áreas de atuação e múltiplos sócios em uma estrutura visual limpa e elegante.',
      'Falta de e-mails corporativos profissionais nos domínios @seuescritorio.adv.br, passando impressão de informalidade.',
      'Insegurança de infringir o Código de Ética e sofrer sanções disciplinares na seccional da OAB.'
    ],
    keySolutions: [
      {
        title: 'Arquitetura Multidisciplinar Organizada',
        desc: 'Menu intuitivo com categorização clara de todas as áreas de atuação cível, trabalhista, empresarial, tributária e pública.'
      },
      {
        title: 'Página da Equipe e Sócios Fundadores',
        desc: 'Apresentação detalhada da formação acadêmica, número de OAB, titulações e artigos publicados de cada advogado da banca.'
      },
      {
        title: 'Múltiplos Canais de Atendimento',
        desc: 'Integração com WhatsApp de cada setor do escritório ou atendimento centralizado de triagem com formulário.'
      },
      {
        title: 'Infraestrutura Corporativa Chave na Mão',
        desc: 'Hospedagem dedicada, certificado de segurança SSL e criação de caixas de e-mail corporativo para toda a equipe.'
      }
    ],
    deliverables: [
      'Portal institucional completo com design exclusivo',
      'Páginas individuais para áreas do Direito e perfil dos advogados',
      'Blog jurídico com categorias e mecanismo de busca interna',
      'Hospedagem veloz com e-mails corporativos ilimitados',
      'Conformidade 100% atestada com o Provimento 205/2021 da OAB'
    ],
    faqs: [
      {
        q: 'O site suporta escritórios com filiais em mais de uma cidade?',
        a: 'Sim! Adicionamos mapa de atuação com endereços físicos, telefones locais e mapas do Google de cada uma das unidades do escritório.'
      },
      {
        q: 'Como funciona a manutenção do site do escritório?',
        a: 'A JurisSites oferece suporte técnico contínuo para atualizações de equipe, inclusão de novos artigos e garantia de segurança.'
      }
    ]
  },

  'landing-page-para-advogados': {
    slug: 'landing-page-para-advogados',
    title: 'Landing Page para Advogados | Alta Conversão para Google Ads',
    metaTitle: 'Landing Page para Advogados #1 | Alta Conversão para Campanhas no Google',
    metaDescription: 'Criação de landing page para advogados focada em Google Ads e conversão rápida no WhatsApp. Páginas ultrarrápidas em conformidade ética com a OAB.',
    keywords: [
      'landing page para advogados',
      'landing page juridica google ads',
      'pagina de captura advogado',
      'conversao trafego pago advogado',
      'criacao de landing page advocacia'
    ],
    badge: 'Especialistas em Tráfego Pago & Conversão Jurídica',
    headline: 'Landing Page de Alta Conversão para Advogados e Campanhas no Google',
    subheadline: 'Multiplique os contatos no seu WhatsApp transformando cliques de campanhas no Google Ads em consultas reais.',
    searchesMonthly: '+50.000 buscas/mês',
    searchesContext: 'Advogados que investem em anúncios no Google Ads precisam de páginas dedicadas e ultrarrápidas para evitar desperdício de verba publicitária.',
    areaFocus: 'Campanhas de Google Ads, Meta Ads e Captação Ativa de Clientes',
    keyProblems: [
      'Enviar tráfego de anúncios para a página inicial com dezenas de links faz o visitante se dispersar e sair sem entrar em contato.',
      'Páginas com carregamento lento no celular aumentam o custo por clique (CPC) e reduzem a pontuação de qualidade no Google Ads.',
      'Textos genéricos ou sem gatilhos de ação diminuem drasticamente a taxa de conversão em WhatsApp.',
      'Landing pages com promessas exageradas de ganho financeiro que resultam em suspensão de conta e processo na OAB.'
    ],
    keySolutions: [
      {
        title: 'Foco em Uma Única Ação (One-Goal Page)',
        desc: 'Todo o conteúdo e a hierarquia visual guiam o leitor diretamente para o botão de WhatsApp ou formulário de triagem.'
      },
      {
        title: 'Velocidade Ultrarrápida para Baixo CPC',
        desc: 'Código leve em React/Vite com carregamento instantâneo em 4G/5G, garantindo Índice de Qualidade 10/10 no Google Ads.'
      },
      {
        title: 'Copywriting Jurídico Persuasivo e Ético',
        desc: 'Argumentos fortes que conectam com a dor do cliente, explicam a solução e provocam o contato sem ferir a ética da OAB.'
      },
      {
        title: 'Rastreamento Completo de Conversões',
        desc: 'Instalação pronta de Google Tag Manager, Google Analytics 4 (GA4) e Meta Pixel com eventos de clique no WhatsApp.'
      }
    ],
    deliverables: [
      'Landing page de alta conversão para 1 área específica do Direito',
      'Tags e eventos de conversão configurados para Google Ads',
      'Botão flutuante de WhatsApp com mensagem pré-preenchida',
      'Design responsivo impecável para celular',
      'Hospedagem em nuvem de alta disponibilidade'
    ],
    faqs: [
      {
        q: 'Qual é a diferença entre um site institucional e uma landing page?',
        a: 'O site institucional apresenta toda a banca e suas diversas áreas de atuação. A landing page é focada em uma única demanda (ex: apenas inventários ou apenas demissões), ideal para anúncios pagos com taxa máxima de contato.'
      },
      {
        q: 'Vocês configuram as tags do Google Ads?',
        a: 'Sim! Entregamos a landing page com o rastreamento de cliques no WhatsApp e formulários configurados no Google Tag Manager para otimizar suas campanhas.'
      }
    ]
  },

  'quanto-custa-site-para-advogado': {
    slug: 'quanto-custa-site-para-advogado',
    title: 'Quanto Custa um Site para Advogado? | Preços, Custos e Guia Completo',
    metaTitle: 'Quanto Custa um Site para Advogado em 2026? Guia de Preços e Valores',
    metaDescription: 'Descubra quanto custa criar um site para advogado profissional em 2026. Entenda custos de domínio, hospedagem, design, manutenção e retorno financeiro.',
    keywords: [
      'quanto custa um site para advogado',
      'preço site advogado',
      'custo criacao de site advocacia',
      'valor site juridico',
      'orcamento site escritorio de advocacia'
    ],
    badge: 'Transparência & Guia de Investimento',
    headline: 'Quanto Custa um Site para Advogado? Guia Completo de Valores',
    subheadline: 'Tudo o que você precisa saber sobre valores, investimentos e o retorno financeiro de ter um site jurídico profissional.',
    searchesMonthly: '+35.000 buscas/mês',
    searchesContext: 'Milhares de advogados pesquisam mensalmente no Google sobre o valor para criar um site profissional e como evitar armadilhas de agências amadoras.',
    areaFocus: 'Planejamento Financeiro e Retorno sobre Investimento (ROI) na Advocacia',
    keyProblems: [
      'Agências genéricas cobram mensalidades abusivas e retêm o domínio e o código do escritório.',
      'Plataformas gratuitas "faça você mesmo" (Wix, etc.) ficam com visual amador e não rankeiam no topo do Google.',
      'Contratar sobrinhos ou freelancers amadores que abandonam o projeto pela metade sem suporte.',
      'Falta de clareza sobre custos recorrentes de hospedagem e renovação de domínio .adv.br.'
    ],
    keySolutions: [
      {
        title: 'Modelo Chave na Mão Sem Surpresas',
        desc: 'Preço justo com entrega completa: design, desenvolvimento, hospedagem, e-mails e suporte técnico sem taxas ocultas.'
      },
      {
        title: 'Propriedade 100% Sua',
        desc: 'O domínio e os dados pertencem integralmente ao seu escritório de advocacia.'
      },
      {
        title: 'Excelente Relação Custo-Benefício',
        desc: 'Um único cliente novo conquistado no Google muitas vezes já paga todo o investimento do site para o ano inteiro.'
      },
      {
        title: 'Condições Facilitadas de Pagamento',
        desc: 'Parcelamento facilitado para advogados autônomos, iniciantes e bancas de advocacia.'
      }
    ],
    deliverables: [
      'Orçamento personalizado transparente detalhando todos os itens inclusos',
      'Site completo com design profissional exclusivo',
      'Configuração de e-mails corporativos e domínio',
      'Hospedagem rápida inclusa',
      'Treinamento e suporte contínuo da equipe JurisSites'
    ],
    faqs: [
      {
        q: 'Qual é a faixa média de preço de um site para advogado no Brasil?',
        a: 'No mercado brasileiro, um site profissional de qualidade com hospedagem e e-mail corporativo varia entre R$ 1.500 e R$ 4.500, dependendo da complexidade das áreas e páginas. Na JurisSites, oferecemos pacotes especiais sob medida com excelente custo-benefício.'
      },
      {
        q: 'O site tem mensalidades obrigatórias?',
        a: 'O desenvolvimento do site é um valor único. Custos recorrentes são apenas os de servidor/hospedagem e manutenção básica anual, com valores extremamente acessíveis.'
      },
      {
        q: 'Como solicitar um orçamento personalizado?',
        a: 'Basta clicar no botão de WhatsApp e falar diretamente com a nossa equipe para receber uma proposta sob medida em menos de 10 minutos.'
      }
    ]
  }
};
