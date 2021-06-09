const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequilize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a User
  const usuario = {
    nome: req.body.nome,
    id_perfil: req.body.id_perfil,
    ativo: req.body.ativo ? req.body.ativo : false,
  };

  // Save Usuario in the database
  Usuario.create(usuario)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuário.",
      });
    });
};

// Retrieve all Usuários from the database
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Usuario.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuarios.",
      });
    });
};

// Find a single Usuário with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Usuário with id=" + id,
      });
    });
};

// Update a Usuário by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Usuario.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuário was updated successfully.",
        });
      } else {
        message: `Cannot update Usuário with id=${id}. Maybe Usuário was not found or req.body is empty!`;
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Usuário with id=" + id,
      });
    });
};

// Delete a Usuário with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuario.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuário was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Usuário with id=${id}. Maybe Usuário was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Usuário with id=" + id,
      });
    });
};

// Delete all Usuário from the database
exports.deleteAll = (req, res) => {
  Usuario.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Usuário were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all usuários.",
      });
    });
};

// Find all active Usuário
exports.findAllActived = (req, res) => {
  Usuario.findAll({ where: { ativo: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuários.",
      });
    });
};
