# Mediflow Backend

A Node.js Express server for agentic workflows with OpenAI integration.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Get your OpenAI API key:
   - Go to [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Copy the key for the next step

3. Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### GET /openai_inference
Makes a call to OpenAI using the prompt from the request body.

**Request:**
```json
{
  "prompt": "Your prompt here"
}
```

**Response:**
```json
{
  "success": true,
  "prompt": "Your prompt here",
  "response": "OpenAI's response"
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Mediflow backend is running"
}
```

## Usage Example

```bash
curl -X GET http://localhost:3000/openai_inference \
  -H "Content-Type: application/json" \
  -d '{"prompt": "What is the capital of France?"}'
```
