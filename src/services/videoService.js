const Video = require('../models/video');

class VideoService {
    async getVideos() {
        try {
            return await Video.find();
        } catch (err) {
            throw err;
        }
    }

    async getVideoById(videoID) {
        try {
            return await Video.findById(videoID);
        } catch (err) {
            throw err;
        }
    }

    async createVideo(data) {
        try {
            const video = new Video(data);
            return await video.save();
        } catch (err) {
            throw err;
        }
    }

    async updateVideo(videoID, data) {
        try {
            return await Video.findByIdAndUpdate(videoID, data, { new: true });
        } catch (err) {
            throw err;
        }
    }

    async deleteVideo(videoID) {
        try {
            return await Video.findByIdAndRemove(videoID);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = VideoService;
