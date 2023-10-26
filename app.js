const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the provided port or 3000 as the default

// Serve static files (HTML, CSS, images, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/signUp.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});