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
      process.exit(1); 
    });
};

const getDatabaseStatus = () => {
  return mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
};

module.exports = { connectDatabase, getDatabaseStatus };


// mongoose.connection.readyState:

// This checks the current connection state to the MongoDB database.
// The readyState property can have different values based on the connection status:
// 0: disconnected
// 1: connected
// 2: connecting
// 3: disconnecting
// === 1:

// This compares the readyState to 1, which represents a connected state.

