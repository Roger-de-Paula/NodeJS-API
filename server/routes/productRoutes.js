const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/authentication');
const productController = require('../controllers/productController');

// Protected route - Create a new product
router.post('/', authenticate, productController.createProduct);

// Protected route - Delete a product by ID
router.delete('/:id', authenticate, productController.deleteProduct);

// Public route - Search for products by keywords and lost time
router.get('/search', productController.searchProducts);

module.exports = router;
