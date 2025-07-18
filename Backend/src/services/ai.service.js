import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  }); 
  console.log(response.text);
}

await main();

async function generateContent(prompt) {
    const result= await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        
    });
    return response.text;
}
 module.exports = {generateContent};