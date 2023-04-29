
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

let numeriInseriti = [];
setTimeout(function () {

    listaArray.style.display = "none";

    numeriInseriti = [
        parseInt(prompt("primo numero")),
        parseInt(prompt("secondo numero")),
        parseInt(prompt("terzo numero")),
        parseInt(prompt("quarto numero")),
        parseInt(prompt("quinto numero")),
    ];

    console.log(numeriInseriti);
    let numeriUtente = document.querySelector(".numeriUtente");
    numeriUtente.innerText = numeriInseriti;
    numeriUtente.style.textAlign = "center";
    numeriUtente.style.fontSize = "24px";


    let tuttiUguali = true;
    for (let i = 0; i < arrayNumeri.length; i++) {
        if (arrayNumeri[i] !== numeriInseriti[i]) {
            tuttiUguali = false;
        }
    }

        if (tuttiUguali) {
            console.log("i numeri inseriti sono tutti giusti");
        } else {
            for (let i = 0; i < arrayNumeri.length; i++) {
                if (arrayNumeri[i] !== numeriInseriti[i]) {
                    tuttiUguali = false;
                }
            if (arrayNumeri[i] === numeriInseriti[i]) {
                console.log(`il numero ${arrayNumeri[i]} è corretto`);
            } else {
                console.log(`il numero ${numeriInseriti[i]} è sbagliato, il numero corretto è ${arrayNumeri[i]}`);
            }
        }
        }




}, 10 * 1000);

//validazione numeri corretti o sbagliati

