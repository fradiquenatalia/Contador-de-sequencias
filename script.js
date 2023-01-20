function contar() {
  var inicio = document.getElementById("txti");
  var fim = document.getElementById("txtf");
  var passo = document.getElementById("txtp");
  var resultado = document.querySelector("div#res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    resultado.innerHTML = "Não é possível contar!";
    alert("[ERRO] Faltam dados!");
  } else {
    resultado.innerHTML = "Contando: ";
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    if (p <= 0) {
      alert("Passo inválido! Considerando passo: 1");
      p = 1;
    }
    if (i < f) {
      //contagem crescente
      for (var c = i; c <= f; c += p) {
        resultado.innerHTML += `${c} \u{27A1}`;
      }
    } else {
      //contagem decrescente
      for (var c = i; c >= f; c -= p) {
        resultado.innerHTML += `${c} \u{27A1}`;
      }
    }
    resultado.innerHTML += `\u{1F6D1}`;
  }
}
