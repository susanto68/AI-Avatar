// Test script to verify History Teacher Avatar functionality
import fs from 'fs';
import path from 'path';

console.log('🧪 Testing History Teacher Avatar...\n');

// Test 1: Check if history teacher PNG exists
const historyTeacherImage = 'assets/avatars/history-teacher.png';
if (fs.existsSync(historyTeacherImage)) {
  console.log('✅ History Teacher PNG image exists');
} else {
  console.log('❌ History Teacher PNG image missing');
}

// Test 2: Check if history teacher is in main.js config
const mainJsContent = fs.readFileSync('main.js', 'utf8');
if (mainJsContent.includes('history-teacher')) {
  console.log('✅ History Teacher configured in main.js');
} else {
  console.log('❌ History Teacher not found in main.js');
}

// Test 3: Check if history teacher is in HTML
const htmlContent = fs.readFileSync('index.html', 'utf8');
if (htmlContent.includes('history-teacher')) {
  console.log('✅ History Teacher card exists in HTML');
} else {
  console.log('❌ History Teacher card missing from HTML');
}

// Test 4: Check if history teacher is in API
const apiContent = fs.readFileSync('api/chat.js', 'utf8');
if (apiContent.includes('history-teacher')) {
  console.log('✅ History Teacher configured in API');
} else {
  console.log('❌ History Teacher not found in API');
}

// Test 5: Check domain keywords
if (apiContent.includes('history') && apiContent.includes('ancient') && apiContent.includes('civilization')) {
  console.log('✅ History Teacher domain keywords configured');
} else {
  console.log('❌ History Teacher domain keywords missing');
}

// Test 6: Check mock responses
if (apiContent.includes('history-teacher') && apiContent.includes('historical')) {
  console.log('✅ History Teacher mock responses configured');
} else {
  console.log('❌ History Teacher mock responses missing');
}

console.log('\n🎯 History Teacher Avatar Test Complete!');
console.log('📝 To test manually:');
console.log('1. Start the server: npm start');
console.log('2. Open http://localhost:3000');
console.log('3. Click on History Teacher avatar');
console.log('4. Ask a history question like "Tell me about ancient Rome"'); 