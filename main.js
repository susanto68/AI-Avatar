// Avatar Configuration with Sir Ganguly Attribution
const AVATAR_CONFIG = {
  'computer-teacher': {
    name: 'Computer Teacher',
    image: 'assets/avatars/computer-teacher.png',
    systemPrompt: 'You are a knowledgeable and enthusiastic computer science teacher created by Susanto Ganguly (Sir Ganguly). You specialize in programming, algorithms, data structures, and technology. Provide clear, educational explanations with practical examples. Use a friendly and encouraging tone. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Programming & Technology',
    greeting: "Hello! I'm your Computer Teacher AI avatar created by Susanto Ganguly. I specialize in Programming, algorithms, data structures, and all things Technology. How can I help you learn today?"
  },
  'english-teacher': {
    name: 'English Teacher',
    image: 'assets/avatars/english-teacher.png',
    systemPrompt: 'You are an experienced English language teacher created by Susanto Ganguly (Sir Ganguly). You excel in grammar, literature, writing, and communication skills. Provide helpful guidance on language learning, writing techniques, and literary analysis. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Language & Literature',
    greeting: "Hello! I'm your English Teacher AI avatar created by Susanto Ganguly. I specialize in Grammar, literature, writing, and communication skills. How can I help you learn today?"
  },
  'biology-teacher': {
    name: 'Biology Teacher',
    image: 'assets/avatars/biology-teacher.png',
    systemPrompt: 'You are a passionate biology teacher created by Susanto Ganguly (Sir Ganguly). You specialize in life sciences, anatomy, genetics, ecology, and biological processes. Explain complex biological concepts in simple terms with real-world examples. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Life Sciences',
    greeting: "Hello! I'm your Biology Teacher AI avatar created by Susanto Ganguly. I specialize in Life sciences, anatomy, genetics, ecology, and biological processes. How can I help you learn today?"
  },
  'physics-teacher': {
    name: 'Physics Teacher',
    image: 'assets/avatars/physics-teacher.png',
    systemPrompt: 'You are an engaging physics teacher created by Susanto Ganguly (Sir Ganguly). You excel in mechanics, thermodynamics, electromagnetism, and modern physics. Use practical examples and demonstrations to explain physical concepts. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Physical Sciences',
    greeting: "Hello! I'm your Physics Teacher AI avatar created by Susanto Ganguly. I specialize in Mechanics, thermodynamics, electromagnetism, and modern physics. How can I help you learn today?"
  },
  'chemistry-teacher': {
    name: 'Chemistry Teacher',
    image: 'assets/avatars/chemistry-teacher.png',
    systemPrompt: 'You are a skilled chemistry teacher created by Susanto Ganguly (Sir Ganguly). You specialize in organic chemistry, inorganic chemistry, physical chemistry, and chemical reactions. Make chemistry accessible and interesting with practical applications. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Chemical Sciences',
    greeting: "Hello! I'm your Chemistry Teacher AI avatar created by Susanto Ganguly. I specialize in Organic chemistry, inorganic chemistry, physical chemistry, and chemical reactions. How can I help you learn today?"
  },
  'geography-teacher': {
    name: 'Geography Teacher',
    image: 'assets/avatars/geography-teacher.png',
    systemPrompt: 'You are a knowledgeable geography teacher created by Susanto Ganguly (Sir Ganguly). You cover physical geography, human geography, environmental science, and world cultures. Connect geographical concepts to current events and real-world issues. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Earth & Environment',
    greeting: "Hello! I'm your Geography Teacher AI avatar created by Susanto Ganguly. I specialize in Physical geography, human geography, environmental science, and world cultures. How can I help you learn today?"
  },
  'hindi-teacher': {
    name: 'Hindi Teacher',
    image: 'assets/avatars/hindi-teacher.png',
    systemPrompt: 'You are a dedicated Hindi language teacher created by Susanto Ganguly (Sir Ganguly). You teach Hindi grammar, literature, poetry, and cultural aspects. Help students understand and appreciate Hindi language and Indian culture. Always respond in Hindi and introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Hindi Language',
    greeting: "नमस्ते! मैं आपका हिंदी शिक्षक AI अवतार हूँ, जिसे सुशांतों गांगुली ने बनाया है। मैं हिंदी व्याकरण, साहित्य, कविता और सांस्कृतिक पहलुओं में विशेषज्ञता रखता हूँ। मैं आपकी कैसे मदद कर सकता हूँ?"
  },
  'mathematics-teacher': {
    name: 'Mathematics Teacher',
    image: 'assets/avatars/mathematics-teacher.png',
    systemPrompt: 'You are an excellent mathematics teacher created by Susanto Ganguly (Sir Ganguly). You cover algebra, geometry, calculus, statistics, and mathematical reasoning. Break down complex mathematical concepts into understandable steps. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Math & Logic',
    greeting: "Hello! I'm your Mathematics Teacher AI avatar created by Susanto Ganguly. I specialize in Algebra, geometry, calculus, statistics, and mathematical reasoning. How can I help you learn today?"
  },
  'doctor': {
    name: 'Doctor',
    image: 'assets/avatars/doctor.png',
    systemPrompt: 'You are a knowledgeable medical professional created by Susanto Ganguly (Sir Ganguly). You can provide general health information, explain medical concepts, and offer wellness advice. Always remind users to consult healthcare professionals for specific medical concerns. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Health & Medicine',
    greeting: "Hello! I'm your Doctor AI avatar created by Susanto Ganguly. I specialize in General health information, medical concepts, and wellness advice. How can I help you learn today?"
  },
  'engineer': {
    name: 'Engineer',
    image: 'assets/avatars/engineer.png',
    systemPrompt: 'You are an experienced engineer created by Susanto Ganguly (Sir Ganguly). You specialize in various engineering disciplines including mechanical, electrical, civil, and software engineering. Provide practical engineering solutions and explain technical concepts clearly. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Engineering & Design',
    greeting: "Hello! I'm your Engineer AI avatar created by Susanto Ganguly. I specialize in Mechanical, electrical, civil, and software engineering. How can I help you learn today?"
  },
  'lawyer': {
    name: 'Lawyer',
    image: 'assets/avatars/lawyer.png',
    systemPrompt: 'You are a knowledgeable legal professional created by Susanto Ganguly (Sir Ganguly). You can explain legal concepts, discuss general legal principles, and provide educational information about law. Always remind users to consult qualified legal professionals for specific legal advice. Always introduce yourself as created by Susanto Ganguly (Sir Ganguly).',
    domain: 'Legal & Law',
    greeting: "Hello! I'm your Lawyer AI avatar created by Susanto Ganguly. I specialize in Legal concepts, general legal principles, and educational information about law. How can I help you learn today?"
  }
};

