// Edite aqui os textos, os links e as informações do portfólio.
export const site = {
  name: 'Isaque Tacchi',
  studio: 'IT Creative',
  descriptor: 'Estúdio criativo · Produção audiovisual',
  instagram: { label: '@itcreative.co', url: 'https://www.instagram.com/itcreative.co/' },
  navigation: [
    { id: 'marca', label: 'A marca', number: '01' },
    { id: 'sobre', label: 'Quem sou', number: '02' },
    { id: 'dedicacao', label: 'Dedicação', number: '03' },
    { id: 'contato', label: 'Contato', number: '04' },
  ],
  hero: {
    photo: { src: '/assets/isaque-tacchi-pb.png' },
    eyebrow: 'Seu projeto, pelo meu olhar.',
    title: ['Sua essência.', 'Em evidência.'],
    description: 'Produção audiovisual para apresentar sua marca, divulgar seu trabalho e registrar momentos que merecem ser vistos.',
    action: 'Vamos criar juntos',
    explore: 'Conheça quem cria',
  },
  about: {
    photo: { src: '/assets/isaque-tacchi-sobre.jpg', alt: 'Isaque Tacchi segurando um microfone e um celular, em preto e branco.' },
    title: 'Sou Isaque Tacchi.',
    caption: ['Isaque Tacchi', 'Em cena'],
    introduction: 'Antes de produzir, quero entender o que você quer comunicar.',
    description: 'Sou especialista em produção audiovisual. Meu trabalho começa pela escuta: conhecer sua ideia, seu público e sua mensagem. A partir daí, desenvolvo uma produção visual clara, com identidade e atenção ao acabamento.',
    values: [
      { title: 'Um olhar próprio', text: 'Uma linguagem visual que respeita a identidade da sua marca.' },
      { title: 'Cuidado em cada etapa', text: 'Atenção ao planejamento, à produção e ao acabamento.' },
      { title: 'Clareza na mensagem', text: 'Conteúdo pensado para quem você quer alcançar.' },
    ],
  },
  dedication: {
    title: ['A diferença está', 'no cuidado.'],
    description: 'Acompanho cada etapa de perto, do planejamento à entrega. Cuido da mensagem, dos formatos e do acabamento para que o resultado represente você e valorize o que faz.',
    countEyebrow: 'Experiência em cada entrega',
    count: '+500',
    countLabel: 'projetos realizados',
    statement: 'O mesmo cuidado, do primeiro contato à entrega.',
  },
  contact: {
    title: ['Seu próximo projeto', 'começa com uma conversa.'],
    description: 'Quer divulgar um serviço, apresentar seu espaço ou registrar um evento? Me conte o que você tem em mente para começarmos a planejar.',
    action: 'Conte sua ideia',
    steps: [
      { title: 'Conversa inicial', text: 'Você me conta a ideia, o objetivo e o prazo. Conversamos sobre o público e o que o projeto precisa comunicar.' },
      { title: 'Proposta', text: 'Apresento os serviços, os formatos, as entregas e o investimento. Alinhamos o que será realizado antes de começar.' },
      { title: 'Produção e entrega', text: 'Desenvolvo os materiais conforme o que combinamos, com atenção à mensagem e ao acabamento de cada entrega.' },
    ],
  },
};
