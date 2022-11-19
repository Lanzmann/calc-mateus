var numerosNaMemoria = new Array();
var operacoes = new Array();
var botoesClicados = new Array();
var numeral = new Array();
var tela = new Array();



// function constroiNum(n) {

//     numeral.push(n);

//     console.log("numeral é: " + numeral)
//     console.log("agora n é: " + n)

//     var numero = numeral.join('');

//     console.log("join de:" + numero);

//     return numero;

// }


function clicaBotão(n) {

    console.log("botão clicado: " + n);

    botoesClicados.push(n);

    console.log("botoes clicados: " + botoesClicados);

    if (typeof n === 'number') {

        num = constroiNum(n);

        console.log("colocando isso na tela: " + num)

        numerosNaMemoria.push(num);

        atualizaTelaNums();
    }
    else if (typeof n === 'string') {
        if (n == "Ac") {
            numerosNaMemoria.length = 0;
            // botoesClicados.length = 0;
            numeral.length = 0;

            atualizaTelaNums();
        }
        else if (n == "bkspc") {

            numerosNaMemoria.pop();
            numeral.pop();

            atualizaTelaNums();
        }
        else if (n == "+" || n == "-" || n == "*" || n == "/") {

            numerosNaMemoria.push(num);

            document.querySelector("#tela-nums2").innerHTML = op1;

            atualizaTelaNums();

        }
    
    }
 
}

function atualizaTelaNums() {

    /*tela = numerosNaMemoria.slice(-1) + */

    document.querySelector('#tela-nums').innerHTML = numerosNaMemoria.slice(-1);

}

document.querySelector('#tela').innerHTML =
    '<div id="tela-nums"></div><div id="tela-op"></div>'

resultado = $("#tela-op");
var operando = false;
var op = "";

//mostra na tela valor do HTML do botão clicado

jQuery(function(){$(".btn-num").on("click", function(){
    $("#tela-nums").append(($(this).html()))})});

jQuery(function(){$(".btn-op").on("click", function(){
    if (operando == false)
    {
        op = $(this).html();
        $("#tela-nums").append(($(this).html()));
        operando = true;
    } 
})});

jQuery(function(){$(".btn-eq").on("click", function(){
        let operandos = $("#tela-nums").html().split(op);
        console.log(operandos);
})});

//cria botão com a regra diferente para operadores
function criaBotão(n) {
      
        if (typeof n === "string")
        {
            if (n == "bkspc") {

                return `<div class="div${n}"><button class="${n}"><img src="ico.svg"></button></div>`
            }

            if (n == "=") {

                return `<div class="div${n}"><button class="btn-eq">${n}</button></div>`
            }

            return `<div class="div${n}"><button class="btn-op">${n}</button></div>`
        }

        return `<div class="div${n}"><button class="btn-num">${n}</button></div>`
}

//define quais botões serão exibidos
const botoes = ["e", "µ", "sin", "deg", "Ac", "bkspc", "/", "*", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, "=", 0, "." ]

//para cada botão na lista, inserir o resultado de criaBotão() do botão
for (botao in botoes){

    $("#botoes-container").append(criaBotão(botoes[botao]));

}