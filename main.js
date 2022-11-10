var numerosNaTela = new Array();
var botoesClicados = new Array();


function constroiNum(n) {

    numero = n.join('');

    numerosNaTela = [];
    numerosNaTela[0] = numero;

    return numero;

}



function clicaBotão(n) {

    if (n == "Ac")
    {
        numerosNaTela.length = 0;

        atualizaTelaNums();
    }
    else if (n == "bkspc")
    {
        console.log("oi");
        botoesClicados.pop();

        atualizaTelaNums();
    }
    else
    {

        console.log("botão clicado: " + n)

        botoesClicados.push(n); 
        
        num = constroiNum(botoesClicados);

        numerosNaTela.push(num);
        
        atualizaTelaNums();
    }
  
}

function atualizaTelaNums(){

    document.querySelector('#tela-nums').innerHTML = numerosNaTela[0];

    console.log("tela atualizada");

    console.log("nums na tela:" + numerosNaTela);

}

function criaBotão(n) {
    
    if (typeof n === 'string')
    {
        if (n == "bkspc")
        {
            return `<div class="div${n}"><button onclick="clicaBotão('${n}')"><img src="ico.svg"></button></div>`
        }
        
        return `<div class="div${n}"><button onclick="clicaBotão('${n}')">${n}</button></div>`
    
    }
    else
    {
        return `<div class="div${n}"><button onclick="clicaBotão(${n})">${n}</button></div>`
    }
    
}

document.querySelector('#tela').innerHTML =
    '<div id="tela-nums">AB</div><div id="tela-op">CD</div>'

document.querySelector('#botoes-container').innerHTML =
    criaBotão("e") +
    criaBotão("µ") +
    criaBotão("sin") +
    criaBotão("deg") +
    criaBotão("Ac") +
    criaBotão("bkspc") +
    criaBotão("/") +
    criaBotão("*") +
    criaBotão(7) +
    criaBotão(8) +
    criaBotão(9) +
    criaBotão("-") +
    criaBotão(4) +
    criaBotão(5) +
    criaBotão(6) +
    criaBotão("+") +
    criaBotão(1) +
    criaBotão(2) +
    criaBotão(3) +
    criaBotão("=") +
    criaBotão(0) +
    criaBotão(".")

