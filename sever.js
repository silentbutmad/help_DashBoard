const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000; // Render assigns a port automatically

// Change 'dist' to 'build' if you are using Create React App instead of Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Handles any requests that don't match the ones above to prevent 404 errors
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
