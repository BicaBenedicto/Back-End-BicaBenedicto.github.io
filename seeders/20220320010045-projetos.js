'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Projetos',
    [
      {
        name: 'Pixel Art',
        description: 'O projeto é um site de desenho, com algumas paletas de cores aleatórias que são geradas, podendo adicionar, remover ou alterar a cor das paletas conforme desejar, o quadro inicial é de 5 por 5, podendo chegar até 50 por 50 para fazer desenhos em pixel art da maneira que preferir.',
        site: '/projects/pixel-art/',
        rep: 'https://github.com/BicaBenedicto/pixel-art',
        image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/pixels-art.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3BpeGVscy1hcnQucG5nIiwiaWF0IjoxNjQ3NzM4MzE3LCJleHAiOjE5NjMwOTgzMTd9.U-mcT5i9ZIYMTHkMUcWfAL8KYjUF8mM5-O9ZMC4KMF8',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Trybewallet',
        description: 'O projeto é um site de cambio, utilizando uma API que informa os valores do cambio para Real, sendo possível anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
        site: '',
        rep: 'https://github.com/BicaBenedicto/trybewallet',
        image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/trybewallet.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3RyeWJld2FsbGV0LnBuZyIsImlhdCI6MTY0NzczODM3NiwiZXhwIjoxOTYzMDk4Mzc2fQ.Pwi1Ys6ZNZxrDgOHbuRAS1UwQMI9GH_NzHFja6oVPDQ',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Projetos', null, {}),
};
