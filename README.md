# 🎭 AI Avatar Assistant - Created by Sir Ganguly

A multi-avatar AI assistant platform designed by **Susanto Ganguly** (also known as **Sir Ganguly**) that provides interactive learning experiences through voice and text interactions with subject-specific teacher avatars.

## ✨ Features

### 🧑‍🏫 **Avatar Introduction & Attribution**
- Each avatar introduces itself as created by Susanto Ganguly (Sir Ganguly)
- Specialized introductions for each subject area
- Hindi teacher responds in Hindi language
- Professional and friendly teaching personas

### 🎙️ **Voice Input & Output**
- **Voice Recognition**: Accept user voice input with real-time transcription
- **Voice Synthesis**: Clear, positive tone speech output
- **Special Character Filtering**: Skips reading special characters like `*`, `?`, `#`, etc.
- **Hindi Voice Support**: Hindi teacher uses Hindi language for both input and output

### 📚 **Subject-Specific Avatars**
- **Computer Teacher**: Programming, algorithms, data structures, technology
- **English Teacher**: Grammar, literature, writing, communication skills
- **Biology Teacher**: Life sciences, anatomy, genetics, ecology
- **Physics Teacher**: Mechanics, thermodynamics, electromagnetism, modern physics
- **Chemistry Teacher**: Organic chemistry, inorganic chemistry, chemical reactions
- **Geography Teacher**: Physical geography, human geography, environmental science
- **Hindi Teacher**: Hindi grammar, literature, poetry, cultural aspects
- **Mathematics Teacher**: Algebra, geometry, calculus, mathematical reasoning
- **Doctor**: General health information, medical concepts, wellness advice
- **Engineer**: Various engineering disciplines, technical solutions
- **Lawyer**: Legal concepts, general legal principles, educational information

### 🖼️ **Modern UI/UX**
- **Two Output Windows**: Separate question and answer boxes with copy functionality
- **Mobile-First Design**: Responsive layout optimized for mobile and desktop
- **Avatar Grid Display**: Visual selection of all available avatars
- **Copy Buttons**: Easy copying of questions and answers
- **Dark/Light Theme**: Toggle between themes for better user experience

### 🛡️ **Content Validation**
- **Offensive Content Filtering**: Blocks inappropriate or negative content
- **Domain Validation**: Ensures questions match avatar's subject area
- **Positive Reinforcement**: Encourages constructive and educational interactions
- **Professional Responses**: Maintains educational focus and appropriate tone

### 🌐 **Deployment Ready**
- **Vercel Support**: Optimized for Vercel deployment
- **Render/Replit/Cyclic.sh**: Easy deployment to various platforms
- **Environment Variables**: Secure API key management
- **PWA Features**: Progressive Web App capabilities

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0.0 or higher
- Gemini API key (optional - works with mock responses)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Avatar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "GEMINI_API_KEY=your_gemini_api_key_here" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎯 Usage Guide

### Selecting an Avatar
1. Browse the avatar grid on the main screen
2. Click on your desired subject teacher
3. Each avatar will introduce itself as created by Sir Ganguly
4. The interface will switch to the chat mode

### Asking Questions
- **Voice Input**: Click the "Talk" button and speak your question
- **Text Input**: Type your question in the text field and press Enter or click Send
- **Domain Validation**: Questions are automatically validated against the avatar's subject area

### Features
- **Copy Functionality**: Use copy buttons to save questions and answers
- **Theme Toggle**: Switch between light and dark themes
- **Voice Test**: Test the audio system with the "Test" button
- **Back Navigation**: Return to avatar selection anytime

## 🏗️ Project Structure

```
Avatar/
├── index.html              # Main HTML file
├── style.css               # Comprehensive CSS styles
├── main.js                 # Frontend JavaScript logic
├── server.js               # Express server setup
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment config
├── api/
│   ├── chat.js             # API endpoint for AI responses
│   └── system_prompt.txt   # AI system prompt template
├── assets/
│   └── avatars/            # Avatar PNG images
│       ├── computer-teacher.png
│       ├── english-teacher.png
│       ├── biology-teacher.png
│       ├── physics-teacher.png
│       ├── chemistry-teacher.png
│       ├── geography-teacher.png
│       ├── hindi-teacher.png
│       ├── mathematics-teacher.png
│       ├── doctor.png
│       ├── engineer.png
│       └── lawyer.png
└── README.md               # This file
```

## 🔧 Configuration

### Environment Variables
- `GEMINI_API_KEY`: Your Gemini API key for AI responses
- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 3000)

### API Configuration
The app uses the Gemini API through OpenAI-compatible endpoints:
- Base URL: `https://generativelanguage.googleapis.com/v1beta/openai`
- Model: `gemini-2.5-flash`
- Temperature: 0.6
- Max Tokens: 1100

## 🎨 Customization

### Adding New Avatars
1. Add avatar image to `assets/avatars/`
2. Update `AVATAR_CONFIG` in `main.js`
3. Add domain keywords in `api/chat.js`
4. Update HTML avatar grid

### Styling
- CSS variables for easy theming
- Responsive design with mobile-first approach
- Dark/light theme support
- Custom animations and transitions

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- **Render**: Use the Node.js environment
- **Replit**: Import the repository and run `npm start`
- **Cyclic.sh**: Connect repository and set environment variables

## 🔒 Security Features

- Input validation and sanitization
- Offensive content filtering
- Secure API key handling
- CORS and security headers
- Rate limiting considerations

## 📱 Mobile Features

- Touch-optimized interface
- Haptic feedback support
- Swipe gestures for navigation
- PWA capabilities
- Offline functionality
- Mobile-optimized voice recognition

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍🏫 About the Creator

**Susanto Ganguly** (Sir Ganguly) is the creator and designer of this AI Avatar Assistant platform. The system is designed to provide an engaging, educational experience for students across various subjects.

## 🆘 Support

For support or questions:
- Check the documentation
- Review the code comments
- Create an issue on GitHub
- Contact the development team

## 🔄 Updates

### Version 1.0.0
- Initial release with 11 subject avatars
- Voice input/output functionality
- Mobile-first responsive design
- Content validation and filtering
- Sir Ganguly attribution throughout
- Deployment-ready configuration

---

**Created with ❤️ by Susanto Ganguly (Sir Ganguly)** 