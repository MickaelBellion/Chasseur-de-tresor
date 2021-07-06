const app = {

    player1: {
        player1x: 0,
        player1y: 10
    },

    player2: {
        player2x: 19,
        player2y: 10
    },

    treasure: {
        x:0,
        y:0
    },

    scorePlayer1: 0,

    scorePlayer2: 0,

    init: function () {
        console.log('init');

        document.addEventListener('keydown', app.movePlayers);

        const divChoise = document.querySelector('.choisePokemon');
        divChoise.addEventListener('click', app.choiseModale)
    
        app.positionTreasure(0, 20);
        app.drawBoard();

        

    },

    drawBoard: function () {
        const play = document.querySelector(".play");

        for( let indexRow = 0 ; indexRow < 20; indexRow ++) {
            const cellRow = document.createElement('div');
            cellRow.classList.add('cellRow');
            play.append(cellRow);
      
            for (let indexCell = 0; indexCell < 20; indexCell++) {
              const cell = document.createElement('div');
              cell.classList.add('cell');
              cellRow.append(cell);

              if(indexRow === app.player1.player1y && indexCell === app.player1.player1x){
                    cell.classList.add('player1');
              } else if (indexRow === app.player2.player2y && indexCell === app.player2.player2x) {
                    cell.classList.add('player2');
              } else if (indexRow === app.treasure.y && indexCell === app.treasure.x) {
                    cell.classList.add('treasure');
              }

              if((app.player1.player1y === app.treasure.y && app.player1.player1x === app.treasure.x) || (app.player2.player2y === app.treasure.y && app.player2.player2x === app.treasure.x)) {
                
                if(app.player1.player1y === app.treasure.y && app.player1.player1x === app.treasure.x) {
                    app.scorePlayer1 ++
                    console.log(app.scorePlayer1)
                    app.positionTreasure(0, 20);
                } else if (app.player2.player2y === app.treasure.y && app.player2.player2x === app.treasure.x) {
                    app.scorePlayer2 ++
                    console.log(app.scorePlayer2)
                    app.positionTreasure(0, 20);
                }
              }
            }
        }

        const player1Score = document.querySelector('.scorePlayer1');
        player1Score.textContent = `Score player 1: ${app.scorePlayer1}`;

        const player2Score = document.querySelector('.scorePlayer2');
        player2Score.textContent = `Score player 2: ${app.scorePlayer2}`

    },

    reDrawBoard: function () {
        document.querySelector(".play").textContent = '';
        app.drawBoard();
    },

    movePlayers: function(event) {
        switch (event.key) {
            case 'ArrowRight':
                app.movePlayer1(event);
                break;
            case 'ArrowLeft':
                app.movePlayer1(event);
                break;
            case 'ArrowUp':
                app.movePlayer1(event);
                break;
            case 'ArrowDown':
                app.movePlayer1(event);
                break;
            case '6':
                app.movePlayer2(event);
                break;
            case '4':
                app.movePlayer2(event);
                break;
            case '8':
                app.movePlayer2(event);
                break;
            case '5':
                app.movePlayer2(event);
                break;
        }
    },



    movePlayer1: function (event) {
        console.log(event.key)

        if (event.key === 'ArrowRight') {
            if(app.player1.player1x < 19){
                app.player1.player1x ++;
            }else {
                app.player1.player1x = 0;
            }
            app.reDrawBoard();
        } else if (event.key === 'ArrowLeft') {
            if(app.player1.player1x > 0){
                app.player1.player1x --;
            }else {
                app.player1.player1x = 19;
            }
            app.reDrawBoard();
        } else if (event.key === 'ArrowUp') {
            if(app.player1.player1y > 0){
                app.player1.player1y --;
            }else {
                app.player1.player1y = 19;
            }
            app.reDrawBoard();
        } else if (event.key === 'ArrowDown') {
            if(app.player1.player1y < 19){
                app.player1.player1y ++;
            }else {
                app.player1.player1y = 0;
            }
            app.reDrawBoard();
        }
    },

    movePlayer2: function (event) {
        console.log(event.key)

        if (event.key === '6') {
            if(app.player2.player2x < 19){
                app.player2.player2x ++;
            }else {
                app.player2.player2x = 0;
            }
            app.reDrawBoard();
        } else if (event.key === '4') {
            if(app.player2.player2x > 0){
                app.player2.player2x --;
            }else {
                app.player2.player2x = 19;
            }
            app.reDrawBoard();
        } else if (event.key === '8') {
            if(app.player2.player2y > 0){
                app.player2.player2y --;
            }else {
                app.player2.player2y = 19;
            }
            app.reDrawBoard();
        } else if (event.key === '5') {
            if(app.player2.player2y < 19){
                app.player2.player2y ++;
            }else {
                app.player2.player2y = 0;
            }
            app.reDrawBoard();
        }
    },

    positionTreasure: function (min, max) {
        const Xtreasure = Math.floor((Math.random() * (max - min)) + min);
        console.log(Xtreasure)
        const Ytreasure = Math.floor((Math.random() * (max - min)) + min);
        console.log(Ytreasure)
        app.treasure.x = Xtreasure;
        app.treasure.y = Ytreasure;
        
    }

 }

document.addEventListener('DOMContentLoaded', app.init);