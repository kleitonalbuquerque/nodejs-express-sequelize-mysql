module.exports = (app) => {
  const usuarios = require("../controllers/usuario.controller");

  var router = require("express").Router();

  // Create a new Usuario
  router.post("/", usuarios.create);

  // Retrieve all Usuários
  router.get("/", usuarios.findAll);

  // Retrieve all published Usuários
  router.get("/ativo", usuarios.findAllActived);

  // Retrieve a single Usuario with id
  router.get("/:id", usuarios.findOne);

  // Update a Usuario with id
  router.put("/:id", usuarios.update);

  // Delete a Usuario with id
  router.delete("/:id", usuarios.delete);

  // Delete all Usuários
  router.delete("/", usuarios.deleteAll);

  app.use("/api/usuarios", router);
};
