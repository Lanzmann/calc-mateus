function criaBotão(n) {

    return `<div class="div${n}"><button class ="num" onclick="">${n}</button></div>`
    
}



document.querySelector('#tela').innerHTML =
    "T e l a"


document.querySelector('#nums-container').innerHTML =
    criaBotão(1) +
    criaBotão(2) +
    criaBotão(3) +
    criaBotão(4) +
    criaBotão(5) +
    criaBotão(6) +
    criaBotão(7) +
    criaBotão(8) +
    criaBotão(9) +
    criaBotão(0) +
    criaBotão(".")

document.querySelector('#ops-container-vert').innerHTML =
    criaBotão("-") +
    criaBotão("+") +
    criaBotão("=")