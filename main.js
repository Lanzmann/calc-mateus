function criaBotãoNum(a) {
    return `<button class ="num" onclick="">${a}</button>` 
}


function criaBotãoOp(op) {
    return `<button class ="op" onclick="">${op}</button>`
}


document.querySelector('#container').innerHTML =
    criaBotãoNum(1) +
    criaBotãoNum(2) +
    criaBotãoNum(3) +
    criaBotãoNum(4) +
    criaBotãoNum(5) +
    criaBotãoNum(6) +
    criaBotãoNum(7) +
    criaBotãoNum(8) +
    criaBotãoNum(9) +
    criaBotãoNum(0) +
    criaBotãoOp ("+")