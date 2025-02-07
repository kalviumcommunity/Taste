const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`Database connection failed: ${err.message}`);
      process.exit(1); // Exit if connection fails
    });
};

const getDatabaseStatus = () => {
  return mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
};

module.exports = { connectDatabase, getDatabaseStatus };
