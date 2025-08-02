// Avatar Configuration
const AVATAR_CONFIG = {
  'computer-teacher': {
    name: 'Computer Teacher',
    image: 'assets/avatars/computer-teacher.png',
    systemPrompt: 'You are a knowledgeable and enthusiastic computer science teacher. You specialize in programming, algorithms, data structures, and technology. Provide clear, educational explanations with practical examples. Use a friendly and encouraging tone.',
    domain: 'Programming & Technology'
  },
  'english-teacher': {
    name: 'English Teacher',
    image: 'assets/avatars/english-teacher.png',
    systemPrompt: 'You are an experienced English language teacher. You excel in grammar, literature, writing, and communication skills. Provide helpful guidance on language learning, writing techniques, and literary analysis.',
    domain: 'Language & Literature'
  },
  'biology-teacher': {
    name: 'Biology Teacher',
    image: 'assets/avatars/biology-teacher.png',
    systemPrompt: 'You are a passionate biology teacher. You specialize in life sciences, anatomy, genetics, ecology, and biological processes. Explain complex biological concepts in simple terms with real-world examples.',
    domain: 'Life Sciences'
  },
  'physics-teacher': {
    name: 'Physics Teacher',
    image: 'assets/avatars/physics-teacher.png',
    systemPrompt: 'You are an engaging physics teacher. You excel in mechanics, thermodynamics, electromagnetism, and modern physics. Use practical examples and demonstrations to explain physical concepts.',
    domain: 'Physical Sciences'
  },
  'chemistry-teacher': {
    name: 'Chemistry Teacher',
    image: 'assets/avatars/chemistry-teacher.png',
    systemPrompt: 'You are a skilled chemistry teacher. You specialize in organic chemistry, inorganic chemistry, physical chemistry, and chemical reactions. Make chemistry accessible and interesting with practical applications.',
    domain: 'Chemical Sciences'
  },
  'geography-teacher': {
    name: 'Geography Teacher',
    image: 'assets/avatars/geography-teacher.png',
    systemPrompt: 'You are a knowledgeable geography teacher. You cover physical geography, human geography, environmental science, and world cultures. Connect geographical concepts to current events and real-world issues.',
    domain: 'Earth & Environment'
  },
  'hindi-teacher': {
    name: 'Hindi Teacher',
    image: 'assets/avatars/hindi-teacher.png',
    systemPrompt: 'You are a dedicated Hindi language teacher. You teach Hindi grammar, literature, poetry, and cultural aspects. Help students understand and appreciate Hindi language and Indian culture.',
    domain: 'Hindi Language'
  },
  'mathematics-teacher': {
    name: 'Mathematics Teacher',
    image: 'assets/avatars/mathematics-teacher.png',
    systemPrompt: 'You are an excellent mathematics teacher. You cover algebra, geometry, calculus, statistics, and mathematical reasoning. Break down complex mathematical concepts into understandable steps.',
    domain: 'Math & Logic'
  },
  'doctor': {
    name: 'Doctor',
    image: 'assets/avatars/doctor.png',
    systemPrompt: 'You are a knowledgeable medical professional. You can provide general health information, explain medical concepts, and offer wellness advice. Always remind users to consult healthcare professionals for specific medical concerns.',
    domain: 'Health & Medicine'
  },
  'engineer': {
    name: 'Engineer',
    image: 'assets/avatars/engineer.png',
    systemPrompt: 'You are an experienced engineer. You specialize in various engineering disciplines including mechanical, electrical, civil, and software engineering. Provide practical engineering solutions and explain technical concepts clearly.',
    domain: 'Engineering & Design'
  },
  'lawyer': {
    name: 'Lawyer',
    image: 'assets/avatars/lawyer.png',
    systemPrompt: 'You are a knowledgeable legal professional. You can explain legal concepts, discuss general legal principles, and provide educational information about law. Always remind users to consult qualified legal professionals for specific legal advice.',
    domain: 'Legal & Law'
  }
};

