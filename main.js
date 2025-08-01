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

// API Configuration
const API_URL = '/api/chat';

// Mobile Haptic Feedback
function hapticFeedback(type = 'light') {
  if (isMobile && navigator.vibrate) {
    switch (type) {
      case 'light':
        navigator.vibrate(10);
        break;
      case 'medium':
        navigator.vibrate(50);
        break;
      case 'heavy':
        navigator.vibrate(100);
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

// Mobile Gesture Handling
function setupMobileGestures() {
  if (!isMobile) return;

  // Swipe down to go back
  document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (!isGestureEnabled) return;
    
    touchEndY = e.changedTouches[0].clientY;
    const swipeDistance = touchStartY - touchEndY;
    
    // Swipe down gesture (negative distance)
    if (swipeDistance < -100 && chatInterface.style.display !== 'none') {
      hapticFeedback('medium');
      showAvatarSelection();
    }
  }, { passive: true });

  // Prevent zoom on double tap
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}

// Mobile-specific optimizations
function setupMobileOptimizations() {
  if (!isMobile) return;

  // Add mobile-specific classes
  document.body.classList.add('mobile-device');
  
  // Optimize for mobile performance
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker registration failed, continue without it
    });
  }

  // Handle mobile orientation changes
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  // Prevent pull-to-refresh on mobile
  document.body.style.overscrollBehavior = 'none';
}

// Enhanced error handling for mobile
function showMobileError(message) {
  hapticFeedback('error');
  statusEl.textContent = message;
  statusEl.style.color = '#ef4444';
  
  setTimeout(() => {
    statusEl.textContent = '';
    statusEl.style.color = '';
  }, 3000);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  setupEventListeners();
  loadTheme();
  loadLastAvatar();
  setupMobileGestures();
  setupMobileOptimizations();
});

function initializeApp() {
  // Initialize speech synthesis voices
  window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();
    maleVoice = voices.find(v => 
      v.lang.includes('en') && 
      (v.name.includes('David') || v.name.includes('Male') || v.name.includes('UK'))
    ) || voices.find(v => v.lang.includes('en'));
  };

  // Initialize speech recognition
  initRecognition();
}

function setupEventListeners() {
  // Avatar selection
  avatarCards.forEach(card => {
    card.addEventListener('click', () => {
      const avatarType = card.dataset.avatar;
      hapticFeedback('medium');
      selectAvatar(avatarType);
    });
    
    // Mobile touch feedback
    if (isMobile) {
      card.addEventListener('touchstart', () => {
        card.style.transform = 'scale(0.95)';
      }, { passive: true });
      
      card.addEventListener('touchend', () => {
        card.style.transform = '';
      }, { passive: true });
    }
  });

  // Back button
  backBtn.addEventListener('click', () => {
    hapticFeedback('light');
    showAvatarSelection();
  });

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    hapticFeedback('light');
    toggleTheme();
  });

  // Talk button
  talkBtn.addEventListener('click', () => {
    hapticFeedback('medium');
    if (!isListening) {
      startListening();
    } else {
      stopListening();
    }
  });

  // Stop button
  stopBtn.addEventListener('click', () => {
    hapticFeedback('medium');
    stopListening();
    stopSpeech();
  });

  // Mobile-specific button enhancements
  if (isMobile) {
    [talkBtn, stopBtn, backBtn, themeToggle].forEach(btn => {
      btn.addEventListener('touchstart', () => {
        btn.style.transform = 'scale(0.95)';
      }, { passive: true });
      
      btn.addEventListener('touchend', () => {
        btn.style.transform = '';
      }, { passive: true });
    });
  }
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
  
  // Store selection
  localStorage.setItem('lastAvatar', avatarType);
  
  // Show chat interface with mobile animation
  showChatInterface();
  
  // Mobile success feedback
  hapticFeedback('success');
  
  // Update status
  statusEl.textContent = `Selected ${config.name} - ${config.domain}`;
  setTimeout(() => {
    statusEl.textContent = 'Tap "Talk" to start voice interaction';
  }, 2000);
}

function showChatInterface() {
  avatarSelection.style.display = 'none';
  chatInterface.style.display = 'flex';
  
  // Mobile-specific animation
  if (isMobile) {
    chatInterface.style.animation = 'slideInUp 0.3s ease-out';
  }
  
  // Start avatar animations
  startAvatarAnimations();
  
  // Enable controls
  talkBtn.disabled = false;
  stopBtn.disabled = false;
}

