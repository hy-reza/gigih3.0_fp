const express = require('express');
const router = express.Router();
const VideoService = require('../services/videoService');
const videoService = new VideoService();

router.get('/', async (req, res) => {
    try {
        const videos = await videoService.getVideos();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const video = await videoService.getVideoById(req.params.id);
        res.json(video);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const video = await videoService.createVideo(req.body);
        res.status(201).json(video);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const video = await videoService.updateVideo(req.params.id, req.body);
        res.json(video);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await videoService.deleteVideo(req.params.id);
        res.json({ message: 'Video deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
