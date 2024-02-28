const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const query = req.params;

  res.json({
    msg: "get API -  controlador",
    query,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.status(200).json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  //const id = req.params.id;
  const { id } = req.params;

  res.status(201).json({
    msg: "put API -  controlador",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.status(201).json({
    msg: "patch API -  controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.status(204).json({
    msg: "delete PAI - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
};
