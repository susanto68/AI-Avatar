# 🎭 AI Avatar Assistant - Created by Sir Ganguly

A **colorful, mobile-friendly** AI Avatar Assistant web app designed by **Susanto Ganguly** (also known as **Sir Ganguly**) that provides interactive learning experiences through voice and text interactions with subject-specific teacher avatars.

## ✨ Features

### 🎙️ **GREETING VOICE (ON AVATAR LOAD)**
- ✅ Avatar always greets user at the start with a spoken welcome message
- ✅ "Hello and welcome! I'm your [Subject] Teacher Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
- ✅ Hindi Avatar speaks in Hindi: "नमस्ते! मैं आपका हिंदी शिक्षक अवतार हूँ, जिसे सुशांतों गांगुली ने बनाया है। मैं आपकी कैसे मदद कर सकता हूँ?"

### 🎤 **SINGLE VOICE WINDOW (INPUT ➝ OUTPUT)**
- ✅ One voice window under the avatar that clears and accepts voice input
- ✅ Converts itself into output display
- ✅ Speaks the answer aloud using a deep male voice

### 📋 **Q/A SUMMARY WINDOW**
- ✅ Shows when AI's response is more than 20 words
- ✅ Contains the full Question and Answer
- ✅ Includes Copy buttons for both Q&A

### 🧑‍🏫 **SUBJECT AVATARS UI**
- ✅ Display larger PNGs of avatars in responsive grid
- ✅ User taps to activate avatar
- ✅ Each avatar loads with their greeting and personality tone

### 🧠 **SMART RESPONSE SYSTEM**
- ✅ No hard rejection of off-topic questions
- ✅ If question is outside avatar's domain: "Interesting question! Though this isn't my subject, here's what I can share. You can also check with our [Biology/English] Teacher Avatar."

### 👤 **RESPOND TO QUESTIONS ABOUT CREATOR**
- ✅ If user asks about "Susanto Ganguly" or "Who created you":
- ✅ "I was created by Susanto Ganguly — a passionate educator and software developer, known as Sir Ganguly, who builds AI tools to help students learn creatively."

### 🗣️ **VOICE OUTPUT RULES**
- ✅ Deep, calm, professional male voice (medium pace)
- ✅ Do NOT read punctuation marks like `. , ? !`
- ✅ But KEEP those characters in the displayed text
- ✅ Remove and ignore symbols like `*`, `@`, `#`, `%` while speaking

### 🎛️ **UI CONTROLS (ALWAYS ACTIVE)**
- ✅ **Top Left**: "Back" button → returns to avatar list, stops voice
- ✅ **Top Right**: "Light/Dark" toggle button
- ✅ **Below Avatar**:
  - **Talk Button**: Start voice input, clear text window
  - **Stop Button**: Immediately stop voice
  - **Start Button**: Resume the last spoken answer

### 🌈 **THEMED UI DESIGN (Colorful + Mobile Friendly)**
- ✅ Vibrant, joyful background theme with animated gradients
- ✅ Foreground cards/windows are soft-rounded, glass-like with shadows
- ✅ Playful but clean fonts, large enough for easy reading
- ✅ Modern, soft-edged, animated buttons on hover/tap
- ✅ Fully mobile responsive (vertical stacking)
- ✅ Clean and centered on desktop (horizontal spacing)

### 📚 **Subject-Specific Avatars (11 Total)**
- ✅ **Computer Teacher**: Programming, algorithms, data structures, technology
- ✅ **English Teacher**: Grammar, literature, writing, communication skills
- ✅ **Biology Teacher**: Life sciences, anatomy, genetics, ecology
- ✅ **Physics Teacher**: Mechanics, thermodynamics, electromagnetism, modern physics
- ✅ **Chemistry Teacher**: Organic chemistry, inorganic chemistry, chemical reactions
- ✅ **Geography Teacher**: Physical geography, human geography, environmental science
- ✅ **Hindi Teacher**: Hindi grammar, literature, poetry, cultural aspects
- ✅ **Mathematics Teacher**: Algebra, geometry, calculus, mathematical reasoning
- ✅ **Doctor**: General health information, medical concepts, wellness advice
- ✅ **Engineer**: Various engineering disciplines, technical solutions
- ✅ **Lawyer**: Legal concepts, general legal principles, educational information

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0.0 or higher
- Gemini API key (optional - works with mock responses)

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

## 🌐 **Render Deployment**

### Step 1: Prepare Your Repository
1. Ensure your code is pushed to GitHub
2. Make sure all files are committed and pushed

### Step 2: Deploy to Render

1. **Go to Render Dashboard**
   - Visit [render.com](https://render.com)
   - Sign up/Login with your GitHub account

2. **Create New Web Service**
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub repository

3. **Configure the Service**
   - **Name**: `ai-avatar-assistant` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: Leave empty (or specify if needed)

4. **Set Environment Variables**
   - Click on "Environment" tab
   - Add the following variables:
     ```
     GEMINI_API_KEY=your_gemini_api_key_here
     NODE_ENV=production
     PORT=10000
     ```

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your app
   - Your app will be available at: `https://your-app-name.onrender.com`

### Step 3: Custom Domain (Optional)
1. Go to your service settings
2. Click "Custom Domains"
3. Add your domain and follow the DNS instructions

## 🔧 Configuration

### Environment Variables
- `GEMINI_API_KEY`: Your Gemini API key for AI responses
- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (Render uses 10000 by default)

### API Configuration
The app uses the Gemini API through OpenAI-compatible endpoints:
- Base URL: `https://generativelanguage.googleapis.com/v1beta/openai`
- Model: `gemini-2.5-flash`
- Temperature: 0.6
- Max Tokens: 1100

## 🏗️ Project Structure

```
Avatar/
├── index.html              # Main HTML file with single voice window
├── style.css               # Colorful CSS with glass effects
├── main.js                 # Enhanced JavaScript with greeting voice
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

## 🌐 Other Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Replit
1. Import the repository
2. Run `npm start`
3. Set environment variables in Secrets

### Cyclic.sh
1. Connect repository
2. Set environment variables
3. Deploy automatically

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

### Version 2.0.0 (Current)
- ✨ Colorful, vibrant UI with animated gradients
- 🎙️ Greeting voice on avatar load
- 🎤 Single voice window (input → output)
- 📋 Q/A summary window for long responses
- 🧠 Smart response system with domain validation
- 👤 Creator attribution responses
- 🗣️ Deep male voice with punctuation filtering
- 🎛️ Enhanced voice controls (Talk/Stop/Start)
- 🌈 Glass-like effects and modern animations
- 📱 Mobile-first responsive design
- 🚀 Render deployment ready

### Version 1.0.0
- Initial release with 11 subject avatars
- Voice input/output functionality
- Mobile-first responsive design
- Content validation and filtering
- Sir Ganguly attribution throughout

---

**Created with ❤️ by Susanto Ganguly (Sir Ganguly)** 