const Product = require('../models/product');

class ProductService {
    async getProducts() {
        try {
            return await Product.find();
        } catch (err) {
            throw err;
        }
    }

    async getProductById(productID) {
        try {
            return await Product.findById(productID);
        } catch (err) {
            throw err;
        }
    }

    async createProduct(data) {
        try {
            const product = new Product(data);
            return await product.save();
        } catch (err) {
            throw err;
        }
    }

    async updateProduct(productID, data) {
        try {
            return await Product.findByIdAndUpdate(productID, data, { new: true });
        } catch (err) {
            throw err;
        }
    }

    async deleteProduct(productID) {
        try {
            return await Product.findByIdAndRemove(productID);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ProductService;
