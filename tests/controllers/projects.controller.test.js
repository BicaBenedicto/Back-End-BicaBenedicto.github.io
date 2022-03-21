const ProjectsController = require('../../controllers/projects.controller');
const SequelizeMock = require('sequelize-mock');

describe('Testa requisições do controller de projetos', () => {
  describe('Verifica rota get, se retorna o esperado', () => {
    const response = {};
    const request = {};
    let next;

    before(async () => {
      const DBConnectionMock = new SequelizeMock();

      ProjetoMock = DBConnectionMock.define('Projeto', {
        name: 'Pixel Art',
        description: 'O projeto é um site de desenho, com algumas paletas de cores aleatórias que são geradas, podendo adicionar, remover ou alterar a cor das paletas conforme desejar, o quadro inicial é de 5 por 5, podendo chegar até 50 por 50 para fazer desenhos em pixel art da maneira que preferir.',
        site: '/projects/pixel-art/',
        rep: 'https://github.com/BicaBenedicto/pixel-art',
        image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/projects/pixels-art.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL3Byb2plY3RzL3BpeGVscy1hcnQucG5nIiwiaWF0IjoxNjQ3NzM4MzE3LCJleHAiOjE5NjMwOTgzMTd9.U-mcT5i9ZIYMTHkMUcWfAL8KYjUF8mM5-O9ZMC4KMF8',
      });
    });

    it('Verifica que rota retorna o esperado', async () => {
      const teste = await ProjectsController.get(request, response, next);
      console.log(teste);
    });
  });

});
