function calcularPontuacao() {
  var arroz = Number(document.getElementById("arroz").value) || 0;
  var feijao = Number(document.getElementById("feijao").value) || 0;
  var oleo = Number(document.getElementById("oleo").value) || 0;
  var macarrao = Number(document.getElementById("macarrao").value) || 0;

  var pontosArroz = arroz * 10;
  var pontosFeijao = feijao * 8;
  var pontosOleo = oleo * 4;
  var pontosMacarrao = macarrao * 2;

  var total = pontosArroz + pontosFeijao + pontosOleo + pontosMacarrao;

  document.getElementById("resultado").innerHTML =
    "Pontuação total: <strong>" + total + " pontos</strong><br>" +
    "Arroz: " + pontosArroz + " pts<br>" +
    "Feijão: " + pontosFeijao + " pts<br>" +
    "Óleo: " + pontosOleo + " pts<br>" +
    "Macarrão: " + pontosMacarrao + " pts";
}

function limparCampos() {
  document.getElementById("arroz").value = 0;
  document.getElementById("feijao").value = 0;
  document.getElementById("oleo").value = 0;
  document.getElementById("macarrao").value = 0;

  document.getElementById("resultado").textContent =
    "A pontuação total aparecerá aqui.";
}
