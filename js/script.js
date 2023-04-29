
// visualizzare in pagina 5 numeri casuali

let arrayNumeri = [];

function numeriRandom (max, min) {

    for (let i = 0; i < 5; i++) {

        let risultato = Math.floor(Math.random() * (max - min + 1) + min);

        arrayNumeri.push(risultato);
    }
}

numeriRandom( 100, 1);
console.log(arrayNumeri);

let listaArray = document.querySelector(".array");
listaArray.innerText = arrayNumeri;
// timer 30 secondi poi scompaiono

// prompt, uno alla volta, numeri visualizzati

//validazione numeri corretti o sbagliati
