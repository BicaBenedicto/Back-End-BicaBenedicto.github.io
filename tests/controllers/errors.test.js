const { expect } = require('chai');
const sinon = require('sinon');
const TechnologiesController = require('../../controllers/technologies.controller');
const ProjectsController = require('../../controllers/projects.controller');
const { Projeto, Tecnologia, TecnologiasProjeto} = require('../../models');
const Mocks = require('../mocks');

describe('Testa casos de erro do controller de tecnologias', () => {
  describe('Verifica se rota post retorna o esperado', () => {
    const response = {};
    const request = {};
    let next;

    before(async () => {
      next = sinon.stub().returns();
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      response.end = sinon.stub().returns();

      request.body = Mocks.tecnologias.create.body;

      sinon.stub(Tecnologia, 'findOrCreate').resolves([Mocks.tecnologias.create.response, true]);
    });

    after(async () => {
      Tecnologia.findOrCreate.restore();
    })

    it('Chame a função next, caso tenha tecnologia com aquele nome', async () => {
      await TechnologiesController.create(request, response, next);
      expect(next.calledWith('alreadyExists')).to.be.equal(true);
    });
  });
});

describe('Testa casos de erro do controller de projetos', () => {
  describe('Verifica se rota post retorna o esperado', () => {
    const response = {};
    const request = {};
    let next;

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      response.end = sinon.stub().returns();

      request.body = Mocks.projetos.create.body;

      sinon.stub(Projeto, 'findOrCreate').resolves([Mocks.projetos.create.response, true]);
      sinon.stub(Tecnologia, 'findOne').resolves(Mocks.tecnologias.get[0]);
      sinon.stub(TecnologiasProjeto, 'create').resolves(Mocks.tecnologiasProjetos.get);

    });

    after(async () => {
      Tecnologia.findOne.restore();
      Projeto.findOrCreate.restore();
      TecnologiasProjeto.create.restore();
    })

    // it('Retorna status 201', async () => {
    //   await ProjectsController.create(request, response, next);
    //   expect(response.status.calledWith('alreadyExists')).to.be.equal(true);
    // });
  });
});
