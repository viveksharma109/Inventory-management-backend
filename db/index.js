const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const dbURI = process.env.MONGODB_URI
// Connect to MongoDB (Update the connection URL)
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB")
  }
  catch (error) {
    console.error("Error connecting to MongoDB")
  }
}
module.exports = connectDB;
