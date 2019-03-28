const express = require("express");

const app = express();

let usuario = {
  nome: "João",
  curso: "EC"
};

app.get("/usuarios", function(req, res) {
  res.json(usuario);
});

app.post("/", function(req, res) {
  res.json({message: "só o /"});
});1

app.listen(3000);