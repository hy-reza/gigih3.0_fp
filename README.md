# Tokopedia Play Clone API

This API is designed to mimic some functionalities of the Tokopedia Play platform, built with Node.js, Express.js, and MongoDB.

## Database Structure

The database for this API consists of three collections:

1. **Videos**: Each document in the Videos collection has a videoID (unique identifier), and a URL for the video thumbnail.

2. **Products**: Each document in the Products collection has a productID (unique identifier), a link to the product, a title, a price, and a videoID (to link the product to a video).

3. **Comments**: Each document in the Comments collection has a username (of the commenter), the comment text, a videoID (to link the comment to a video), and a timestamp of when the comment was posted.

## API Structure

The API follows a RESTful design and is divided into three main parts, each corresponding to a collection in the database:

1. **Video Routes**: Handles operations related to videos. Includes endpoints to create, read, update, and delete videos.

2. **Product Routes**: Handles operations related to products. Includes endpoints to create, read, update, and delete products.

3. **Comment Routes**: Handles operations related to comments. Includes endpoints to create, read, update, and delete comments.

For detailed information about the API endpoints and their request/response formats, please refer to the [API Documentation Gist](https://gist.github.com/username/gistid).

## Running Locally

To run the API locally, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/username/repo.git`.

2. Navigate to the project folder and install the necessary dependencies with `npm install`.

3. Make sure you have MongoDB running locally on your machine. If not, you can download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

4. Create a `.env` file in the root of your project and define your `MONGO_URI` (connection string for your MongoDB database) and `PORT` (port where you want the API to run, e.g., 3000).

5. Run the API with `npm start`.

6. You should now be able to send requests to `http://localhost:<Your_Port>/api`.
