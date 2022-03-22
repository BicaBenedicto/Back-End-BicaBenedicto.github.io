const get = [
  {
    dataValues:   {
      id: 1,
      name: "Git",
      description: "",
      image: "https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/icons/git.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL2ljb25zL2dpdC5zdmciLCJpYXQiOjE2NDc3Mzg2NDcsImV4cCI6MTk2MzA5ODY0N30.oDFL-iD8l5yRhoXGcVd0A1uGxORVV5qkYB1ZF0hCz_E"
    },
  },
  {
    dataValues:   {
      id: 2,
      name: "Css3",
      description: "",
      image: "https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/icons/css3.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL2ljb25zL2NzczMuc3ZnIiwiaWF0IjoxNjQ3NzM4NjIyLCJleHAiOjE5NjMwOTg2MjJ9.zLrtkEKktY5eFA5rzM8VcMaRB7i7dc2lSeKOX-EyQns"
    },
  },
  {
    dataValues: {
      id: 3,
      name: "React.js",
      description: "",
      image: "https://sveumdxbnahjywvugrjp.supabase.in/storage/v1/object/sign/portfolio-images/icons/react.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8taW1hZ2VzL2ljb25zL3JlYWN0LnN2ZyIsImlhdCI6MTY0NzczODY5OCwiZXhwIjoxOTYzMDk4Njk4fQ.czkA8zZlTuEZjWIEMWpu_k9V1nlywO36c5lRuOtUvH4"
    },
  },
];

const update = {
  params: { id: 2 },
  body: {
    name: "Java",
    description: "Seila poxa",
  },
  response: {
    id: 2,
    name: "Java",
    description: "Seila poxa",
  },
};

const create = {
  body: {
    name: "Java",
    description: "Seila poxa",
    image: "imagem qualquer.png",
  },
  response: {
    id: 2,
    name: "Java",
    description: "Seila poxa",
    image: "imagem qualquer.png",
  },
};

const remove = {
  params: { id: 2 },
};

module.exports = {
  get,
  update,
  create,
  remove,
};
