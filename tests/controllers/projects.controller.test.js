const { expect } = require('chai');
const sinon = require('sinon');
const ProjectsController = require('../../controllers/projects.controller');
const { Projeto, Tecnologia, TecnologiasProjeto} = require('../../models');
const Mocks = require('../mocks');

describe('Testa requisições do controller de projetos', () => {
  describe('Verifica se rota get retorna o esperado', () => {
    const response = {};
    const request = {};
    let next;

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      response.end = sinon.stub().returns();

      sinon.stub(Projeto, 'findAll').resolves(Mocks.projetos.get);
      sinon.stub(Tecnologia, 'findOne').resolves(Mocks.tecnologias.get[0].dataValues);
      sinon.stub(TecnologiasProjeto, 'findAll').resolves(Mocks.tecnologiasProjetos.get);
    });

    after(async () => {
      Tecnologia.findOne.restore();
      Projeto.findAll.restore();
      TecnologiasProjeto.findAll.restore();
    })

    it('Retorna status 200', async () => {
      await ProjectsController.get(request, response, next);
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

      sinon.stub(Projeto, 'update').resolves(Mocks.projetos.update.response);
      sinon.stub(Tecnologia, 'findOne').resolves(Mocks.tecnologias.get[0]);
      sinon.stub(TecnologiasProjeto, 'findAll').resolves(Mocks.tecnologiasProjetos.get);

    });

    after(async () => {
      Tecnologia.findOne.restore();
      Projeto.update.restore();
      TecnologiasProjeto.findAll.restore();
    })

    it('Retorna status 200', async () => {
      await ProjectsController.update(request, response, next);
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

      request.body = Mocks.projetos.create.body;

      sinon.stub(Projeto, 'findOrCreate').resolves([Mocks.projetos.create.response]);
      sinon.stub(Tecnologia, 'findOne').resolves(Mocks.tecnologias.get[0]);
      sinon.stub(TecnologiasProjeto, 'create').resolves(Mocks.tecnologiasProjetos.get);

    });

    after(async () => {
      Tecnologia.findOne.restore();
      Projeto.findOrCreate.restore();
      TecnologiasProjeto.create.restore();
    })

    it('Retorna status 201', async () => {
      await ProjectsController.create(request, response, next);
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

      request.params = Mocks.projetos.remove.params;

      sinon.stub(Projeto, 'destroy').resolves([Mocks.projetos.create.response]);
      sinon.stub(Tecnologia, 'findOne').resolves(Mocks.tecnologias.get[0]);
      sinon.stub(TecnologiasProjeto, 'destroy').resolves(Mocks.tecnologiasProjetos.get);

    });

    after(async () => {
      Tecnologia.findOne.restore();
      Projeto.destroy.restore();
      TecnologiasProjeto.destroy.restore();
    })

    it('Retorna status 204', async () => {
      await ProjectsController.remove(request, response, next);
      expect(response.status.calledWith(204)).to.be.equal(true);
    });
  });
});
