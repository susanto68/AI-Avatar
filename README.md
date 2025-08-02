# 🎭 AI Avatar Assistant

A modern, mobile-first AI Avatar Assistant with voice interaction, multiple specialized avatars, and beautiful responsive design. Built with Node.js, Express, and modern web technologies.

![AI Avatar Assistant](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Mobile First](https://img.shields.io/badge/Mobile-First%20Design-blue)
![Voice AI](https://img.shields.io/badge/Voice-AI%20Powered-orange)
![Vercel Ready](https://img.shields.io/badge/Deploy-Vercel%20Ready-purple)

## ✨ Features

### 🎯 Core Features
- **Multi-Avatar Selection**: Choose from 11 specialized AI avatars
- **Voice Interaction**: Natural speech recognition and synthesis
- **Mobile-First Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Real-time Animations**: Avatar animations during speech and interactions
- **Offline Support**: Graceful fallback when API is unavailable

### 🎭 Available Avatars
- **Computer Teacher** - Programming & Technology
- **English Teacher** - Language & Literature  
- **Biology Teacher** - Life Sciences
- **Physics Teacher** - Physical Sciences
- **Chemistry Teacher** - Chemical Sciences
- **Geography Teacher** - Earth & Environment
- **Hindi Teacher** - Hindi Language
- **Mathematics Teacher** - Math & Logic
- **Doctor** - Health & Medicine
- **Engineer** - Engineering & Design
- **Lawyer** - Legal & Law

### 📱 Mobile Optimizations
- Touch-friendly interface with haptic feedback
- Gesture controls (swipe to navigate)
- Optimized performance for mobile devices
- PWA-ready with service worker support
- Responsive design for all screen sizes

### 🎨 Modern UI/UX
- Clean, elegant design with smooth animations
- CSS custom properties for easy theming
- Accessibility features (ARIA labels, keyboard navigation)
- Modern typography with Inter font
- Beautiful gradients and shadows

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern web browser with speech recognition support

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/susanto68/AI-Avatar.git
   cd AI-Avatar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `GEMINI_API_KEY` | Google Gemini API key for AI responses | No | Uses mock responses |
| `NODE_ENV` | Environment mode | No | `development` |
| `PORT` | Server port | No | `3000` |

## 🎯 Usage

### Basic Usage
1. **Select an Avatar**: Choose from the grid of available avatars
2. **Start Conversation**: Click the "Talk" button to begin voice interaction
3. **Speak Naturally**: Ask questions or start a conversation
4. **Listen to Response**: The avatar will respond with voice and text
5. **Switch Avatars**: Use the back button to choose a different avatar

### Voice Commands
- **Talk Button**: Start voice recognition
- **Stop Button**: Stop listening or speaking
- **Test Button**: Test the audio system
- **Spacebar**: Quick start voice recognition (when focused)

### Keyboard Shortcuts
- `Escape`: Go back to avatar selection
- `Spacebar`: Start voice recognition
- `Enter/Space`: Select avatar (when focused)

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS custom properties
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **Web Speech API**: Speech recognition and synthesis
- **PWA**: Progressive Web App capabilities

### Backend
- **Node.js**: Server runtime
- **Express.js**: Web framework
- **OpenAI SDK**: AI integration (with Gemini base URL)
- **ES Modules**: Modern JavaScript modules

### Deployment
- **Vercel**: Serverless deployment platform
- **GitHub**: Version control and CI/CD

## 📁 Project Structure

```
Avatar/
├── api/
│   ├── chat.js          # AI API handler
│   └── system_prompt.txt # Default system prompt
├── assets/
│   └── avatars/         # Avatar images
├── index.html           # Main HTML file
├── style.css            # Modern CSS styles
├── main.js              # Frontend JavaScript
├── server.js            # Express server
├── package.json         # Dependencies and scripts
├── vercel.json          # Vercel configuration
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select the `Avatar` directory

2. **Configure Environment Variables**
   - In Vercel dashboard, go to Project Settings
   - Add `GEMINI_API_KEY` with your API key
   - Set `NODE_ENV` to `production`

3. **Deploy**
   - Vercel will automatically deploy on push to main branch
   - Your app will be available at `https://your-project.vercel.app`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - The project is ready for any Node.js hosting platform
   - Ensure environment variables are configured

## 🔧 Configuration

### Customizing Avatars

Edit the `AVATAR_CONFIG` object in `main.js`:

```javascript
const AVATAR_CONFIG = {
  'your-avatar': {
    name: 'Your Avatar Name',
    image: 'assets/avatars/your-avatar.png',
    systemPrompt: 'Your custom system prompt...',
    domain: 'Your Domain'
  }
};
```

### Styling Customization

The project uses CSS custom properties for easy theming. Edit `style.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* Add more custom properties */
}
```

## 🐛 Troubleshooting

### Common Issues

**Speech Recognition Not Working**
- Ensure you're using HTTPS (required for speech recognition)
- Check microphone permissions in browser
- Try refreshing the page

**API Key Issues**
- Verify your Gemini API key is correct
- Check environment variables in Vercel dashboard
- The app will use mock responses if no API key is provided

**Mobile Issues**
- Ensure you're using a modern mobile browser
- Check that microphone access is allowed
- Try the PWA version for better mobile experience

### Browser Compatibility

| Browser | Speech Recognition | Speech Synthesis | Status |
|---------|-------------------|------------------|--------|
| Chrome | ✅ | ✅ | Full Support |
| Firefox | ✅ | ✅ | Full Support |
| Safari | ✅ | ✅ | Full Support |
| Edge | ✅ | ✅ | Full Support |
| Mobile Chrome | ✅ | ✅ | Full Support |
| Mobile Safari | ✅ | ✅ | Full Support |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test on multiple devices and browsers
- Ensure accessibility compliance
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini API** for AI capabilities
- **Web Speech API** for voice interaction
- **Vercel** for deployment platform
- **Inter Font** for beautiful typography
- **Modern CSS** for responsive design

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/susanto68/AI-Avatar/issues) page
2. Create a new issue with detailed information
3. Include browser version and device information

## 🔄 Changelog

### Version 2.0.0 (Current)
- ✨ Complete UI/UX modernization
- 📱 Mobile-first responsive design
- 🎨 Modern CSS with custom properties
- ♿ Enhanced accessibility features
- 🚀 Vercel deployment optimization
- 🔧 Improved error handling
- 📱 PWA capabilities

### Version 1.0.0
- 🎭 Initial multi-avatar implementation
- 🎤 Basic voice interaction
- 📱 Mobile support
- 🌙 Dark/light theme toggle

---

**Made with ❤️ by Susanto Ganguly**

*This project demonstrates modern web development practices with a focus on accessibility, performance, and user experience.* 