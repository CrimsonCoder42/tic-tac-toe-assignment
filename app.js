// X = player1 since X goes first. 
let whoTurn;
const player1 = "grid EX";
let player1Array = [];
const player2 = "grid O";
let player2Array = [];

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

//grab all elements needed and assign to variables, add event listener to button
const alertMessage = document.getElementById('messageAlert');
const grids = document.querySelectorAll('.grid')
const playButton = document.getElementById('play');
playButton.addEventListener('click', playGame);


// Create grid generate gird ID numbers 
function createGrid() {
    for (i = 0; i < 9; i++){
        var div = document.createElement("div");
        div.className = "grid";
        div.id = `${i}`
        document.getElementById("main").appendChild(div);
    }
}

// adds event listeners, starts game, resets all grids 
playGame()


function playGame() {
    whoTurn = false;
    grids.forEach(grid => {
        grid.classList = "grid"
        grid.innerText = ""
        player1Array = [];
        player2Array = [];
        grid.removeEventListener('click', myClick)
        grid.addEventListener('click', myClick, { once: true })

    })
}
function myClick(event){
    clickId = event.target.id
    console.log(whoTurn)
    if (!whoTurn) {
        event.target.className = player1
        player1Array.push(parseInt(clickId))
        console.log(player1Array)
        whoTurn = true;
    } else {
        event.target.className = player2
        player2Array.push(parseInt(clickId))
        event.target.innerText = "O"
        console.log(player2Array)
        whoTurn = false;
    }
    
}

function play() {
    
}