const Comment = require('../models/comment');

class CommentService {
    async getComments() {
        try {
            return await Comment.find();
        } catch (err) {
            throw err;
        }
    }

    async getCommentById(commentID) {
        try {
            return await Comment.findById(commentID);
        } catch (err) {
            throw err;
        }
    }

    async createComment(data) {
        try {
            const comment = new Comment(data);
            return await comment.save();
        } catch (err) {
            throw err;
        }
    }

    async updateComment(commentID, data) {
        try {
            return await Comment.findByIdAndUpdate(commentID, data, { new: true });
        } catch (err) {
            throw err;
        }
    }

    async deleteComment(commentID) {
        try {
            return await Comment.findByIdAndRemove(commentID);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = CommentService;
