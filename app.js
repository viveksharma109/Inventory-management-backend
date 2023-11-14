const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require("./routes/user management/index");
const connectDb = require("./db/index");


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDb();
app.use(express.json());
app.use(cors());
app.use(router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });