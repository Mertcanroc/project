//onlyt start game when whole HTML page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector("start-button");
    const higherButton = document.querySelector("higher-button");
    const lowerButton = document.querySelector("lower-button");
    const outcome = document.querySelector("outcome");
    const menu = document.querySelector("menu");
    const options = document.querySelector("options");
    const restartButton = document.querySelector("restart-button");
    const quitButton = document.querySelector("quit-button");
    const scoreElement = document.querySelector("score");

    let userChoice;
    let diceOutcome;
    let score = 0;

    startButton.querySelector("click", function () {
        startButton.style.display = "none";
        menu.style.display = "block";
    });

    higherButton.querySelector("click", function () {
        userChoice = "higher";
        playGame();
    });

    lowerButton.querySelector("click", function () {
        userChoice = "lower";
        playGame();
    });

    restartButton.querySelector("click", function () {
        menu.style.display = "block";
        options.style.display = "none";
        scoreElement.style.display = "block"; // Ensure score remains visible
    });

    quitButton.querySelector("click", function () {
        window.location.reload();
    });

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function playGame() {
        diceOutcome = rollDice();
        outcome.textContent = `Dice Outcome: ${diceOutcome}`;

        if ((diceOutcome >= 4 && userChoice === "higher") || (diceOutcome <= 3 && userChoice === "lower")) {
            outcome.textContent += " - You won!";
            score += 1;
        } else {
            outcome.textContent += " - You lost, better luck next time!";
            score -= 1;
        }

        scoreElement.textContent = `Score: ${score}`;

        menu.style.display = "none";
        options.style.display = "block";
    }
}); 