// Global Variables
let currentAvatar = null;
let recognition, utterance, isListening = false;
let isSpeaking = false;
let maleVoice = null;
let blinkInterval, speakInterval;

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
const avatarImage = document.getElementById('avatarImage');
const avatarAnimation = document.getElementById('avatarAnimation');
const avatarEyes = document.getElementById('avatarEyes');
const avatarMouth = document.getElementById('avatarMouth');
const responseBox = document.getElementById('responseBox');
const statusEl = document.getElementById('status');
const talkBtn = document.getElementById('talkBtn');
const stopBtn = document.getElementById('stopBtn');
const chatSidebar = document.getElementById('chatSidebar');

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
      voice.name.includes('Male')
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
  avatarImage.src = config.image;
  avatarImage.alt = config.name;
  
  // Store selection
  localStorage.setItem('lastAvatar', avatarType);
  
  // Show chat interface
  showChatInterface();
  
  // Welcome message
  const welcomeMessage = `Hello! I'm your ${config.name}. I specialize in ${config.domain.toLowerCase()}. How can I help you today?`;
  responseBox.textContent = welcomeMessage;
  
  // Speak welcome message
  speakText(welcomeMessage);
  
  // Enable controls
  talkBtn.disabled = false;
  stopBtn.disabled = false;
  
  showNotification(`Selected ${config.name}`, 'success');
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
  responseBox.textContent = 'Select an avatar to start your conversation...';
  statusEl.textContent = '';
  talkBtn.disabled = true;
  stopBtn.disabled = true;
  
  // Focus management
  setTimeout(() => {
    const firstCard = document.querySelector('.avatar-card');
    if (firstCard) firstCard.focus();
  }, 100);
}

function initRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  
  recognition.onstart = () => {
    isListening = true;
    statusEl.textContent = 'Listening...';
    talkBtn.disabled = true;
    stopBtn.disabled = false;
    hapticFeedback('medium');
    
    if (isMobile) {
      showNotification('Listening...', 'info');
    }
  };
  
  recognition.onresult = async (event) => {
    const message = event.results[0][0].transcript;
    statusEl.textContent = 'Processing...';
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          avatar: currentAvatar,
          systemPrompt: AVATAR_CONFIG[currentAvatar].systemPrompt
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      processReply(data.reply);
      
    } catch (error) {
      console.error('API Error:', error);
      showMobileError('Failed to get response. Please try again.');
      statusEl.textContent = 'Error occurred';
    }
  };
  
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    isListening = false;
    statusEl.textContent = 'Error: ' + event.error;
    talkBtn.disabled = false;
    stopBtn.disabled = true;
    
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
  };
}

function processReply(reply) {
  responseBox.textContent = reply;
  
  // Check for code blocks
  const codeMatch = reply.match(/```([\s\S]*?)```/g);
  if (codeMatch) {
    codeMatch.forEach(code => {
      const cleanCode = code.replace(/```/g, '').trim();
      showSnippet(cleanCode);
    });
  }
  
  // Check for Q&A format
  const qaMatch = reply.match(/\*\*(.*?)\*\*[\s\S]*?Answer:?\s*(.*)/i);
  if (qaMatch) {
    showQA(qaMatch[1], qaMatch[2]);
  }
  
  // Speak the reply
  speakText(reply);
}

function showSnippet(code) {
  const snippetDiv = document.createElement('div');
  snippetDiv.className = 'snippet';
  snippetDiv.innerHTML = `
    <h4>Code Snippet</h4>
    <pre>${code}</pre>
    <button class="copy-btn" onclick="copyToClipboard('${code.replace(/'/g, "\\'")}')">
      Copy Code
    </button>
  `;
  chatSidebar.appendChild(snippetDiv);
  chatSidebar.classList.add('active');
}

function showQA(question, answer) {
  const qaDiv = document.createElement('div');
  qaDiv.className = 'qa';
  qaDiv.innerHTML = `
    <strong>${question}</strong>
    <p>${answer}</p>
  `;
  chatSidebar.appendChild(qaDiv);
  chatSidebar.classList.add('active');
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
  
  // Set voice
  if (maleVoice) {
    utterance.voice = maleVoice;
  }
  
  // Configure speech parameters
  utterance.rate = 0.9;
  utterance.pitch = 0.8;
  utterance.volume = 1.0;
  
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

function testSound() {
  const testMessage = "Hello! This is a test of the AI Avatar Assistant. The voice system is working correctly.";
  responseBox.textContent = testMessage;
  speakText(testMessage);
  showNotification('Testing audio output...', 'info');
}

// Global function for test button
window.testSound = testSound;

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