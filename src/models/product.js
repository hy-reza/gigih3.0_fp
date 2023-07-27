const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        alias: 'productID'
    },
    linkProduct: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    videoID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);
