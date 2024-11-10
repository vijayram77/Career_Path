
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = process.env.GEMINI_API;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [
            ],
          });
        
          const result = await chatSession.sendMessage(prompt);
          return (result.response.text());
    } catch (error) {
        const chatSession = model.startChat({
            generationConfig,
            history: [
            ],
          });
        
          const result = await chatSession.sendMessage(prompt);
          return (result.response.text());
        
    }
  }
  
  export default run
  