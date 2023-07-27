const express = require('express');
const router = express.Router();
const CommentService = require('../services/commentService');
const commentService = new CommentService();

router.get('/', async (req, res) => {
    try {
        const comments = await commentService.getComments();
        res.json({
            meta: {
                message: "Comments retrieved successfully",
                status: "success",
                code: 200
            },
            data: comments
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
        const comment = await commentService.getCommentById(req.params.id);
        res.json({
            meta: {
                message: "Comment retrieved successfully",
                status: "success",
                code: 200
            },
            data: comment
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
        const comment = await commentService.createComment(req.body);
        res.status(201).json({
            meta: {
                message: "Comment created successfully",
                status: "success",
                code: 201
            },
            data: comment
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
        const comment = await commentService.updateComment(req.params.id, req.body);
        res.json({
            meta: {
                message: "Comment updated successfully",
                status: "success",
                code: 200
            },
            data: comment
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
        await commentService.deleteComment(req.params.id);
        res.json({
            meta: {
                message: "Comment deleted successfully",
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
