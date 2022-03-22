const tecnologias = {
  update: {
    params_correct: { id: 1 },
    params_wrong: { id: 10 },
    body_wrong_1: { 
      name: 'A',
      description: 'uma descrição qualquer',
    },
    body_wrong_2: { 
      name: 'Nome qualquer',
      description: 'Não',
    },
    body_correct: { 
      name: 'Nome qualquer',
      description: 'Uma descrição qualquer',
    },
  },
  create: {
    body_wrong_1: {
      description: 'Uma descrição qualquer',
      image: 'Imagem qualquer',
    },
    body_wrong_2: {
      name: 'Nome qualquer',
      image: 'Imagem qualquer',
    },
    body_wrong_3: {
      name: 'Nome qualquer',
      description: 'Uma descrição qualquer',
    },
    body_wrong_4: {
      name: 'Ac',
      description: 'Uma descrição qualquer',
      image: 'Imagem qualquer',
    },
    body_wrong_5: {
      name: 'Nome qualquer',
      description: 'Não',
      image: 'Imagem qualquer',
    },
  },
  remove: {
    params_wrong_1: {},
    params_wrong_2: { id: 20 },
  }
};

module.exports = {
  tecnologias,
};
