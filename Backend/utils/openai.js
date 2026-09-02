import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const getOpenAIAPIResponse = async (message) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: message
        });

        console.log("Gemini response:", response.text);

        return response.text;

    } catch (err) {
        console.log("Gemini Error:", err);
        throw err;
    }
};

export default getOpenAIAPIResponse;