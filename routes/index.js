var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('plantilla', { title: 'Inicio', archivo: "./dinamicos/home", pagina: "Inicio", descripcion:"Bienvenidos a la Biblioteca Virtual de Carlos y Walter." });
});

module.exports = router;
