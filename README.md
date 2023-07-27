# Tokopedia Play Clone API

This API is designed to mimic some functionalities of the Tokopedia Play platform, built with Node.js, Express.js, and MongoDB.

## Database Structure

The database for this API consists of three collections:

1. **Videos**: Each document in the Videos collection has a videoID (unique identifier), and a URL for the video thumbnail.

| Field | Type | Description |
|-------|------|-------------|
| videoID | String | The unique identifier of a video |
| urlImageThumbnail | String | The URL of the video thumbnail |


2. **Products**: Each document in the Products collection has a productID (unique identifier), a link to the product, a title, a price, and a videoID (to link the product to a video).

| Field | Type | Description |
|-------|------|-------------|
| productID | String | The unique identifier of a product |
| linkProduct | String | The URL of the product |
| title | String | The title of the product |
| price | Number | The price of the product |
| videoID | String | The identifier of the video the product is associated with |

3. **Comments**: Each document in the Comments collection has a username (of the commenter), the comment text, a videoID (to link the comment to a video), and a timestamp of when the comment was posted.

| Field | Type | Description |
|-------|------|-------------|
| username | String | The username of the commenter |
| comment | String | The text of the comment |
| videoID | String | The identifier of the video the comment is associated with |
| timestamp | Date | The date and time when the comment was posted |

## API Structure

The API follows a RESTful design and is divided into three main parts, each corresponding to a collection in the database:

1. **Video Routes**: Handles operations related to videos. Includes endpoints to create, read, update, and delete videos.

2. **Product Routes**: Handles operations related to products. Includes endpoints to create, read, update, and delete products.

3. **Comment Routes**: Handles operations related to comments. Includes endpoints to create, read, update, and delete comments.

For detailed information about the API endpoints and their request/response formats, please refer to the [API Documentation Gist](https://gist.github.com/username/gistid).

## API Routes

| Endpoint | HTTP Method | Request Body | Success Response | Error Response |
|----------|-------------|--------------|------------------|----------------|
| `/api/videos` | GET | - | `200 OK` with array of all videos | `500 Internal Server Error` |
| `/api/videos/:id` | GET | - | `200 OK` with video object | `500 Internal Server Error` |
| `/api/videos` | POST | JSON object with `videoID` and `urlImageThumbnail` | `201 Created` with created video object | `500 Internal Server Error` |
| `/api/videos/:id` | PUT | JSON object with `videoID` and/or `urlImageThumbnail` | `200 OK` with updated video object | `500 Internal Server Error` |
| `/api/videos/:id` | DELETE | - | `200 OK` with delete message | `500 Internal Server Error` |
| `/api/products` | GET | - | `200 OK` with array of all products | `500 Internal Server Error` |
| `/api/products/:id` | GET | - | `200 OK` with product object | `500 Internal Server Error` |
| `/api/products` | POST | JSON object with `productID`, `linkProduct`, `title`, `price`, and `videoID` | `201 Created` with created product object | `500 Internal Server Error` |
| `/api/products/:id` | PUT | JSON object with `productID`, `linkProduct`, `title`, `price`, and/or `videoID` | `200 OK` with updated product object | `500 Internal Server Error` |
| `/api/products/:id` | DELETE | - | `200 OK` with delete message | `500 Internal Server Error` |
| `/api/comments` | GET | - | `200 OK` with array of all comments | `500 Internal Server Error` |
| `/api/comments/:id` | GET | - | `200 OK` with comment object | `500 Internal Server Error` |
| `/api/comments` | POST | JSON object with `username`, `comment`, and `videoID` | `201 Created` with created comment object | `500 Internal Server Error` |
| `/api/comments/:id` | PUT | JSON object with `username`, `comment`, and/or `videoID` | `200 OK` with updated comment object | `500 Internal Server Error` |
| `/api/comments/:id` | DELETE | - | `200 OK` with delete message | `500 Internal Server Error` |


## Running Locally

To run the API locally, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/hy-reza/gigih3.0_fp`.

2. Navigate to the project folder and install the necessary dependencies with `npm install`.

3. Make sure you have MongoDB running locally on your machine. If not, you can download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

4. Create a `.env` file in the root of your project and define your `DB_URL` (connection string for your MongoDB database) and `PORT` (port where you want the API to run, e.g., 3000).

5. Run the API with `npm start`.

6. You should now be able to send requests to `http://localhost:<Your_Port>/api`.
