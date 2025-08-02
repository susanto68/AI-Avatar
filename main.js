// Avatar Configuration with Sir Ganguly Attribution
const AVATAR_CONFIG = {
  'computer-teacher': {
    name: 'Computer Teacher',
    image: 'assets/avatars/computer-teacher.png',
    systemPrompt: 'You are a knowledgeable and enthusiastic computer science teacher created by Susanto Ganguly (Sir Ganguly). You specialize in programming, algorithms, data structures, and technology. Provide clear, educational explanations with practical examples. Use a friendly and encouraging tone. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Programming & Technology',
    greeting: "Hello and welcome! I'm your Computer Teacher Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'english-teacher': {
    name: 'English Teacher',
    image: 'assets/avatars/english-teacher.png',
    systemPrompt: 'You are an experienced English language teacher created by Susanto Ganguly (Sir Ganguly). You excel in grammar, literature, writing, and communication skills. Provide helpful guidance on language learning, writing techniques, and literary analysis. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Language & Literature',
    greeting: "Hello and welcome! I'm your English Teacher Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'biology-teacher': {
    name: 'Biology Teacher',
    image: 'assets/avatars/biology-teacher.png',
    systemPrompt: 'You are a passionate biology teacher created by Susanto Ganguly (Sir Ganguly). You specialize in life sciences, anatomy, genetics, ecology, and biological processes. Explain complex biological concepts in simple terms with real-world examples. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Life Sciences',
    greeting: "Hello and welcome! I'm your Biology Teacher Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'physics-teacher': {
    name: 'Physics Teacher',
    image: 'assets/avatars/physics-teacher.png',
    systemPrompt: 'You are an engaging physics teacher created by Susanto Ganguly (Sir Ganguly). You excel in mechanics, thermodynamics, electromagnetism, and modern physics. Use practical examples and demonstrations to explain physical concepts. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Physical Sciences',
    greeting: "Hello and welcome! I'm your Physics Teacher Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'chemistry-teacher': {
    name: 'Chemistry Teacher',
    image: 'assets/avatars/chemistry-teacher.png',
    systemPrompt: 'You are a skilled chemistry teacher created by Susanto Ganguly (Sir Ganguly). You specialize in organic chemistry, inorganic chemistry, physical chemistry, and chemical reactions. Make chemistry accessible and interesting with practical applications. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Chemical Sciences',
    greeting: "Hello and welcome! I'm your Chemistry Teacher Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'geography-teacher': {
    name: 'Geography Teacher',
    image: 'assets/avatars/geography-teacher.png',
    systemPrompt: 'You are a knowledgeable geography teacher created by Susanto Ganguly (Sir Ganguly). You cover physical geography, human geography, environmental science, and world cultures. Connect geographical concepts to current events and real-world issues. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Earth & Environment',
    greeting: "Hello and welcome! I'm your Geography Teacher Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'hindi-teacher': {
    name: 'Hindi Teacher',
    image: 'assets/avatars/hindi-teacher.png',
    systemPrompt: 'You are a dedicated Hindi language teacher created by Susanto Ganguly (Sir Ganguly). You teach Hindi grammar, literature, poetry, and cultural aspects. Help students understand and appreciate Hindi language and Indian culture. Always respond in Hindi and introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Hindi Language',
    greeting: "नमस्ते! मैं आपका हिंदी शिक्षक अवतार हूँ, जिसे सुशांतों गांगुली ने बनाया है। मैं आपकी कैसे मदद कर सकता हूँ?"
  },
  'mathematics-teacher': {
    name: 'Mathematics Teacher',
    image: 'assets/avatars/mathematics-teacher.png',
    systemPrompt: 'You are an excellent mathematics teacher created by Susanto Ganguly (Sir Ganguly). You cover algebra, geometry, calculus, statistics, and mathematical reasoning. Break down complex mathematical concepts into understandable steps. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Math & Logic',
    greeting: "Hello and welcome! I'm your Mathematics Teacher Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'doctor': {
    name: 'Doctor',
    image: 'assets/avatars/doctor.png',
    systemPrompt: 'You are a knowledgeable medical professional created by Susanto Ganguly (Sir Ganguly). You can provide general health information, explain medical concepts, and offer wellness advice. Always remind users to consult healthcare professionals for specific medical concerns. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Health & Medicine',
    greeting: "Hello and welcome! I'm your Doctor Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'engineer': {
    name: 'Engineer',
    image: 'assets/avatars/engineer.png',
    systemPrompt: 'You are an experienced engineer created by Susanto Ganguly (Sir Ganguly). You specialize in various engineering disciplines including mechanical, electrical, civil, and software engineering. Provide practical engineering solutions and explain technical concepts clearly. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Engineering & Design',
    greeting: "Hello and welcome! I'm your Engineer Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  },
  'lawyer': {
    name: 'Lawyer',
    image: 'assets/avatars/lawyer.png',
    systemPrompt: 'You are a knowledgeable legal professional created by Susanto Ganguly (Sir Ganguly). You can explain legal concepts, discuss general legal principles, and provide educational information about law. Always remind users to consult qualified legal professionals for specific legal advice. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Legal & Law',
    greeting: "Hello and welcome! I'm your Lawyer Avatar, created by Susanto Ganguly. You may call him Sir Ganguly. How can I help you today?"
  }
};

// Global Variables
let currentAvatar = null;
let recognition, utterance, isListening = false;
let isSpeaking = false;
let maleVoice = null;
let blinkInterval, speakInterval;
let currentQuestion = '';
let currentAnswer = '';
let lastSpokenText = '';

// Mobile-specific variables
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
let touchStartY = 0;
let touchEndY = 0;
let isGestureEnabled = true;

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const avatarSelection = document.getElementById('avatarSelection');
const chatInterface = document.getElementById('chatInterface');
const avatarCards = document.querySelectorAll('.avatar-card');
const backBtn = document.getElementById('backBtn');
const themeToggle = document.getElementById('themeToggle');
const avatarName = document.getElementById('avatarName');
const avatarDomain = document.getElementById('avatarDomain');
const avatarImage = document.getElementById('avatarImage');
const avatarAnimation = document.getElementById('avatarAnimation');
const avatarEyes = document.getElementById('avatarEyes');
const avatarMouth = document.getElementById('avatarMouth');
const voiceWindow = document.getElementById('voiceWindow');
const voiceContent = document.getElementById('voiceContent');
const qaSummary = document.getElementById('qaSummary');
const summaryQuestion = document.getElementById('summaryQuestion');
const summaryAnswer = document.getElementById('summaryAnswer');
const copyQuestionBtn = document.getElementById('copyQuestionBtn');
const copyAnswerBtn = document.getElementById('copyAnswerBtn');
const statusEl = document.getElementById('status');
const talkBtn = document.getElementById('talkBtn');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');

// Utility Functions
function hapticFeedback(type = 'light') {
  if (isMobile && navigator.vibrate) {
    switch (type) {
      case 'light':
        navigator.vibrate(50);
        break;
      case 'medium':
        navigator.vibrate(100);
        break;
      case 'heavy':
        navigator.vibrate(200);
        break;
      case 'success':
        navigator.vibrate([50, 50, 50]);
        break;
      case 'error':
        navigator.vibrate([100, 50, 100]);
        break;
    }
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#667eea'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
    word-wrap: break-word;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Check if response is more than 20 words
function isLongResponse(text) {
  const wordCount = text.trim().split(/\s+/).length;
  return wordCount > 20;
}

// Check if question is about creator
function isCreatorQuestion(question) {
  const creatorKeywords = ['susanto ganguly', 'sir ganguly', 'who created you', 'who made you', 'who designed you'];
  const lowerQuestion = question.toLowerCase();
  return creatorKeywords.some(keyword => lowerQuestion.includes(keyword));
}

// Check if question is in avatar's domain
function isDomainQuestion(question, avatarType) {
  const domainKeywords = {
    'computer-teacher': ['programming', 'code', 'computer', 'software', 'algorithm', 'data structure', 'technology', 'coding', 'developer', 'program', 'app', 'website', 'database', 'api', 'framework'],
    'english-teacher': ['grammar', 'english', 'language', 'writing', 'literature', 'poetry', 'essay', 'vocabulary', 'sentence', 'paragraph', 'story', 'novel', 'poem'],
    'biology-teacher': ['biology', 'cell', 'organism', 'gene', 'dna', 'evolution', 'ecosystem', 'species', 'plant', 'animal', 'human', 'body', 'organ', 'tissue'],
    'physics-teacher': ['physics', 'force', 'energy', 'motion', 'gravity', 'electricity', 'magnetism', 'wave', 'particle', 'atom', 'molecule', 'velocity', 'acceleration'],
    'chemistry-teacher': ['chemistry', 'chemical', 'molecule', 'atom', 'reaction', 'compound', 'element', 'acid', 'base', 'solution', 'mixture', 'organic', 'inorganic'],
    'geography-teacher': ['geography', 'map', 'country', 'continent', 'ocean', 'mountain', 'river', 'climate', 'weather', 'population', 'culture', 'environment'],
    'hindi-teacher': ['hindi', 'हिंदी', 'व्याकरण', 'साहित्य', 'कविता', 'कहानी', 'निबंध', 'शब्द', 'वाक्य', 'परिच्छेद'],
    'mathematics-teacher': ['math', 'mathematics', 'algebra', 'geometry', 'calculus', 'equation', 'formula', 'number', 'calculation', 'problem', 'solve', 'statistics'],
    'doctor': ['health', 'medical', 'disease', 'symptom', 'treatment', 'medicine', 'doctor', 'patient', 'hospital', 'body', 'organ', 'surgery'],
    'engineer': ['engineering', 'design', 'build', 'construct', 'mechanical', 'electrical', 'civil', 'software', 'system', 'project', 'technical'],
    'lawyer': ['law', 'legal', 'court', 'justice', 'right', 'contract', 'agreement', 'lawyer', 'attorney', 'case', 'legal advice', 'regulation']
  };
  
  const keywords = domainKeywords[avatarType] || [];
  const lowerQuestion = question.toLowerCase();
  
  return keywords.some(keyword => lowerQuestion.includes(keyword));
}

function setupMobileGestures() {
  if (!isMobile) return;
  
  // Swipe down to go back
  document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  });
  
  document.addEventListener('touchend', (e) => {
    if (!isGestureEnabled) return;
    
    touchEndY = e.changedTouches[0].clientY;
    const swipeDistance = touchStartY - touchEndY;
    
    if (swipeDistance > 100 && chatInterface.style.display !== 'none') {
      showAvatarSelection();
      hapticFeedback('medium');
    }
  });
  
  // Prevent double-tap zoom
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}

function setupMobileOptimizations() {
  if (!isMobile) return;
  
  // Register service worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(console.error);
  }
  
  // Handle orientation changes
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });
  
  // Prevent pull-to-refresh
  document.body.style.overscrollBehavior = 'none';
  
  // Optimize for mobile performance
  document.body.style.webkitOverflowScrolling = 'touch';
}

