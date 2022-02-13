// X = player1 since X goes first. 
let whoTurn;
const player1 = "EX";
const player2 = "O";

// All possible win options
const toWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
createGrid()

//grab all elements needed and assign to variables
const alertMessage = document.getElementById('messageAlert');
const grids = document.querySelectorAll('.grid')
const playButton = document.getElementById('play');

// Create grid generate gird ID numbers 
function createGrid() {
    for (i = 0; i < 9; i++){
        var div = document.createElement("div");
        div.className = "grid";
        div.id = `grid${i}`
        document.getElementById("main").appendChild(div);
    }
}

playGame()


function playGame() {
    whoTurn = false;

}


