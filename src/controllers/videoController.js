const express = require('express');
const router = express.Router();
const VideoService = require('../services/videoService');
const videoService = new VideoService();

router.get('/', async (req, res) => {
    try {
        const videos = await videoService.getVideos();
        res.json({
            meta: {
                message: "Videos retrieved successfully",
                status: "success",
                code: 200
            },
            data: videos
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
        const video = await videoService.getVideoById(req.params.id);
        res.json({
            meta: {
                message: "Video retrieved successfully",
                status: "success",
                code: 200
            },
            data: video
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
        const video = await videoService.createVideo(req.body);
        res.status(201).json({
            meta: {
                message: "Video created successfully",
                status: "success",
                code: 201
            },
            data: video
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
        const video = await videoService.updateVideo(req.params.id, req.body);
        res.json({
            meta: {
                message: "Video updated successfully",
                status: "success",
                code: 200
            },
            data: video
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
        await videoService.deleteVideo(req.params.id);
        res.json({
            meta: {
                message: "Video deleted successfully",
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
