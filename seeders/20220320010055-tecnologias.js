'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Tecnologias',
    [
      {
        name: 'Git',
        description: '',
        image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/icons/git.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL2ljb25zL2dpdC5zdmciLCJpYXQiOjE2NDc3Mzg2NDcsImV4cCI6MTk2MzA5ODY0N30.oDFL-iD8l5yRhoXGcVd0A1uGxORVV5qkYB1ZF0hCz_E',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Css3',
        description: '',
        image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/icons/css3.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL2ljb25zL2NzczMuc3ZnIiwiaWF0IjoxNjQ3NzM4NjIyLCJleHAiOjE5NjMwOTg2MjJ9.zLrtkEKktY5eFA5rzM8VcMaRB7i7dc2lSeKOX-EyQns',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'React.js',
        description: '',
        image: 'https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/icons/react.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL2ljb25zL3JlYWN0LnN2ZyIsImlhdCI6MTY0NzczODY5OCwiZXhwIjoxOTYzMDk4Njk4fQ.czkA8zZlTuEZjWIEMWpu_k9V1nlywO36c5lRuOtUvH4',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Tecnologias', null, {}),
};
