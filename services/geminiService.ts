
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
let ai: GoogleGenAI | null = null;

try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  } else {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI:", error);
}

export const generateMarketingCopy = async (productName: string, features: string[], lang: string = 'en'): Promise<string> => {
  if (!ai) {
    return lang === 'th' ? "ออกแบบมาเพื่อประสิทธิภาพสูงสุด สัมผัสความแตกต่างของ SUPR" : "Engineered for peak performance. Experience the SUPR difference.";
  }
  try {
    const langNote = lang === 'th' ? 'Respond in Thai.' : 'Respond in English.';
    const prompt = `Write a technical yet sophisticated 35-word product description for an ergonomic furniture piece named "${productName}". 
    Key features: ${features.join(', ')}. 
    Focus on health, productivity, and premium materials. Use the brand name 'SUPR' once. 
    Tone: Architectural, minimalist, authoritative. ${langNote}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text ? response.text.trim() : (lang === 'th' ? "ออกแบบมาเพื่อประสิทธิภาพสูงสุด สัมผัสความแตกต่างของ SUPR" : "Engineered for peak performance. Experience the SUPR difference.");
  } catch (error) {
    console.error("Error generating marketing copy:", error);
    return lang === 'th' ? "ออกแบบมาเพื่อประสิทธิภาพสูงสุด สัมผัสความแตกต่างของ SUPR ในทุกรายละเอียด" : "Engineered for peak performance. Experience the SUPR difference in every detail.";
  }
};

export const chatWithSalesAI = async (history: { role: 'user' | 'model', text: string }[], userMessage: string, lang: string = 'en'): Promise<string> => {
  if (!ai) {
    return lang === 'th' ? "ขณะนี้ระบบฐานข้อมูลกำลังอยู่ระหว่างการปรับปรุง โปรดลองอีกครั้งในภายหลัง" : "I am currently recalibrating my specifications database. Please try again shortly.";
  }
  try {
    const langNote = lang === 'th' ? 'Respond in Thai language only.' : 'Respond in English language only.';
    const systemInstruction = `You are an Expert Ergonomic Consultant for SUPR.
    SUPR sells high-end office chairs and tables designed for health and aesthetics.
    Your goal is to explain the health benefits of features (lumbar support, standing desks).
    Tone: Professional, helpful, concise. ${langNote}
    Keep answers under 60 words. Do not use markdown formatting like bold or bullets, just plain text.`;
    
    const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction },
        history: history.map(h => ({
            role: h.role,
            parts: [{ text: h.text }]
        }))
    });
    
    const result = await chat.sendMessage({ message: userMessage });
    return result.text || (lang === 'th' ? "ขออภัย คุณช่วยทวนคำถามเกี่ยวกับเฟอร์นิเจอร์ของเราอีกครั้งได้ไหม?" : "I apologize, could you rephrase your question regarding our furniture?");
  } catch (error) {
    console.error("Chat error:", error);
    return lang === 'th' ? "ขณะนี้ระบบฐานข้อมูลกำลังอยู่ระหว่างการปรับปรุง โปรดลองอีกครั้งในภายหลัง" : "I am currently recalibrating my specifications database. Please try again shortly.";
  }
};
