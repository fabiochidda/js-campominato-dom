const startGameButton = document.getElementById("startGame");
const difficultySelector = document.getElementById("gameMode");
const gameContainer = document.querySelector(".ms_game_container");



const startGameFunction  = () => {

    console.log(difficultySelector.value)

    let cellRows;
    let cellColumns;

    if (difficultySelector.value == 1) {

        console.log("Hai selezionato la modalità Facile")
        cellRows = 10;
        cellColumns = 10;
        
    } else if (difficultySelector.value == 2) {

        console.log("Hai selezionato la modalità Media")
        cellRows = 9;
        cellColumns = 9;
        
    } else {

        console.log("Hai selezionato la modalità Difficile")
        cellRows = 7;
        cellColumns = 7;
        
    }
    
    const gameCells = cellRows * cellColumns;

    console.log(gameCells)

    for (let i=0; i < gameCells; i++) {

        const gameCellSquare = document.createElement("div")
        gameCellSquare.classList.add("ms_gameCell")
        gameCellSquare.append(i + 1)
        gameContainer.append(gameCellSquare)

        if (gameCells == 100) {

            gameCellSquare.classList.add("ms_easy")

        } else if (gameCells == 81) {

            gameCellSquare.classList.add("ms_medium")

        } else {

            gameCellSquare.classList.add("ms_hard")
            
        }

        function gameCellClick() {

            gameCellSquare.classList.add("ms_selected_cell")
        
        } 
        
        gameCellSquare.addEventListener("click", gameCellClick)

    }

    const bombsGenerated = bombGenerator(16,1,gameCells)

    function bombGenerator(bombNumber, min, max) {

        const bombCounter = [];
    
        while (bombCounter.length < bombNumber) {
    
            const generatedNumber = randomNumber(min,max);
    
            if (bombCounter.includes(generatedNumber) === false ) {
    
                bombCounter.push(generatedNumber)
    
            }
    
        }
    
        return bombCounter

    }

    console.log(bombsGenerated)
    
}

startGameButton.addEventListener("click", startGameFunction)

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

