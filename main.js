function criaBotãoNum(n) {
    return `<button class ="num" onclick="">${n}</button>`
}

function criaBotãoOp(op) {
    return `<button class ="op" onclick="">${op}</button>`
}


document.querySelector('#container').innerHTML =
    criaBotãoNum(1) +
    criaBotãoNum(2) +
    criaBotãoOp("+")