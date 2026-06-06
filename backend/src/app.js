import express from "express";
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors';

const app = express();

const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173"

app.use(cors({
    origin: allowedOrigin,
    credentials: true
}));
app.use(express.json());
app.use("/ai", aiRoutes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
