const { readFileSync } = require('fs');
const { join } = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load system prompt template
let SYSTEM_PROMPT_TEMPLATE;
try {
  SYSTEM_PROMPT_TEMPLATE = readFileSync(
    join(process.cwd(), 'api', 'system_prompt.txt'),
    'utf8'
  ).trim();
} catch (error) {
  console.error('Error loading system prompt template:', error);
  SYSTEM_PROMPT_TEMPLATE = "You are a helpful AI assistant. Provide clear, educational responses.";
}

const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message, avatar, systemPrompt } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  // Check if Gemini API key is available
  if (!process.env.GEMINI_API_KEY) {
    // Provide mock responses based on avatar type
    const mockResponses = getMockResponses(avatar);
    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    return res.status(200).json({ reply: randomResponse });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Use provided system prompt or fallback to template
    const finalSystemPrompt = systemPrompt || SYSTEM_PROMPT_TEMPLATE;
    
    const prompt = `${finalSystemPrompt}\n\nUser: ${message.trim()}\n\nAssistant:`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text.trim() });
  } catch (err) {
    console.error('Gemini API error:', err);
    
    // Fallback to mock responses on API error
    const mockResponses = getMockResponses(avatar);
    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    res.status(200).json({ reply: randomResponse });
  }
});

function getMockResponses(avatarType) {
  const responses = {
    'computer-teacher': [
      "Great question! As a computer science teacher, I'd be happy to help you with programming concepts. What specific topic would you like to explore?",
      "Excellent! Programming is all about problem-solving. Let me explain this concept in a way that's easy to understand.",
      "That's a wonderful programming question! Let me break this down step by step for you.",
      "As your computer science teacher, I'm here to guide you through this programming challenge. What would you like to learn?"
    ],
    'english-teacher': [
      "What an interesting language question! Let me help you understand this English concept better.",
      "Great writing question! Here's how we can improve your language skills.",
      "That's a wonderful literary analysis question. Let me share some insights with you.",
      "As your English teacher, I'm here to help you master the language. What would you like to explore?"
    ],
    'biology-teacher': [
      "Fascinating biology question! Let me explain this life science concept in simple terms.",
      "That's a great question about living organisms! Here's what you need to know.",
      "Excellent biology inquiry! Let me break down this biological process for you.",
      "As your biology teacher, I'm excited to help you understand life sciences. What interests you?"
    ],
    'physics-teacher': [
      "That's an excellent physics question! Let me explain this physical concept clearly.",
      "Great question about the laws of nature! Here's how physics explains this phenomenon.",
      "Wonderful physics inquiry! Let me demonstrate this concept with practical examples.",
      "As your physics teacher, I'm here to help you understand the physical world. What would you like to explore?"
    ],
    'chemistry-teacher': [
      "That's a fascinating chemistry question! Let me explain this chemical concept step by step.",
      "Great question about chemical reactions! Here's what's happening at the molecular level.",
      "Excellent chemistry inquiry! Let me show you how this chemical process works.",
      "As your chemistry teacher, I'm excited to help you understand chemical sciences. What interests you?"
    ],
    'geography-teacher': [
      "That's an interesting geography question! Let me help you understand this Earth science concept.",
      "Great question about our planet! Here's what geography tells us about this topic.",
      "Wonderful geography inquiry! Let me explain this environmental concept clearly.",
      "As your geography teacher, I'm here to help you explore our world. What would you like to learn?"
    ],
    'hindi-teacher': [
      "बहुत अच्छा प्रश्न! मैं आपकी हिंदी भाषा में मदद करने के लिए यहाँ हूँ।",
      "हिंदी भाषा के बारे में यह एक शानदार सवाल है! मुझे आपकी मदद करने में खुशी होगी।",
      "यह एक बेहतरीन हिंदी प्रश्न है! आइए इसे सरल तरीके से समझते हैं।",
      "मैं आपकी हिंदी शिक्षिका हूँ और आपकी भाषा सीखने में मदद करने के लिए तैयार हूँ।"
    ],
    'mathematics-teacher': [
      "That's an excellent math question! Let me help you solve this step by step.",
      "Great mathematical thinking! Here's how we can approach this problem.",
      "Wonderful math inquiry! Let me break down this mathematical concept clearly.",
      "As your mathematics teacher, I'm here to help you master mathematical concepts. What would you like to explore?"
    ],
    'doctor': [
      "That's an important health question! Let me provide some general information about this topic.",
      "Great health inquiry! Here's what you should know about this medical concept.",
      "That's a thoughtful health question. Let me explain this in simple terms.",
      "As a medical professional, I'm here to provide general health information. Remember to consult healthcare providers for specific medical advice."
    ],
    'engineer': [
      "That's an excellent engineering question! Let me explain this technical concept clearly.",
      "Great engineering inquiry! Here's how we can approach this technical challenge.",
      "Wonderful engineering question! Let me break down this technical process for you.",
      "As an engineer, I'm here to help you understand technical concepts and problem-solving approaches."
    ],
    'lawyer': [
      "That's an interesting legal question! Let me provide some general information about this legal concept.",
      "Great legal inquiry! Here's what you should know about this legal principle.",
      "That's a thoughtful legal question. Let me explain this legal concept in simple terms.",
      "As a legal professional, I'm here to provide general legal information. Remember to consult qualified legal professionals for specific legal advice."
    ]
  };

  return responses[avatarType] || [
    "Hello! I'm here to help you learn and explore. What would you like to discuss?",
    "Great question! Let me help you understand this topic better.",
    "That's an interesting question! Here's what I can tell you about this.",
    "I'm here to assist you with your learning journey. What would you like to explore?"
  ];
}

module.exports = router; 