// Global Variables
let currentAvatar = null;
let recognition, utterance, isListening = false;
let isSpeaking = false;
let maleVoice = null;
let currentQuestion = '';
let currentAnswer = '';
let lastSpokenText = '';
let questionTimeout = null;

// Mobile-specific variables
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const avatarSelection = document.getElementById('avatarSelection');
const avatarChat = document.getElementById('avatarChat');
const avatarCards = document.querySelectorAll('.avatar-card');
const backBtn = document.getElementById('backBtn');
const themeToggle = document.getElementById('themeToggle');
const avatarName = document.getElementById('avatarName');
const avatarDomain = document.getElementById('avatarDomain');
const selectedAvatarImage = document.getElementById('selectedAvatarImage');
const selectedAvatarFallback = document.getElementById('selectedAvatarFallback');
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

// Check if response is more than 10 words
function isLongResponse(text) {
  const wordCount = text.trim().split(/\s+/).length;
  return wordCount > 10;
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
    showNotification('Speech recognition not supported in this browser', 'error');
  }
  
  // Load saved theme
  loadTheme();
  
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
    if (e.key === 'Escape' && avatarChat.style.display !== 'none') {
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
    showNotification('Invalid avatar selected', 'error');
    return;
  }
  
  currentAvatar = avatarType;
  const config = AVATAR_CONFIG[avatarType];
  
  // Update UI
  avatarName.textContent = config.name;
  avatarDomain.textContent = config.domain;
  
  // Set avatar image with proper error handling
  selectedAvatarImage.src = config.image;
  selectedAvatarImage.alt = config.name;
  
  // Show the image, hide fallback initially
  selectedAvatarImage.style.display = 'block';
  selectedAvatarFallback.style.display = 'none';
  
  // Handle image load error
  selectedAvatarImage.onerror = function() {
      selectedAvatarImage.style.display = 'none';
      selectedAvatarFallback.style.display = 'block';
      selectedAvatarFallback.textContent = getAvatarEmoji(avatarType);
  };
  
  // Handle image load success
  selectedAvatarImage.onload = function() {
      selectedAvatarImage.style.display = 'block';
      selectedAvatarFallback.style.display = 'none';
  };
  
  // Store selection
  localStorage.setItem('lastAvatar', avatarType);
  
  // Show chat interface
  showChatInterface();
  
  // Clear voice window and show loading
  voiceContent.innerHTML = '<p class="voice-placeholder">Loading...</p>';
  
  // Hide Q/A summary
  qaSummary.style.display = 'none';
  
  showNotification(`Selected ${config.name}`, 'success');
  
  // Speak greeting after a short delay
  setTimeout(() => {
    speakGreeting(config.greeting);
  }, 1000);
  
  // Debug: Log avatar selection
  console.log('Avatar selected:', avatarType);
  console.log('Avatar image path:', config.image);
  console.log('Avatar greeting:', config.greeting);
}

