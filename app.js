const app = {

    player1: {
        player1x: 0,
        player1y: 12
    },

    player2: {
        player2x: 30,
        player2y: 12
    },

    treasure: {
        x:0,
        y:0
    },

    init: function () {
        console.log('init');

        document.addEventListener('keydown', app.movePlayer1)

        app.drawBoard();

    },

    drawBoard: function () {
        const play = document.querySelector(".play")

        const board = document.createElement('div');
        board.classList.add('board');
        play.append(board)

        for( let indexRow = 0 ; indexRow < 25; indexRow ++) {
            const cellRow = document.createElement('div');
            cellRow.classList.add('cellRow');
            board.append(cellRow);
      
            for (let indexCell = 0; indexCell < 31; indexCell++) {
              const cell = document.createElement('div');
              cell.classList.add('cell');
              cellRow.append(cell);

              if(indexRow === app.player1.player1y && indexCell === app.player1.player1x){
                  cell.classList.add('player1')
              } else if (indexRow === app.player2.player2y && indexCell === app.player2.player2x) {
                    cell.classList.add('player2')
              }
            }
        }
    },

    reDrawBoard: function () {
        document.querySelector(".play").textContent = ''
        app.drawBoard()
    },

    movePlayer1: function (event) {
        console.log(event.key)

        if (event.key === 'ArrowRight') {
            if(app.player1.player1x < 30){
                app.player1.player1x ++
            }else {
                app.player1.player1x = 0
            }
            app.reDrawBoard()
        } else if (event.key === 'ArrowLeft') {
            if(app.player1.player1x > 0){
                app.player1.player1x --
            }else {
                app.player1.player1x = 30
            }
            app.reDrawBoard()
        } else if (event.key === 'ArrowUp') {
            if(app.player1.player1y > 0){
                app.player1.player1y --
            }else {
                app.player1.player1y = 24
            }
            app.reDrawBoard()
        } else if (event.key === 'ArrowDown') {
            if(app.player1.player1y < 24){
                app.player1.player1y ++
            }else {
                app.player1.player1y = 0
            }
            app.reDrawBoard()
        }
    },

    movePlayer2: function (event) {
        console.log(event.key)

        if (event.key === '6') {
            if(app.player1.player1x < 30){
                app.player1.player1x ++
            }else {
                app.player1.player1x = 0
            }
            app.reDrawBoard()
        } else if (event.key === '4') {
            if(app.player1.player1x > 0){
                app.player1.player1x --
            }else {
                app.player1.player1x = 30
            }
            app.reDrawBoard()
        } else if (event.key === '8') {
            if(app.player1.player1y > 0){
                app.player1.player1y --
            }else {
                app.player1.player1y = 24
            }
            app.reDrawBoard()
        } else if (event.key === '5') {
            if(app.player1.player1y < 24){
                app.player1.player1y ++
            }else {
                app.player1.player1y = 0
            }
            app.reDrawBoard()
        }
    }

 }

document.addEventListener('DOMContentLoaded', app.init);