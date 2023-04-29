
// visualizzare in pagina 5 numeri casuali

let arrayNumeri = [];

function numeriRandom(max, min) {

    for (let i = 0; i < 5; i++) {

        let risultato = Math.floor(Math.random() * (max - min + 1) + min);

        arrayNumeri.push(risultato);
    }
}

numeriRandom(100, 1);
console.log(arrayNumeri);

let listaArray = document.querySelector(".array");
listaArray.innerText = arrayNumeri;
listaArray.style.textAlign = "center";
listaArray.style.fontSize = "24px";

// timer 10 secondi poi scompaiono
// prompt, uno alla volta, numeri visualizzati dopo 10 secondi

let numeriUtente = [];
setTimeout (function () {

    listaArray.style.display = "none";

    numeriUtente = [
    parseInt(prompt("primo numero")),
    parseInt(prompt("secondo numero")),
    parseInt(prompt("terzo numero")),
    parseInt(prompt("quarto numero")),
    parseInt(prompt("quinto numero")),
    ];

    console.log(numeriUtente);
    
}, 10 * 1000);

//validazione numeri corretti o sbagliati
