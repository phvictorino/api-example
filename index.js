import express from "express";
import bodyparser from "body-parser";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(bodyparser.json());

app.post("/usuarios", (req, res) => {
  res.json(req.body.nome);
});

app.listen(process.env.PORT, () => {
  console.log("API rodando na porta " + process.env.PORT);
});

export default app;