var express = require('express');
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL NOMBRE_CLASE */
const package = require('../models').package;

router.get('/findAll/json', function(req, res, next) {

  /* MÉTODO ESTÁTICO findAll  */

  package.findAll({
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })
  .then(resultado => {
      res.json(resultado);
  })
  .catch(error => res.status(400).send(error))

});

module.exports = router;
