const express = require("express");
const os = require("os");

const app = express();
app.use(express.static("public"));

console.log("Iniciando servidor...");

// Rota de status do sistema
app.get("/api/status", (req, res) => {
  res.json({
    cpu: os.loadavg()[0].toFixed(2),
    memoria: (os.totalmem() - os.freemem()) / 1024 / 1024,
    uptime: os.uptime()
  });
});

// Simulação de automação
app.get("/api/run", (req, res) => {
  res.json({ status: "Automação executada com sucesso 🚀" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});