module.exports = (sequelize, Sequilize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequilize.STRING,
    },
    description: {
      type: Sequilize.STRING,
    },
    published: {
      type: Sequilize.BOOLEAN,
    },
  });

  return Tutorial;
};
