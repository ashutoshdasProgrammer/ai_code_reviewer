
import aiServices from "../services/ai.service.js";
import Openai from '../services/ai.openai.services.js';
import aigroq from '../services/ai.groq.services.js';

async function generateContent(req, res) {
    const code = req.body.code;
    if(!code){
        return res.status(400).send("Code is required");
    }
    const response = await aiServices(code);
    res.send(response.candidates[0].content.parts[0].text);
}

async function generateContentOpenAI(req, res) {
    // const code = req.body.code;
    const code = "Write a one-sentence bedtime story about a unicorn.";
    if(!code){
        return res.status(400).send("Code is required");
    }
    // Call the OpenAI service and send the response back to the client
    const response = await Openai(code);
    console.log(response);
    // res.send(response);
}


async function generateContentGrokAI(req, res) {
    const code = req.body.code;
    // const code = "Tell me a one-liner joke about programmers.";
    if(!code){
        return res.status(400).send("Code is required");
    }
    // Call the GrokAI service and send the response back to the client
    const response = await aigroq(code);
    console.log(response);
    res.send(response);
}


export default { 
    generateContent, 
    generateContentOpenAI,
    generateContentGrokAI
};