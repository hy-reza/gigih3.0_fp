const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const videoRoutes = require("./routes/videoRoutes")
require("dotenv/config")

const app = express();

app.use(express.json());
app.use(cors());


const prefix = "/api/v1/"
app.use(`${prefix}/videos`, videoRoutes);

const PORT = 8000 || process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server allready listening for request at port ${PORT}...`)
    )
  )
  .catch((error) => console.error(error));
