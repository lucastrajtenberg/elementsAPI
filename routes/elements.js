var express = require('express');
var router = express.Router();

const elementsController = require('../controllers/elements.controller')

router.get('/', elementsController.getElements)

router.post('/new', elementsController.addElement)

router.delete('/delete/:id', elementsController.deleteElement)

router.put('/update/:id', elementsController.updateElement)

router.patch('/modify/:id', elementsController.modifyElement)

module.exports = router;