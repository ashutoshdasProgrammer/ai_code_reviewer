import OpenAI from "openai";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function generateContentOpenAI(code) {
  const response = await client.responses.create({
    model: "gpt-4o-2024-08-06",
    input: code,
  });

console.log(response.output_text);
return response.output_text;
}