var express = require('express');
const { createProductController, showProductController, listProductController, deleteProductController, updateProductController } = require('../controllers/productsController');
var router = express.Router();

router.post('/products', createProductController)
router.get('/products/:productId', showProductController)
router.get('/products', listProductController)
router.delete('/products/:productId', deleteProductController)
router.put('/products/:productId', updateProductController)

module.exports = router;
