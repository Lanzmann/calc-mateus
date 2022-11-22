document.querySelector('#tela').innerHTML =
    '<div id="tela-nums"></div><div id="tela-op"></div>'

var resultado = $("#tela-op");

var estáOperando = false;
var op = "";

//mostra na tela valor do HTML do botão clicado
jQuery(function () {
    $(".btn-num").on("click", function () {
        $("#tela-nums").append(($(this).html()))
    })
});

//botões de operadores guardam a operação e não permitem outra
jQuery(function () {
    $(".btn-op").on("click", function () {
        if (estáOperando == false) {
            op = $(this).html();
            $("#tela-nums").append(($(this).html()));
            estáOperando = true;
        }
    })
});

//botão igual separa os operandos na tela de nums e mostra o resultado na tela de resultados
jQuery(function () {
    $(".btn-eq").on("click", function () {
        let operandos = $("#tela-nums").html().split(op);
        console.log(operandos);

        function operacao(a, b) {
            if (op == "+") {
                return a + b
            }

            if (op == "-") {
                return a - b
            }

            if (op == "*") {
                return a * b
            }

            if (op == "/") {
                return a / b
            }

        }

        resultado.html(operacao(parseInt(operandos[0]), parseInt(operandos[1])));

    })
});

jQuery(function () {
    $(".btn-ac").on("click", function () {
        $("#tela-nums").empty();
    })
});

//cria botão com a regra diferente para operadores, bkspc e igual
function criaBotão(n) {

    if (typeof n === "string") {
        if (n == "bkspc") {

            return `<div class="div${n}"><button class="${n}"><img src="ico.svg"></button></div>`
        }

        if (n == "=") {

            return `<div class="div${n}"><button class="btn-eq">${n}</button></div>`
        }

        if (n == "Ac") {

            return `<div class="div${n}"><button class="btn-ac">${n}</button></div>`
        }
        return `<div class="div${n}"><button class="btn-op">${n}</button></div>`
    }

    return `<div class="div${n}"><button class="btn-num">${n}</button></div>`
}

//define quais botões serão exibidos
const botoes = ["e", "µ", "sin", "deg", "Ac", "bkspc", "/", "*", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, "=", 0, "."]

//para cada botão na lista, inserir o resultado de criaBotão() do botão
for (botao in botoes) {

    $("#botoes-container").append(criaBotão(botoes[botao]));

}