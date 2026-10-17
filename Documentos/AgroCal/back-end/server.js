const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const FRONT_END = path.join(__dirname, "..", "front-end");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(FRONT_END));

app.get("/", (req, res) => {
  res.sendFile(path.join(FRONT_END, "loginPage.html"));
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Informe e-mail e senha." });
  }

  // TODO: validar credenciais no banco de dados
  res.redirect("/calculatorList.html");
});

app.get("/recuperar-senha", (req, res) => {
  res.send("Recuperação de senha em construção.");
});

app.listen(PORT, () => {
  console.log(`AgroCal rodando em http://localhost:${PORT}`);
});
