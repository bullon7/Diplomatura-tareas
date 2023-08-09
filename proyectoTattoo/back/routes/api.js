var express = require('express');
var router = express.Router();
var promocionesModel = require('./../models/promocionesModel');
var cloudinary = require('cloudinary').v2;

router.get('/promociones', async function(req, res, next) {
    let promociones = await promocionesModel.getPromociones();
  
    promociones = promociones.map(promociones => {
      if (promociones.img_id) {
        const imagen = cloudinary.url(promociones.img_id, {
          width: 880,
          height: 380,
          crop: 'pad'
        });
        return {
          ...promociones,
          imagen
        } 
      } else {
        return {
          ...promociones,
          imagen: ''
        }
      }
    });

    res.json(promociones);
});

module.exports = router;