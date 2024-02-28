const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/usuariosController");

const router = Router();

router.get("/", usuariosGet);

/* router.get("/", (req, res) => {
  res.json({
    msg: "get API",
  });
}); */

router.post("/", usuariosPost);
/* router.post("/", (req, res) => {
  res.status(201).json({
    msg: "get API",
  });
}); */
router.put("/:id", usuariosPut);

/* router.put("/", (req, res) => {
  res.status(500).json({
    msg: "get API",
  });
}); */

router.patch("/", usuariosPatch);
router.delete("/", usuariosDelete);
/* router.delete("/", (req, res) => {
  res.json({
    msg: "get API",
  });
}); */

module.exports = router;
