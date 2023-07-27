const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        alias: 'videoID'
    },
    urlImageThumbnail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Video', videoSchema);
