const OpenAI = require("openai");

const openai = new OpenAI(process.env.OPENAI_API_KEY);
const systemPrompt =
  "You are an assistant for a typing game called TypoCoder. You generate random code snippets found in github projects from 5 to 20 lines long which users will type out to improve their typing skills. Give the generated code only and nothing else. No not include code backticks ` or ```. Do not explain the code.";

async function generateCode(language) {
  const prompt = `Generate a ${language} code snippet`;
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      model: "gpt-3.5-turbo",
    });
    return chatCompletion.choices[0]?.message.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = generateCode;
