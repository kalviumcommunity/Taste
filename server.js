const express = require('express'); // Import Express
const app = express(); // Create an instance of Express
const port = 3000; // Define the port

app.get('/ping', (req, res) => {
  res.send('Pong!'); 
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});