function showMobileError(message) {
  if (isMobile) {
    showNotification(message, 'error');
    hapticFeedback('error');
  } else {
    console.error(message);
  }
}

// Initialize the application
function initializeApp() {
  // Hide loading screen after a short delay
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 300);
  }, 1000);
  
  // Initialize speech synthesis
  if ('speechSynthesis' in window) {
    const voices = speechSynthesis.getVoices();
    maleVoice = voices.find(voice => 
      voice.name.includes('David') || 
      voice.name.includes('UK English Male') ||
      voice.name.includes('Male') ||
      voice.name.includes('Google UK English Male')
    ) || voices[0];
  }
  
  // Initialize speech recognition
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    initRecognition();
  } else {
    showMobileError('Speech recognition not supported in this browser');
  }
  
  // Setup mobile optimizations
  setupMobileOptimizations();
  setupMobileGestures();
  
  // Load saved theme and avatar
  loadTheme();
  loadLastAvatar();
  
  // Setup event listeners
  setupEventListeners();
  
  // Show online status
  if (navigator.onLine) {
    showNotification('Connected and ready!', 'success');
  }
}

function setupEventListeners() {
  // Avatar card selection
  avatarCards.forEach(card => {
    card.addEventListener('click', () => {
      const avatarType = card.dataset.avatar;
      selectAvatar(avatarType);
      hapticFeedback('medium');
    });
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const avatarType = card.dataset.avatar;
        selectAvatar(avatarType);
        hapticFeedback('medium');
      }
    });
  });
  
  // Back button
  backBtn.addEventListener('click', () => {
    showAvatarSelection();
    hapticFeedback('light');
  });
  
  // Theme toggle
  themeToggle.addEventListener('click', () => {
    toggleTheme();
    hapticFeedback('light');
  });
  
  // Voice control buttons
  talkBtn.addEventListener('click', () => {
    if (!isListening) {
      startListening();
      hapticFeedback('medium');
    }
  });
  
  stopBtn.addEventListener('click', () => {
    if (isListening) {
      stopListening();
      hapticFeedback('light');
    }
    if (isSpeaking) {
      stopSpeech();
      hapticFeedback('light');
    }
  });
  
  startBtn.addEventListener('click', () => {
    if (lastSpokenText) {
      speakText(lastSpokenText);
      hapticFeedback('medium');
    }
  });
  
  // Copy buttons
  copyQuestionBtn.addEventListener('click', () => {
    copyToClipboard(currentQuestion);
  });
  
  copyAnswerBtn.addEventListener('click', () => {
    copyToClipboard(currentAnswer);
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatInterface.style.display !== 'none') {
      showAvatarSelection();
    }
    if (e.key === ' ' && e.target === document.body) {
      e.preventDefault();
      if (talkBtn && !talkBtn.disabled) {
        talkBtn.click();
      }
    }
  });
  
  // Online/offline detection
  window.addEventListener('online', () => {
    showNotification('Connection restored!', 'success');
  });
  
  window.addEventListener('offline', () => {
    showNotification('Connection lost. Some features may not work.', 'error');
  });
}

