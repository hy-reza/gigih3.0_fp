const express = require('express');
const router = express.Router();
const ProductService = require('../services/productService');
const productService = new ProductService();

router.get('/', async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.json({
            meta: {
                message: "Products retrieved successfully",
                status: "success",
                code: 200
            },
            data: products
        });
    } catch (err) {
        res.status(500).json({
            meta: {
                message: err.message,
                status: "error",
                code: 500
            },
            data: {}
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.json({
            meta: {
                message: "Product retrieved successfully",
                status: "success",
                code: 200
            },
            data: product
        });
    } catch (err) {
        res.status(500).json({
            meta: {
                message: err.message,
                status: "error",
                code: 500
            },
            data: {}
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json({
            meta: {
                message: "Product created successfully",
                status: "success",
                code: 201
            },
            data: product
        });
    } catch (err) {
        res.status(500).json({
            meta: {
                message: err.message,
                status: "error",
                code: 500
            },
            data: {}
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        res.json({
            meta: {
                message: "Product updated successfully",
                status: "success",
                code: 200
            },
            data: product
        });
    } catch (err) {
        res.status(500).json({
            meta: {
                message: err.message,
                status: "error",
                code: 500
            },
            data: {}
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id);
        res.json({
            meta: {
                message: "Product deleted successfully",
                status: "success",
                code: 200
            },
            data: {}
        });
    } catch (err) {
        res.status(500).json({
            meta: {
                message: err.message,
                status: "error",
                code: 500
            },
            data: {}
        });
    }
});

module.exports = router;