function showAvatarSelection() {
  chatInterface.style.display = 'none';
  avatarSelection.style.display = 'block';
  
  // Stop animations and speech
  stopAvatarAnimations();
  stopSpeech();
  stopListening();
  
  // Disable controls
  talkBtn.disabled = true;
  stopBtn.disabled = true;
  
  // Clear response
  responseBox.textContent = 'Select an avatar to start your conversation...';
  statusEl.textContent = '';
}

function initRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showMobileError('Speech Recognition not supported in this browser');
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  recognition.onstart = () => {
    isListening = true;
    statusEl.textContent = 'Listening...';
    talkBtn.disabled = true;
    stopBtn.disabled = false;
    avatarAnimation.classList.add('listening');
    hapticFeedback('medium');
  };

  recognition.onresult = async (event) => {
    const transcript = event.results[0][0].transcript;
    responseBox.textContent = `You said: ${transcript}`;
    statusEl.textContent = 'Processing...';
    hapticFeedback('light');
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: transcript,
          avatar: currentAvatar,
          systemPrompt: AVATAR_CONFIG[currentAvatar].systemPrompt
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      if (data.reply) {
        processReply(data.reply);
        hapticFeedback('success');
      } else {
        throw new Error('No reply received');
      }
    } catch (error) {
      console.error('API Error:', error);
      showMobileError('Connection error. Please try again.');
      processReply('I apologize, but I cannot connect to my knowledge base right now. Please try again later.');
    }
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    
    let errorMessage = 'Speech recognition error';
    switch (event.error) {
      case 'no-speech':
        errorMessage = 'No speech detected. Please try again.';
        break;
      case 'audio-capture':
        errorMessage = 'Microphone not found. Please check your device.';
        break;
      case 'not-allowed':
        errorMessage = 'Microphone access denied. Please allow microphone access.';
        break;
      case 'network':
        errorMessage = 'Network error. Please check your connection.';
        break;
      default:
        errorMessage = `Error: ${event.error}`;
    }
    
    showMobileError(errorMessage);
    cleanup();
  };

  recognition.onend = () => {
    isListening = false;
    avatarAnimation.classList.remove('listening');
    if (!isSpeaking) {
      talkBtn.disabled = false;
      stopBtn.disabled = true;
    }
  };
}

function processReply(reply) {
  // Detect code blocks
  const codeMatch = reply.match(/```([\s\S]*?)```/);
  const qaMatch = reply.match(/\*\*(.*?)\*\*([\s\S]*)/);
  
  if (codeMatch) {
    const code = codeMatch[1].trim();
    showSnippet(code);
    responseBox.textContent = reply.replace(codeMatch[0], '').trim();
  } else if (qaMatch) {
    showQA(qaMatch[1].trim(), qaMatch[2].trim());
    responseBox.textContent = '';
  } else {
    responseBox.textContent = reply;
  }
  
  speakText(responseBox.textContent || reply);
}

function showSnippet(code) {
  chatSidebar.innerHTML = `
    <h3>Code Snippet</h3>
    <div class="snippet">${code}</div>
    <button class="copy-btn" onclick="copyToClipboard('${code.replace(/'/g, "\\'")}')">
      📋 Copy Code
    </button>
  `;
  chatSidebar.classList.add('active');
  
  // Mobile haptic feedback for code snippet
  if (isMobile) {
    hapticFeedback('light');
  }
}

function showQA(question, answer) {
  chatSidebar.innerHTML = `
    <h3>Q & A</h3>
    <div class="qa">
      <strong>${question}</strong><br>
      ${answer}
    </div>
  `;
  chatSidebar.classList.add('active');
  
  // Mobile haptic feedback for Q&A
  if (isMobile) {
    hapticFeedback('light');
  }
}

function speakText(text) {
  if (!text || isSpeaking) return;
  
  // Stop any existing speech
  window.speechSynthesis.cancel();
  
  utterance = new SpeechSynthesisUtterance(text);
  
  // Configure voice
  if (maleVoice) {
    utterance.voice = maleVoice;
  }
  
  // Mobile-optimized speech settings
  utterance.rate = isMobile ? 0.9 : 1.0;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;
  
  utterance.onstart = () => {
    isSpeaking = true;
    statusEl.textContent = 'Speaking...';
    avatarAnimation.classList.add('speaking');
    hapticFeedback('light');
  };
  
  utterance.onend = () => {
    isSpeaking = false;
    statusEl.textContent = 'Ready to listen';
    avatarAnimation.classList.remove('speaking');
    
    if (!isListening) {
      talkBtn.disabled = false;
      stopBtn.disabled = true;
    }
  };
  
  utterance.onerror = (event) => {
    console.error('Speech synthesis error:', event.error);
    isSpeaking = false;
    avatarAnimation.classList.remove('speaking');
    showMobileError('Speech synthesis error');
    
    if (!isListening) {
      talkBtn.disabled = false;
      stopBtn.disabled = true;
    }
  };
  
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  window.speechSynthesis.cancel();
  isSpeaking = false;
  avatarAnimation.classList.remove('speaking');
  hapticFeedback('light');
}

