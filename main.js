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

//     console.log("tela atualizada");

//     console.log("nums na memória:" + numerosNaMemoria);

// }


function criaBotão(n) {

    if (typeof n === 'string') {
        if (n == "bkspc") {
            return `<div class="div${n}"><button><img src="ico.svg"></button></div>`
        }

        return `<div class="div${n}"><button>${n}</button></div>`

    }
    else {
    //     // return `<p>a1234</p>`
    console.log("Oie");
        return `<div class="div${n}"><button>${n}</button></div>`
    }
}

document.querySelector('#tela').innerHTML =
    '<div id="tela-nums"><p></p><div id="tela-nums2"><p></p></div></div><div id="tela-op"><p></p></div>'


// $("#botoes-container").append(
//     criaBotão("e")+ 
//     criaBotão("µ") +
//     criaBotão("sin") +
//     criaBotão("deg") +
//     criaBotão("Ac") +
//     criaBotão("bkspc") +
//     criaBotão("/") +
//     criaBotão("*") +
//     criaBotão(7) +
//     criaBotão(8) +
//     criaBotão(9) +
//     criaBotão("-") +
//     criaBotão(4) +
//     criaBotão(5) +
//     criaBotão(6) +
//     criaBotão("+") +
//     criaBotão(1) +
//     criaBotão(2) +
//     criaBotão(3) +
//     criaBotão("=") +
//     criaBotão(0) +
//     criaBotão(".")
//     );

// function criaBotões (){

//     for (e in botoes)
//     {
//         return criaBotão(e)
//     }

// }
const botoes = [1, 2, 3, 4, 5, 6, "var"]

for (botao in botoes){

    $("#botoes-container").append(criaBotão(botoes[botao]));

}




// $("#botoes-container").append(botoes.forEach(e => {
//     criaBotão(e);}));

// botoes.forEach(e => criaBotão (1));

// $("#botoes-container").

// for (let index = 0; index < botoes.length; index++) {
    
//     criaBotão(botoes[index]);
    
// }