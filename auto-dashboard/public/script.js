async function atualizarStatus() {
  const res = await fetch("/api/status");
  const data = await res.json();

  document.getElementById("cpu").innerText = data.cpu;
  document.getElementById("memoria").innerText = data.memoria.toFixed(0);
  document.getElementById("uptime").innerText = data.uptime;
}

async function rodar() {
  const res = await fetch("/api/run");
  const data = await res.json();

  document.getElementById("resultado").innerText = data.status;
}

setInterval(atualizarStatus, 2000);