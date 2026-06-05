import express from "express";
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use("/ai", aiRoutes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
