document.querySelector("#tela").innerHTML =
  '<div id="tela-nums"></div><div id="tela-op"></div>';

// var resultado = $("#tela-op");
var tela = $("#tela-nums").html();

var estáOperando = false;

var listaOperadores = [];

function operacao(x, y, op) {
  if (op == "+") {
    return x + y;
  } else if (op == "-") {
    return x - y;
  } else if (op == "*") {
    return x * y;
  } else if (op == "/") {
    return x / y;
  }
}

//mostra na tela valor do HTML do botão clicado
jQuery(function () {
  $(".btn-num").on("click", function () {
    $("#tela-nums").append($(this).html());

    if (estáOperando) {
      let tela = $("#tela-nums").html();

      var resultado = $("#tela-op");

      console.log("tela é " + tela);

      let listaNumeros = tela.split(/([+-/*])/);
      console.log("split de " + listaNumeros);

      let num1 = listaNumeros[0];
      let num2 = listaNumeros[2];
      let op = listaNumeros[1];

      console.log("nums são " + num1, op, num2);

      resultado.html(operacao(parseFloat(num1), parseFloat(num2), op));

      console.log(listaNumeros);
    }
  });
});

//botões de operadores guardam a operação e não permitem outra
jQuery(function () {
  $(".btn-op").on("click", function () {
    if (estáOperando == false) {
      $("#tela-nums").append($(this).html());
      estáOperando = true;
    } else {
      let tela = $("#tela-nums").html();
      let resultado = $("#tela-op").html();
      $("#tela-nums").html(resultado);
      $("#tela-nums").append($(this).html());
      $("#tela-op").empty();
    }
  });
});

//botão igual separa os operandos na tela de nums e mostra o resultado na tela de resultados
jQuery(function () {
  $(".btn-eq").on("click", function () {
    let listaNumeros = $("#tela-nums")
      .html()
      .split(/[+-/*]+/);

    console.log(listaNumeros);

    for (e in listaNumeros) {
      console.log(listaNumeros[e]);
    }
  });
});

//função AC
jQuery(function () {
  $(".btn-ac").on("click", function () {
    $("#tela-nums").empty();
    $("#tela-op").empty();
    estáOperando = false;
  });
});

//função backspace
jQuery(function () {
  $(".btn-bkspc").on("click", function () {
    console.log($("#tela-nums").html().slice(0, -1));

    newNum = $("#tela-nums").html().slice(0, -1);

    $("#tela-nums").empty();

    $("#tela-nums").append(newNum);
  });
});

//cria botão com a regra diferente para operadores, bkspc e igual
function criaBotão(n) {
  if (typeof n === "string" && n != ".") {
    if (n == "bkspc") {
      return `<div class="div${n}"><button class="btn-${n}"><img src="ico.svg"></button></div>`;
    }

    if (n == "=") {
      return `<div class="div${n}"><button class="btn-eq">${n}</button></div>`;
    }

    if (n == "Ac") {
      return `<div class="div${n}"><button class="btn-ac">${n}</button></div>`;
    }
    return `<div class="div${n}"><button class="btn-op">${n}</button></div>`;
  }

  return `<div class="div${n}"><button class="btn-num">${n}</button></div>`;
}

//define quais botões serão exibidos
const botoes = [
  "e",
  "µ",
  "sin",
  "deg",
  "Ac",
  "bkspc",
  "/",
  "*",
  7,
  8,
  9,
  "-",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "=",
  0,
  ".",
];

//para cada botão na lista, inserir o resultado de criaBotão() do botão
for (botao in botoes) {
  $("#botoes-container").append(criaBotão(botoes[botao]));
}
