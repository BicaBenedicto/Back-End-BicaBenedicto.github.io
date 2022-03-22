const get = [
  {
    dataValues: {
      id: 1,
      name: "Pixel Art",
      description: "O projeto é um site de desenho, com algumas paletas de cores aleatórias que são geradas, podendo adicionar, remover ou alterar a cor das paletas conforme desejar, o quadro inicial é de 5 por 5, podendo chegar até 50 por 50 para fazer desenhos em pixel art da maneira que preferir.",
      image: "https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/pixels-art.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3BpeGVscy1hcnQucG5nIiwiaWF0IjoxNjQ3NzM4MzE3LCJleHAiOjE5NjMwOTgzMTd9.U-mcT5i9ZIYMTHkMUcWfAL8KYjUF8mM5-O9ZMC4KMF8",
      site: "/projects/pixel-art/",
      rep: "https://github.com/BicaBenedicto/pixel-art",
    },
  },
  {
    dataValues: {
      id: 2,
      name: "Trybewallet",
      description: "O projeto é um site de cambio, utilizando uma API que informa os valores do cambio para Real, sendo possível anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.",
      image: "https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/trybewallet.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3RyeWJld2FsbGV0LnBuZyIsImlhdCI6MTY0NzczODM3NiwiZXhwIjoxOTYzMDk4Mzc2fQ.Pwi1Ys6ZNZxrDgOHbuRAS1UwQMI9GH_NzHFja6oVPDQ",
      site: "",
      rep: "https://github.com/BicaBenedicto/trybewallet",
    },
  },
];

const update = {
  params: { id: 2 },
  body: {
    name: 'Teste',
    description: 'O projeto é um site, utilizando uma API que informa os valores do cambio para Real, sendo possível anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/teste',
    image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/trybewallet.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3RyeWJld2FsbGV0LnBuZyIsImlhdCI6MTY0NzczODM3NiwiZXhwIjoxOTYzMDk4Mzc2fQ.Pwi1Ys6ZNZxrDgOHbuRAS1UwQMI9GH_NzHFja6oVPDQ',
  },
  response: {
    id: 2,
    name: 'Teste',
    description: 'O projeto é um site, utilizando uma API que informa os valores do cambio para Real, sendo possível anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/teste',
    image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/trybewallet.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3RyeWJld2FsbGV0LnBuZyIsImlhdCI6MTY0NzczODM3NiwiZXhwIjoxOTYzMDk4Mzc2fQ.Pwi1Ys6ZNZxrDgOHbuRAS1UwQMI9GH_NzHFja6oVPDQ',
  },
};

const create = {
  body: {
    name: 'Teste',
    description: 'O projeto é um site, utilizando uma API que informa os valores do cambio para Real, sendo possível anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/teste',
    image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/trybewallet.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3RyeWJld2FsbGV0LnBuZyIsImlhdCI6MTY0NzczODM3NiwiZXhwIjoxOTYzMDk4Mzc2fQ.Pwi1Ys6ZNZxrDgOHbuRAS1UwQMI9GH_NzHFja6oVPDQ',
    technologies: ['Git'],
  },
  response: {
    id: 3,
    name: 'Teste',
    description: 'O projeto é um site, utilizando uma API que informa os valores do cambio para Real, sendo possível anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/teste',
    image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/trybewallet.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3RyeWJld2FsbGV0LnBuZyIsImlhdCI6MTY0NzczODM3NiwiZXhwIjoxOTYzMDk4Mzc2fQ.Pwi1Ys6ZNZxrDgOHbuRAS1UwQMI9GH_NzHFja6oVPDQ',
  },
};

const remove = {
  params: { id: 3 },
};

module.exports = {
  get,
  update,
  create,
  remove,
};
