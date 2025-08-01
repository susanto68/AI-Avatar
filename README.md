# 🎭 AI Avatar Assistant

A mobile-first AI Avatar Assistant featuring multiple avatars with human-like voice interaction and domain-specific AI responses. Built with modern web technologies and powered by Google's Gemini AI.

## ✨ Features

### 🎭 Multi-Avatar Selection
- **11 Different Avatars**: Computer Teacher, English Teacher, Biology Teacher, Physics Teacher, Chemistry Teacher, Geography Teacher, Hindi Teacher, Mathematics Teacher, Doctor, Engineer, Lawyer
- **Domain-Specific Expertise**: Each avatar has specialized knowledge and personality
- **Dynamic System Prompts**: AI responses tailored to each avatar's domain

### 🎤 Voice Interaction
- **Speech Recognition**: Real-time voice input using browser APIs
- **Speech Synthesis**: Natural-sounding male voice responses
- **Voice Selection**: Automatically selects the best available male voice
- **Test Sound Feature**: Verify audio functionality before use

### 🎨 Animated Avatars
- **PNG-Based Animation**: Lightweight CSS/JS animations
- **Blinking Eyes**: Realistic eye movement
- **Speaking Animation**: Visual feedback during speech
- **Listening Animation**: Visual cues during voice input

### 📱 Mobile-First Design
- **Responsive Layout**: Optimized for smartphones, tablets, and desktops
- **Touch-Friendly**: Large buttons and intuitive navigation
- **Fast Loading**: Optimized for mobile networks
- **Dark/Light Theme**: Toggle between themes with localStorage persistence

### 🔐 Secure API Integration
- **Environment Variables**: Secure API key management
- **Fallback Responses**: Works without API keys for testing
- **Error Handling**: Graceful degradation on API failures

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn package manager
- Modern web browser with speech recognition support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/susanto68/Avatar.git
   cd Avatar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the project root:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   **To get a Gemini API key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Create a new API key
   - Copy the key to your `.env` file

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Selecting an Avatar
1. Browse the avatar selection screen
2. Click on any avatar card to select it
3. The chat interface will load with your chosen avatar
4. Each avatar has domain-specific knowledge and personality

### Voice Interaction
1. **Click "Talk"** to start voice recognition
2. **Speak your question** clearly into your microphone
3. **Wait for the response** - the avatar will speak back to you
4. **Click "Stop"** to end the conversation
5. **Click "Test"** to verify audio functionality

### Features
- **Back Button**: Return to avatar selection
- **Theme Toggle**: Switch between light and dark themes
- **Code Snippets**: View and copy code examples
- **Q&A Display**: Special formatting for question-answer pairs
- **Last Avatar Memory**: Automatically loads your last selected avatar

## 🛠️ Development

### Project Structure
```
Avatar/
├── index.html              # Main HTML file
├── style.css               # Styles and animations
├── main.js                 # Frontend JavaScript
├── server.js               # Express server
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment config
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── .env                    # Environment variables (create this)
└── api/
    ├── chat.js             # API route handler
    └── system_prompt.txt   # System prompt template
```

### Available Scripts
- `npm start` - Start the production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run tests (placeholder)

### Adding New Avatars
1. Add avatar configuration to `AVATAR_CONFIG` in `main.js`
2. Add avatar image to `assets/avatars/` directory
3. Update the HTML avatar grid in `index.html`
4. Add mock responses in `api/chat.js`

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variable `GEMINI_API_KEY` in Vercel dashboard
   - Deploy automatically on push

### Environment Variables Setup

**For Vercel:**
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add `GEMINI_API_KEY` with your API key value
4. Redeploy the project

**For Local Development:**
- Create `.env` file in project root
- Add `GEMINI_API_KEY=your_key_here`

## 🔧 Configuration

### Avatar Customization
Edit `AVATAR_CONFIG` in `main.js` to:
- Change avatar names and descriptions
- Modify system prompts for different personalities
- Update domain expertise areas

### Voice Settings
Modify voice settings in `main.js`:
- Voice selection criteria
- Speech rate and pitch
- Language preferences

### Styling
Customize `style.css` for:
- Color schemes and themes
- Animation timing
- Responsive breakpoints
- Avatar appearance

## 🐛 Troubleshooting

### Common Issues

**Speech Recognition Not Working:**
- Ensure you're using HTTPS (required for speech APIs)
- Check microphone permissions in browser
- Try refreshing the page

**No Sound Output:**
- Click "Test" button to verify audio
- Check browser audio settings
- Ensure speakers/headphones are connected

**API Errors:**
- Verify your Gemini API key is correct
- Check API quota limits
- Ensure environment variables are set

**Mobile Issues:**
- Use Chrome or Safari on mobile
- Grant microphone permissions
- Ensure stable internet connection

### Browser Compatibility
- **Chrome**: Full support
- **Safari**: Full support
- **Firefox**: Full support
- **Edge**: Full support
- **Mobile Chrome**: Full support
- **Mobile Safari**: Full support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini AI for providing the AI capabilities
- Web Speech API for voice recognition and synthesis
- Express.js for the server framework
- Vercel for hosting and deployment

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review browser compatibility requirements

---

**Built with ❤️ by Susanto Ganguly** 