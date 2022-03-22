const { expect } = require('chai');
const sinon = require('sinon');
const TechnologiesController = require('../../controllers/technologies.controller');
const { Projeto, Tecnologia, TecnologiasProjeto} = require('../../models');
const Mocks = require('../mocks');

describe('Testa requisições do controller de tecnologias', () => {
  describe('Verifica se rota get retorna o esperado', () => {
    const response = {};
    const request = {};
    let next;

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      response.end = sinon.stub().returns();

      sinon.stub(Tecnologia, 'findAll').resolves(Mocks.tecnologias.get);
    });

    after(async () => {
      Tecnologia.findAll.restore();
    })

    it('Retorna status 200', async () => {
      await TechnologiesController.get(request, response, next);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Verifica se rota put retorna o esperado', () => {
    const response = {};
    const request = {};
    let next;

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      response.end = sinon.stub().returns();

      request.params = Mocks.projetos.update.params;
      request.body = Mocks.projetos.update.body;

      sinon.stub(Tecnologia, 'update').resolves(Mocks.tecnologias.update.response);

    });

    after(async () => {
      Tecnologia.update.restore();
    })

    it('Retorna status 200', async () => {
      await TechnologiesController.update(request, response, next);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Verifica se rota post retorna o esperado', () => {
    const response = {};
    const request = {};
    let next;

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      response.end = sinon.stub().returns();

      request.body = Mocks.tecnologias.create.body;

      sinon.stub(Tecnologia, 'findOrCreate').resolves([Mocks.tecnologias.create.response]);
    });

    after(async () => {
      Tecnologia.findOrCreate.restore();
    })

    it('Retorna status 201', async () => {
      await TechnologiesController.create(request, response, next);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
  });

  describe('Verifica se rota delete retorna o esperado', () => {
    const response = {};
    const request = {};
    let next;

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      response.end = sinon.stub().returns();

      request.params = Mocks.tecnologias.remove.params;

      sinon.stub(Tecnologia, 'destroy').resolves(Mocks.tecnologias.get[0]);
      sinon.stub(TecnologiasProjeto, 'destroy').resolves(Mocks.tecnologiasProjetos.get);

    });

    after(async () => {
      Tecnologia.destroy.restore();
      TecnologiasProjeto.destroy.restore();
    })

    it('Retorna status 204', async () => {
      await TechnologiesController.remove(request, response, next);
      expect(response.status.calledWith(204)).to.be.equal(true);
    });
  });
});
