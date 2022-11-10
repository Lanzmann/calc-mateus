function adicionaNaTela(n) {

    document.querySelector('#tela-nums').innerHTML = n;

}


function criaBotão(n) {
    
    if (n == "<-")
    {
        return `<div class="div<-"><button onclick="adicionaNaTela()"><img src="ico.svg">
        </button></div>`
    
    }
    else{
        return `<div class="div${n}"><button onclick="adicionaNaTela(${n})">${n}</button></div>`
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
    criaBotão("<-") +
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