function selectAvatar(avatarType) {
  if (!AVATAR_CONFIG[avatarType]) {
    showMobileError('Invalid avatar selected');
    return;
  }
  
  currentAvatar = avatarType;
  const config = AVATAR_CONFIG[avatarType];
  
  // Update UI
  avatarName.textContent = config.name;
  avatarDomain.textContent = config.domain;
  avatarImage.src = config.image;
  avatarImage.alt = config.name;
  
  // Store selection
  localStorage.setItem('lastAvatar', avatarType);
  
  // Show chat interface
  showChatInterface();
  
  // Clear voice window and show greeting
  voiceContent.innerHTML = '<p class="voice-placeholder">Loading...</p>';
  
  // Enable controls
  talkBtn.disabled = false;
  stopBtn.disabled = false;
  startBtn.disabled = true;
  
  // Hide Q/A summary
  qaSummary.style.display = 'none';
  
  showNotification(`Selected ${config.name}`, 'success');
  
  // Speak greeting after a short delay
  setTimeout(() => {
    speakGreeting(config.greeting);
  }, 500);
}

function speakGreeting(greeting) {
  voiceContent.innerHTML = `<p>${greeting}</p>`;
  speakText(greeting);
}

function showChatInterface() {
  avatarSelection.style.display = 'none';
  chatInterface.style.display = 'flex';
  
  // Focus management for accessibility
  setTimeout(() => {
    talkBtn.focus();
  }, 100);
}