function startListening() {
  if (isListening || isSpeaking) return;
  
  try {
    recognition.start();
  } catch (error) {
    console.error('Failed to start recognition:', error);
    showMobileError('Failed to start voice recognition');
  }
}

function stopListening() {
  if (!isListening) return;
  
  try {
    recognition.stop();
  } catch (error) {
    console.error('Failed to stop recognition:', error);
  }
}

function cleanup() {
  isListening = false;
  avatarAnimation.classList.remove('listening');
  talkBtn.disabled = false;
  stopBtn.disabled = true;
}

// Avatar Animations
function startAvatarAnimations() {
  // Blinking animation
  blinkInterval = setInterval(() => {
    avatarAnimation.classList.add('blinking');
    setTimeout(() => {
      avatarAnimation.classList.remove('blinking');
    }, 200);
  }, 3000);
}

function stopAvatarAnimations() {
  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }
  avatarAnimation.classList.remove('blinking', 'speaking', 'listening');
}

// Theme Management
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains('dark-theme');
  
  if (isDark) {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  }
  
  // Mobile haptic feedback for theme change
  hapticFeedback('light');
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
  }
}

function loadLastAvatar() {
  const lastAvatar = localStorage.getItem('lastAvatar');
  if (lastAvatar && AVATAR_CONFIG[lastAvatar]) {
    // Auto-select the last used avatar with mobile delay
    setTimeout(() => {
      selectAvatar(lastAvatar);
    }, isMobile ? 1500 : 1000);
  }
}

// Utility Functions
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '✅ Copied!';
    copyBtn.classList.add('success');
    
    // Mobile haptic feedback for copy
    hapticFeedback('success');
    
    setTimeout(() => {
      copyBtn.textContent = originalText;
      copyBtn.classList.remove('success');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text:', err);
    showMobileError('Failed to copy to clipboard');
  });
}

// Test sound function with mobile enhancements
function testSound() {
  if (isSpeaking || isListening) {
    showMobileError('Please wait for current operation to complete');
    return;
  }
  
  hapticFeedback('medium');
  
  const testMessage = "Hello! This is a test of the voice system. The AI Avatar Assistant is working correctly.";
  
  // Show test status
  statusEl.textContent = 'Testing voice system...';
  responseBox.textContent = testMessage;
  
  // Speak test message
  const testUtterance = new SpeechSynthesisUtterance(testMessage);
  
  if (maleVoice) {
    testUtterance.voice = maleVoice;
  }
  
  // Mobile-optimized test settings
  testUtterance.rate = isMobile ? 0.9 : 1.0;
  testUtterance.pitch = 1.0;
  testUtterance.volume = 1.0;
  
  testUtterance.onstart = () => {
    statusEl.textContent = 'Playing test sound...';
    avatarAnimation.classList.add('speaking');
  };
  
  testUtterance.onend = () => {
    statusEl.textContent = 'Test completed successfully!';
    avatarAnimation.classList.remove('speaking');
    hapticFeedback('success');
    
    setTimeout(() => {
      statusEl.textContent = 'Ready to listen';
      responseBox.textContent = 'Select an avatar to start your conversation...';
    }, 2000);
  };
  
  testUtterance.onerror = (event) => {
    console.error('Test speech error:', event.error);
    statusEl.textContent = 'Test failed - check audio settings';
    avatarAnimation.classList.remove('speaking');
    showMobileError('Audio test failed');
  };
  
  window.speechSynthesis.speak(testUtterance);
}

// Mobile-specific utility functions
function isOnline() {
  return navigator.onLine;
}

function showOfflineMessage() {
  if (!isOnline()) {
    showMobileError('You are offline. Please check your internet connection.');
  }
}

// Add online/offline event listeners for mobile
if (isMobile) {
  window.addEventListener('online', () => {
    hapticFeedback('success');
    statusEl.textContent = 'Connection restored';
    setTimeout(() => {
      statusEl.textContent = '';
    }, 2000);
  });
  
  window.addEventListener('offline', () => {
    hapticFeedback('error');
    showMobileError('Connection lost. Please check your internet connection.');
  });
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cleanup();
  }
});

// Handle beforeunload
window.addEventListener('beforeunload', () => {
  cleanup();
}); 