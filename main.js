function criaBotãoNum(n) {
    return `<div><button class ="num" onclick="">${n}</button></div>` 
}


function criaBotãoOp(op) {
    return `<button class ="op" onclick="">${op}</button>`
}

function criaBotãoCanc(a){
    return `<button class="canc" onclick="">${a}</button>`
}

function criaBotãoIgual(){
    return `<button class="canc" onclick="">=</button>`
}

function criaBotãoFunc(f){
    return `<button class="canc" onclick="">${f}</button>`
}


document.querySelector('#tela').innerHTML =
    "T e l a"


document.querySelector('#nums-container').innerHTML =
    criaBotãoNum(1) +
    criaBotãoNum(2) +
    criaBotãoNum(3) +
    criaBotãoNum(4) +
    criaBotãoNum(5) +
    criaBotãoNum(6) +
    criaBotãoNum(7) +
    criaBotãoNum(8) +
    criaBotãoNum(9)