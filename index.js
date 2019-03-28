import express from "express";
import bodyparser from "body-parser";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(bodyparser.json());

app.post("/usuarios", (req, res) => {
  res.json(req.body.nome);
});

let port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port || 3000, () => {
  console.log("API rodando na porta " + port);
});

export default app;