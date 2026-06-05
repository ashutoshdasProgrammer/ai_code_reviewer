import { Router } from "express";
import aiController from "../controller/ai.controller.js";

const router = Router();

router.post("/generate", aiController.generateContent);
router.post("/openai", aiController.generateContentOpenAI);
router.post('/grokai', aiController.generateContentGrokAI);

export default router;