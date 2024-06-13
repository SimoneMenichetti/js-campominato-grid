// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.


// Variabile di riferimento per richiamare il button play
const playButton = document.querySelector('.playButton');
// Variabile di riferimento per richiamare il container della griglia
const gridContainer = document.getElementById('grid-container');

                // BONUS
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// variabile di riferimento per richiamare la select della difficoltà
const difficultySelect = document.getElementById('difficulty');


// funzione per lo start del gioco al momento dell ascolto evento

// Aggiungi event listener al bottone di gioco per l'interazione utente
playButton.addEventListener('click', 
    function() {

        // Mostra la griglia rimuovendo la classe hidden al play del button
        gridContainer.classList.remove('hidden'); 

        // refresh per  la griglia se  già è stata generata cliccando play 
        gridContainer.innerHTML = '';

        // Chiama la funzione per generare le celle
        generateCells(gridContainer);
    }
);