function alterarValor(numero,elemento) {   
    var numero = 'R$' + numero;
    document.getElementById(elemento).innerText = numero;
}


var elementos = document.querySelectorAll(".card");
var elementos2 = document.querySelectorAll(".details");
var tamanhoAtual = "normal";

function toggleDisplay() {

  if (tamanhoAtual === "normal") {
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.height = "600px";
    }
    tamanhoAtual = "ampliado";
  } else {
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.height = "320px";
    }
    tamanhoAtual = "normal";
  }

  if (tamanhoAtual === "normal") {
    for (var i = 0; i < elementos2.length; i++) {
      elementos2[i].style.marginTop = "200px";
    }
  } else {
    for (var i = 0; i < elementos2.length; i++) {
      elementos2[i].style.marginTop = "-20px";
    }
  }
}


function alterarValor(numero, elemento){
    var numero = 'R$ ' + numero;
    document.getElementById(elemento).innerText = numero;
}
