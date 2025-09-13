const axios = require('axios');

// Test script for the Gemini inference API
async function testGeminiAPI() {
  const baseURL = 'http://localhost:3000';
  
  try {
    // Test health endpoint
    console.log('Testing health endpoint...');
    const healthResponse = await axios.get(`${baseURL}/health`);
    console.log('Health check:', healthResponse.data);
    
    // Test OpenAI inference endpoint
    console.log('\nTesting OpenAI inference endpoint...');
    const openaiResponse = await axios.get(`${baseURL}/openai_inference`, {
      data: {
        prompt: "What is the capital of France?"
      }
    });
    console.log('OpenAI response:', openaiResponse.data);
    
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log('Server is not running. Please start it with: npm start');
    } else {
      console.error('Error testing API:', error.message);
    }
  }
}

// Run the test
testGeminiAPI();
