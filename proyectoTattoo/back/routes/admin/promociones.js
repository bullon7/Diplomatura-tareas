var express = require('express');
var router = express.Router();
var promocionesModel = require('../../models/promocionesModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/* GET home page. */
router.get('/', async function(req, res, next) {
  var promociones = await promocionesModel.getPromociones();

  promociones = promociones.map(promocion => {
    if (promocion.img_id) {
      const imagen = cloudinary.image(promocion.img_id, {
        width: 80,
        height: 80,
        crop: 'pad'
      });
      return {
        ...promocion,
        imagen
      }
    } else {
      return {
        ...promocion,
        imagen: ''
      }
    }
  });


  res.render('admin/promociones',{
    layout: 'admin/layout',
    usuario: req.session.nombre,
    promociones
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {
    let img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await promocionesModel.insertPromocion({
        ...req.body,
        img_id
      });
      res.redirect('/admin/promociones')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la promocion'
    })
  }
});

// Para eliminar una promocion 
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let promocion = await promocionesModel.getPromocionesById(id);
  if (promocion.img_id) {
    await (destroy(promocion.img_id));
  }

  await promocionesModel.deletePromocionById(id);
  res.redirect('/admin/promociones');
})

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  // console.log(req.params.id);
  var promocion = await promocionesModel.getPromocionesById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    promocion
  })
});

router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null,
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    } 
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    }

    await promocionesModel.modificarPromocionesById(obj, req.body.id);
    res.redirect('/admin/promociones');
  } catch (error) {
    // console.log(error)
    
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la promocion'
    })
  }
}) 

module.exports = router