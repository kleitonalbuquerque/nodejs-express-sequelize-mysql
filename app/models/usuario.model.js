module.exports = (sequelize, Sequilize) => {
  const Usuario = sequelize.define("usuario", {
    nome: {
      type: Sequilize.STRING,
    },
    id_perfil: {
      type: Sequilize.INT,
    },
    ativo: {
      type: Sequilize.BOOLEAN,
    },
  });

  return Usuario;
};
