"use strict";

const chess = {
    gameTable: document.getElementById('game_table'),
    gameTableElement: document.getElementById('game'),
            init() {
                this.renderMap();
                this.isCellIsLetters();
                this.isCellIsNumders();
            },

            renderMap() {
                for (let row = 0; row < 8; row++) {
                    const tr = document.createElement('tr');
                    this.gameTableElement.appendChild(tr);

                    for (let col = 0; col < 8; col++) {
                        const td = document.createElement('td');
                        
                        tr.appendChild(td);
                        td.dataset.row = row.toString();
                        td.dataset.col = col.toString();
                        if ((row % 2 === 1 && col % 2 === 0) || (row % 2 === 0 && col % 2 === 1)){
                        td.style.backgroundColor = 'black'; 
                        }
                    }
                }
            },

            isCellIsLetters() {
                const letters= [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
                const trLetters = document.createElement('tr');
                this.gameTableElement.appendChild(trLetters);
                for (let colLetters = 0; colLetters < letters.length; colLetters++) {
                    const tdLetters = document.createElement('td');
                    trLetters.appendChild(tdLetters);
                    tdLetters.innerHTML = letters[colLetters];
                    tdLetters.style.backgroundColor = 'grey';
                }
            },

            isCellIsNumders() {
                const numbers= [8, 7, 6, 5, 4, 3, 2, 1];
                const tdNumbers = document.createElement('td');
                this.gameTable.prepend(tdNumbers);
                for (let rowNumbers = 0; rowNumbers < numbers.length; rowNumbers++) {
                    const trNumbers = document.createElement('tr');
                    tdNumbers.appendChild(trNumbers);
                    trNumbers.innerHTML = numbers[rowNumbers];
                    trNumbers.className = 'trNumbers';
                }
            },
    }

    chess.init();