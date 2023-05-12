const Product = require('../models/productModel');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, type, brand, color, lostTime } = req.body;
    const product = new Product({
      name,
      type,
      brand,
      color,
      lostTime,
    });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Search for products by keywords and lost time
exports.searchProducts = async (req, res) => {
  try {
    const { keywords, lostTime } = req.body;

    // Build search query
    const query = {};
    if (keywords) {
      query.$text = { $search: keywords };
    }
    if (lostTime) {
      query.lostTime = lostTime;
    }

    const products = await Product.find(query);
    res.json({ products });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