function showAvatarSelection() {
  chatInterface.style.display = 'none';
  avatarSelection.style.display = 'flex';
  
  // Stop any ongoing speech/listening
  if (isListening) stopListening();
  if (isSpeaking) stopSpeech();
  
  // Reset UI
  voiceContent.innerHTML = '<p class="voice-placeholder">Click "Talk" to start your conversation...</p>';
  qaSummary.style.display = 'none';
  statusEl.textContent = '';
  talkBtn.disabled = true;
  stopBtn.disabled = true;
  startBtn.disabled = true;
  
  // Focus management
  setTimeout(() => {
    const firstCard = document.querySelector('.avatar-card');
    if (firstCard) firstCard.focus();
  }, 100);
}

function processUserInput(message) {
  // Check if question is about creator
  if (isCreatorQuestion(message)) {
    const creatorResponse = "I was created by Susanto Ganguly — a passionate educator and software developer, known as Sir Ganguly, who builds AI tools to help students learn creatively.";
    displayResponse(message, creatorResponse);
    return;
  }
  
  // Check if question is in avatar's domain
  if (!isDomainQuestion(message, currentAvatar)) {
    const otherAvatars = {
      'computer-teacher': 'Computer',
      'english-teacher': 'English',
      'biology-teacher': 'Biology',
      'physics-teacher': 'Physics',
      'chemistry-teacher': 'Chemistry',
      'geography-teacher': 'Geography',
      'hindi-teacher': 'Hindi',
      'mathematics-teacher': 'Mathematics',
      'doctor': 'Doctor',
      'engineer': 'Engineer',
      'lawyer': 'Lawyer'
    };
    
    const suggestedAvatar = otherAvatars[currentAvatar] || 'other';
    const domainResponse = `Interesting question! Though this isn't my subject, here's what I can share. You can also check with our ${suggestedAvatar} Teacher Avatar.`;
    
    // Still process the question but with a note
    processQuestionWithAPI(message, domainResponse);
    return;
  }
  
  // Process the question normally
  processQuestionWithAPI(message);
}

