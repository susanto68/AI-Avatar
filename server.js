import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import chatHandler from './api/chat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Use chat API route
app.post('/api/chat', chatHandler);

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