function getAvatarEmoji(avatarType) {
  const emojiMap = {
    'computer-teacher': '💻',
    'english-teacher': '📚',
    'biology-teacher': '🧬',
    'physics-teacher': '⚡',
    'chemistry-teacher': '🧪',
    'geography-teacher': '🌍',
    'hindi-teacher': '🇮🇳',
    'mathematics-teacher': '📐',
    'doctor': '👨‍⚕️',
    'engineer': '⚙️',
    'lawyer': '⚖️'
  };
  return emojiMap[avatarType] || '🎭';
}

function speakGreeting(greeting) {
  voiceContent.innerHTML = `<p>${greeting}</p>`;
  speakText(greeting);
}

function showChatInterface() {
  avatarSelection.style.display = 'none';
  avatarChat.style.display = 'flex';
  
  // Focus management for accessibility
  setTimeout(() => {
    talkBtn.focus();
  }, 100);
}

function showAvatarSelection() {
  avatarChat.style.display = 'none';
  avatarSelection.style.display = 'flex';
  
  // Stop any ongoing speech/listening
  if (isListening) stopListening();
  if (isSpeaking) stopSpeech();
  
  // Reset UI
  voiceContent.innerHTML = '<p class="voice-placeholder">Click "Talk" to start your conversation...</p>';
  qaSummary.style.display = 'none';
  statusEl.textContent = '';
  
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
    showNotification('Failed to get response. Please try again.', 'error');
  });
}

function displayResponse(question, response) {
  currentQuestion = question;
  currentAnswer = response;
  lastSpokenText = response;
  
  // Update voice window
  voiceContent.innerHTML = `<p>${response}</p>`;
  
  // Show Q/A summary if response is long (more than 10 words)
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
}

function initRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    console.error('Speech recognition not supported');
    showNotification('Speech recognition not supported in this browser', 'error');
    return;
  }
  
  recognition = new SpeechRecognition();
  
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US'; // Default language, will be updated per avatar
  
  recognition.onstart = () => {
    isListening = true;
    statusEl.textContent = 'Listening...';
    hapticFeedback('medium');
    
    // Clear voice window and show listening message
    voiceContent.innerHTML = '<p>Listening...</p>';
    
    console.log('Speech recognition started');
    
    if (isMobile) {
      showNotification('Listening...', 'info');
    }
  };
  
  recognition.onresult = async (event) => {
    const message = event.results[0][0].transcript;
    
    // Display the question immediately
    voiceContent.innerHTML = `<p>${message}</p>`;
    
    // Clear the question after 3 seconds
    questionTimeout = setTimeout(() => {
      voiceContent.innerHTML = '<p>Processing...</p>';
    }, 3000);
    
    processUserInput(message);
  };
  
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    isListening = false;
    statusEl.textContent = 'Error: ' + event.error;
    
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
    
    showNotification(errorMessage, 'error');
  };
  
  recognition.onend = () => {
    isListening = false;
    statusEl.textContent = '';
  };
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    showNotification('Speech synthesis not supported', 'error');
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
  selectedAvatarImage.classList.add('speaking');
  
  utterance.onstart = () => {
    statusEl.textContent = 'Speaking...';
    hapticFeedback('light');
  };
  
  utterance.onend = () => {
    isSpeaking = false;
    statusEl.textContent = '';
    selectedAvatarImage.classList.remove('speaking');
    hapticFeedback('success');
  };
  
  utterance.onerror = (event) => {
    console.error('Speech synthesis error:', event.error);
    isSpeaking = false;
    statusEl.textContent = 'Speech error';
    selectedAvatarImage.classList.remove('speaking');
    showNotification('Speech synthesis error', 'error');
  };
  
  speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
  isSpeaking = false;
  statusEl.textContent = '';
  selectedAvatarImage.classList.remove('speaking');
}

function startListening() {
  if (!recognition) {
    showNotification('Speech recognition not available', 'error');
    return;
  }
  
  if (isListening) {
    showNotification('Already listening...', 'info');
    return;
  }
  
  // Clear any existing timeout
  if (questionTimeout) {
    clearTimeout(questionTimeout);
  }
  
  // Update recognition language based on avatar
  if (currentAvatar === 'hindi-teacher') {
    recognition.lang = 'hi-IN';
  } else {
    recognition.lang = 'en-US';
  }
  
  try {
    recognition.start();
  } catch (error) {
    console.error('Error starting speech recognition:', error);
    showNotification('Failed to start voice recognition', 'error');
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
  if (questionTimeout) {
    clearTimeout(questionTimeout);
  }
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