function processQuestionWithAPI(message, prefixResponse = '') {
  currentQuestion = message;
  statusEl.textContent = 'Processing...';
  
  // Call API
  fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      avatar: currentAvatar,
      systemPrompt: AVATAR_CONFIG[currentAvatar].systemPrompt
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const fullResponse = prefixResponse ? `${prefixResponse} ${data.reply}` : data.reply;
    displayResponse(message, fullResponse);
  })
  .catch(error => {
    console.error('API Error:', error);
    const errorMessage = 'Failed to get response. Please try again.';
    displayResponse(message, errorMessage);
    statusEl.textContent = 'Error occurred';
    showMobileError('Failed to get response. Please try again.');
  });
}

function displayResponse(question, response) {
  currentQuestion = question;
  currentAnswer = response;
  lastSpokenText = response;
  
  // Update voice window
  voiceContent.innerHTML = `<p>${response}</p>`;
  
  // Show Q/A summary if response is long
  if (isLongResponse(response)) {
    summaryQuestion.textContent = question;
    summaryAnswer.textContent = response;
    qaSummary.style.display = 'block';
  } else {
    qaSummary.style.display = 'none';
  }
  
  statusEl.textContent = '';
  
  // Speak the response
  speakText(response);
  
  // Enable start button
  startBtn.disabled = false;
}

function initRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = currentAvatar === 'hindi-teacher' ? 'hi-IN' : 'en-US';
  
  recognition.onstart = () => {
    isListening = true;
    statusEl.textContent = 'Listening...';
    talkBtn.disabled = true;
    stopBtn.disabled = false;
    startBtn.disabled = true;
    hapticFeedback('medium');
    
    // Clear voice window and show listening message
    voiceContent.innerHTML = '<p>Listening...</p>';
    
    if (isMobile) {
      showNotification('Listening...', 'info');
    }
  };
  
  recognition.onresult = async (event) => {
    const message = event.results[0][0].transcript;
    processUserInput(message);
  };
  
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    isListening = false;
    statusEl.textContent = 'Error: ' + event.error;
    talkBtn.disabled = false;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    
    // Reset voice window
    voiceContent.innerHTML = '<p class="voice-placeholder">Click "Talk" to start your conversation...</p>';
    
    let errorMessage = 'Speech recognition error';
    switch (event.error) {
      case 'no-speech':
        errorMessage = 'No speech detected. Please try again.';
        break;
      case 'audio-capture':
        errorMessage = 'Microphone not found. Please check your microphone.';
        break;
      case 'not-allowed':
        errorMessage = 'Microphone access denied. Please allow microphone access.';
        break;
      case 'network':
        errorMessage = 'Network error. Please check your connection.';
        break;
    }
    
    showMobileError(errorMessage);
  };
  
  recognition.onend = () => {
    isListening = false;
    statusEl.textContent = '';
    talkBtn.disabled = false;
    stopBtn.disabled = true;
    startBtn.disabled = false;
  };
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    showMobileError('Speech synthesis not supported');
    return;
  }
  
  // Stop any existing speech
  if (isSpeaking) {
    speechSynthesis.cancel();
  }
  
  utterance = new SpeechSynthesisUtterance(text);
  
  // Set voice based on avatar
  if (currentAvatar === 'hindi-teacher') {
    const hindiVoice = speechSynthesis.getVoices().find(voice => 
      voice.lang.includes('hi') || voice.lang.includes('IN')
    );
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }
  } else if (maleVoice) {
    utterance.voice = maleVoice;
  }
  
  // Configure speech parameters for deep male voice
  utterance.rate = 0.9; // Medium pace
  utterance.pitch = 0.8; // Deep voice
  utterance.volume = 1.0;
  
  // Clean text for speech (remove punctuation but keep in display)
  const cleanText = text.replace(/[.,?!;:]/g, ' ').replace(/\s+/g, ' ').trim();
  utterance.text = cleanText;
  
  // Start speaking animation
  isSpeaking = true;
  startAvatarAnimations();
  
  utterance.onstart = () => {
    statusEl.textContent = 'Speaking...';
    hapticFeedback('light');
  };
  
  utterance.onend = () => {
    isSpeaking = false;
    statusEl.textContent = '';
    stopAvatarAnimations();
    hapticFeedback('success');
  };
  
  utterance.onerror = (event) => {
    console.error('Speech synthesis error:', event.error);
    isSpeaking = false;
    statusEl.textContent = 'Speech error';
    stopAvatarAnimations();
    showMobileError('Speech synthesis error');
  };
  
  speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
  isSpeaking = false;
  statusEl.textContent = '';
  stopAvatarAnimations();
}

