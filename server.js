const express = require('express');
const path = require('path');
const chatRouter = require('./api/chat');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Use chat API route
app.use('/api/chat', chatRouter);

// Serve the main page for all routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 AI Avatar Server running at http://localhost:${PORT}`);
  console.log(`📱 Mobile-first AI Avatar Assistant ready!`);
  console.log(`🎭 Multiple avatars available for selection`);
  console.log(`🎤 Voice recognition and speech synthesis enabled`);
}); 