function startListening() {
  if (recognition && !isListening) {
    // Update recognition language based on avatar
    if (currentAvatar === 'hindi-teacher') {
      recognition.lang = 'hi-IN';
    } else {
      recognition.lang = 'en-US';
    }
    recognition.start();
  }
}

function stopListening() {
  if (recognition && isListening) {
    recognition.stop();
  }
}

function cleanup() {
  if (recognition) {
    recognition.stop();
  }
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
  clearInterval(blinkInterval);
  clearInterval(speakInterval);
}

function startAvatarAnimations() {
  // Blinking animation
  blinkInterval = setInterval(() => {
    avatarAnimation.classList.add('blinking');
    setTimeout(() => {
      avatarAnimation.classList.remove('blinking');
    }, 300);
  }, 3000);
  
  // Speaking animation
  avatarAnimation.classList.add('speaking');
}

function stopAvatarAnimations() {
  clearInterval(blinkInterval);
  clearInterval(speakInterval);
  avatarAnimation.classList.remove('speaking');
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update theme toggle button
  const sunIcon = themeToggle.querySelector('.sun-icon');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  
  if (newTheme === 'dark') {
    sunIcon.style.opacity = '0';
    moonIcon.style.opacity = '1';
  } else {
    sunIcon.style.opacity = '1';
    moonIcon.style.opacity = '0';
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Update theme toggle button
  const sunIcon = themeToggle.querySelector('.sun-icon');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  
  if (savedTheme === 'dark') {
    sunIcon.style.opacity = '0';
    moonIcon.style.opacity = '1';
  } else {
    sunIcon.style.opacity = '1';
    moonIcon.style.opacity = '0';
  }
}

function loadLastAvatar() {
  const lastAvatar = localStorage.getItem('lastAvatar');
  if (lastAvatar && AVATAR_CONFIG[lastAvatar]) {
    // Don't auto-select, just store for reference
    currentAvatar = lastAvatar;
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification('Copied to clipboard!', 'success');
      hapticFeedback('success');
    }).catch(() => {
      showNotification('Failed to copy', 'error');
    });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showNotification('Copied to clipboard!', 'success');
      hapticFeedback('success');
    } catch (err) {
      showNotification('Failed to copy', 'error');
    }
    document.body.removeChild(textArea);
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Cleanup on page unload
window.addEventListener('beforeunload', cleanup);

// Handle online/offline status
function isOnline() {
  return navigator.onLine;
}

function showOfflineMessage() {
  if (!isOnline()) {
    showNotification('You are offline. Some features may not work.', 'error');
  }
} 