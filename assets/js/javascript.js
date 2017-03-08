var wordBank = [{
    name: "Balloon Fight",
    art: "<img src='assets/images/balloon-fight.jpg'>"
}, {
    name: "Bubble Bobble",
    art: "<img src='assets/images/bubble-bobble.jpg'>"
}, {
    name: "Castlevania",
    art: "<img src='assets/images/castlevania.jpg'>"
}, {
    name: "Castlevania II\: Simon\'s Quest",
    art: "<img src='assets/images/Castlevania-Simons-Quest.jpg'>"
}, {
    name: "Donkey Kong",
    art: "<img src='assets/images/donkey-kong.jpg'>"
}, {
    name: "Donkey Kong Jr",
    art: "<img src='assets/images/donkey-kong-jr.jpg'>"
}, {
    name: "Double Dragon II\: The Revenge",
    art: "<img src='assets/images/double-dragon.jpg'>"
}, {
    name: "Dr Mario",
    art: "<img src='assets/images/Dr-Mario.jpg'>"
}, {
    name: "Excitebike",
    art: "<img src='assets/images/excitebike.jpg'>"
}, {
    name: "Final Fantasy",
    art: "<img src='assets/images/final-fantasy.jpg'>"
}, {
    name: "Galaga",
    art: "<img src='assets/images/galaga.jpg'>"
}, {
    name: "Ghosts\'n Goblins",
    art: "<img src='assets/images/ghosts-n-goblins.jpg'>"
}, {
    name: "Gradius",
    art: "<img src='assets/images/gradius.jpg'>"
}, {
    name: "Ice Climber",
    art: "<img src='assets/images/ice-climber.jpg'>"
}, {
    name: "Kid Icarus",
    art: "<img src='assets/images/kid-icarus.jpg'>"
}, {
    name: "Kirby\'s Adventure",
    art: "<img src='assets/images/kirby.jpg'>"
}, {
    name: "Mario Bros",
    art: "<img src='assets/images/mario-bros.jpg'>"
}, {
    name: "Mega Man 2",
    art: "<img src='assets/images/mega-man-2.jpg'>"
}, {
    name: "Metroid",
    art: "<img src='assets/images/metroid.jpg'>"
}, {
    name: "Ninja Gaiden",
    art: "<img src='assets/images/ninja-gaiden.png'>"
}, {
    name: "Pac\-Man",
    art: "<img src='assets/images/pac-man.jpg'>"
}, {
    name: "Punch\-Out\! featuring Mr Dream",
    art: "<img src='assets/images/punch-out.png'>"
}, {
    name: "Startropics",
    art: "<img src='assets/images/startropics.jpg'>"
}, {
    name: "Super C",
    art: "<img src='assets/images/super-c.png'>"
}, {
    name: "Super Mario Bros",
    art: "<img src='assets/images/super-mario-bros.jpg'>"
}, {
    name: "Super Mario Bros 2",
    art: "<img src='assets/images/mario2.jpg'>"
}, {
    name: "Super Mario Bros 3",
    art: "<img src='assets/images/mario3.jpg'>"
}, {
    name: "Tecmo Bowl",
    art: "<img src='assets/images/tecmo-bowl.jpg'>"
}, {
    name: "The Legend of Zelda",
    art: "<img src='assets/images/zelda.jpg'>"
}, {
    name: "Zelda II\: the Adventure of Link",
    art: "<img src='assets/images/zelda2.jpg'>"
}];

var gameWord = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var blanks = [];
var correctGuesses = [];
var incorrectGuesses = [];
var correctIndex = [];
var splicedWord = [];
var boxArtImage = document.getElementById("boxArt");
var alphabetBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "2", "3"]
var gameStart = false;
var gameOver = false;
var gameIndex = 0;


var loseSound = new Audio('assets/sounds/smb_mariodie.mp3');
var winSound = new Audio('assets/sounds/smb_stage_clear.mp3');
var powerOffSound = new Audio('assets/sounds/smb_gameover.mp3');
var powerOnSound = new Audio('assets/sounds/smb_powerup.mp3');
var coinSound = new Audio('assets/sounds/smb_coin.mp3');
var blockSound = new Audio('assets/sounds/smb_breakblock.mp3');
var gameOverSound = new Audio('assets/sounds/smb_world_clear.mp3');
var almostDead = new Audio('assets/sounds/smb_warning.mp3');



var displayIncorrectGuesses = document.getElementById('wrongGuesses');
var displayPowerLight = document.getElementById('powerLight');
var displayCorrectGuesses = document.getElementById('blankWord');
var displayWins = document.getElementById('wins');
var displayLosses = document.getElementById('losses');
var displayChances = document.getElementById('chancesLeft');
var displayBoxArt = document.getElementById('boxArt');
var displayHungMario = document.getElementById('hungMario');
var displayWinOrLose = document.getElementById('winOrLose');
var displayPlayagain = document.getElementById('playAgain');


function powerOff() {
    displayPowerLight.innerHTML = "<img src='assets/images/power-off.png' alt='power n'>";
    displayCorrectGuesses.innerHTML = "";
    displayIncorrectGuesses.innerHTML = "";
    displayWins.innerHTML = "";
    displayLosses.innerHTML = "";
    displayBoxArt.innerHTML = "<img src='assets/images/nes-classic-edition.png' alt='NES Classic'>";
    displayChances.innerHTML = "";
    displayHungMario.innerHTML = "";
    displayPlayagain.innerHTML = "";
    displayWinOrLose.innerHTML = "";
    gameStart = false;
    gameWord = 0;
    blanks = [];
    correctGuesses = [];
    incorrectGuesses = [];
    correctIndex = [];
    wins = 0;
    losses = 0;
    guessesLeft = 6;
    powerOffSound.play();

}

var hangman = {
    newGame: function() {

        gameOver = false;

        gameStart = true;

        if (wordBank.length >= 1) { 

        powerOnSound.play();

        gameIndex = Math.floor(Math.random() * wordBank.length);

        gameWord = 0;
        guessesLeft = 6;
        gameOver = false;
        blanks = [];
        correctGuesses = [];
        incorrectGuesses = [];
        correctIndex = [];
        displayWins.innerHTML = wins;
        displayLosses.innerHTML = losses;
        displayChances.innerHTML = guessesLeft;
        gameWord = wordBank[gameIndex];

        displayPowerLight.innerHTML = "<img src='assets/images/power-on.png' alt='power n'>";
        displayWinOrLose.innerHTML = "";
        displayPlayagain.innerHTML = "";
        displayIncorrectGuesses.innerHTML = "";
        gameStart = true;


        for (var i = 0; i < gameWord.name.length; i++) {
            if (gameWord.name[i] === " ") {
                blanks.push("\u00A0");
            } else if (gameWord.name[i] === "\'") {
                blanks.push("\'");
            } else if (gameWord.name[i] === "\:") {
                blanks.push("\:");
            } else if (gameWord.name[i] === "\-") {
                blanks.push("\-");
            } else if (gameWord.name[i] === "\!") {
                blanks.push("\!");
            } else {
                blanks.push("_");
            }
        }


        displayCorrectGuesses.textContent = blanks.join(" ");

        displayHungMario.innerHTML = "<img src='assets/images/" + guessesLeft + "-chances-left.png' alt='Hangman Progress'>";

} else {
	displayWinOrLose.innerHTML = "GAME OVER";
	displayHungMario.innerHTML = "";
	displayCorrectGuesses.innerHTML = "";
	displayPlayagain.innerHTML = "";
    gameOverSound.play();
    for (var i = 0; i < splicedWord.length; i++) {

        wordBank.push(splicedWord[i]);
        splicedWord.splice(i, 1);

        if (wins === 30) {
            displayHungMario.innerHTML = "<p>Holy cow!</p>" + 
            "<p>You got all 30 games correct! You either know your NES CLassic, or you're incredible lucky. I suppose you could also be skilled at hangman, but lets be real here.</p>" +
            "<p>Congratulations!</p>";
        } else if (wins >= 25) {
            displayHungMario.innerHTML = "<p>You got " + wins + " correct. That's pretty good!</p>" +
            "<p>I know you must be disappointed that you didn't get all 30. It's ok. You'll get them next time. You had a decent showing!</p>";
        } else if (wins >= 18) {
            displayHungMario.innerHTML = "<p>" + wins + " correct isn't horrible.</p>" +
                "<p>I've definitely seen worse. You obviously show some recollection of NES games, and I refuse to give up hope on you just yet</p>";
        } else if (wins >= 10) {
            displayHungMario.innerHTML = "<p>Come on! You only got " + wins + " right!?</p>" +
                "<p>You're barely even trying. I feel like you could have done just as good if you didn't know anything and were just pressing random buttons like a madman. Are you some sort of madman?</p>";
        } else if (wins >= 5) {
            displayHungMario.innerHTML = "<p>" + wins + " wins? Really?</p>" +
            "<p>I understand if you're not a fan of Nintendo. Not all of us are. Sure, maybe all the cool kids are, but not everyone can be a cool kid.</p>";
        } else if (wins >= 0 ) {
            displayHungMario.innerHTML = "<p>" + wins + "? " + wins + " is your score?</p>" +
                "<p>You had to try to do this bad. Way to go. No one is impressed. Just go home. You're probably no fun at parties either.</p>";
        }


    }

}


},

        guessCheck: function(UserGuess) {
            UserGuess = UserGuess.toLowerCase();
            //This checks to see if the User Guess input was found in the array or not
            if (gameWord.name.toLowerCase().indexOf(UserGuess) >= 0 && correctGuesses.indexOf(UserGuess) < 0 && gameOver === false) {

                correctIndex = [];
                for (var i = 0; i < gameWord.name.length; i++) {
                    if (gameWord.name[i].toLowerCase() === UserGuess) {
                        correctIndex.push(i);
                    }
                }

                for (var i = 0; i < correctIndex.length; i++) {
                    blanks[correctIndex[i]] = UserGuess;
                }

                displayCorrectGuesses.textContent = blanks.join(" ");
                coinSound.play();


            } else if (gameWord.name.indexOf(UserGuess) < 0 && alphabetBank.indexOf(UserGuess) >= 0 && incorrectGuesses.indexOf(UserGuess.toUpperCase()) < 0 && gameOver === false) {
                guessesLeft = guessesLeft - 1;
                chancesLeft.innerHTML = guessesLeft;
                document.getElementById("hungMario").innerHTML = "<img src='assets/images/" + guessesLeft + "-chances-left.png' alt='Hangman Progress'>";
                incorrectGuesses.push(UserGuess.toUpperCase());
                displayIncorrectGuesses.innerHTML = incorrectGuesses.join(" ");
                blockSound.play();
                if (guessesLeft === 1) {
                	almostDead.play();
                }
            }



        },

        gameProgress: function() {


            if (blanks.indexOf("_") < 0 && guessesLeft > 0) {
                wins++;
                displayWins.innerHTML = wins;
                displayWinOrLose.innerHTML = "You Won!";
                displayPlayagain.innerHTML = "<p>Play Again</p>";
                winSound.play();
                displayBoxArt.innerHTML = gameWord.art;
                correctGuesses = [];

                //I made this 0 right here so you wouldn't keep getting wins for typing random letters after you won
                guessesLeft = 0;
                gameOver = true;
                splicedWord.push(gameWord);
                wordBank.splice(gameIndex, 1);
                document.getElementById("howToWrapper").innerHTML = "";




            } else if (guessesLeft <= 0 && blanks.indexOf("_") >= 0) {
                losses++;
                displayLosses.innerHTML = losses;
                loseSound.play();
                displayWinOrLose.innerHTML = "You Lose!";
                displayHungMario.innerHTML = "<img src='assets/images/0-chances-left.png' alt='Hangman Progress'>";
                displayPlayagain.innerHTML = "<p>Play Again</p>";
                displayBoxArt.innerHTML = "<img src='assets/images/nes-classic-edition.png' alt='NES Classic'>";
                guessesLeft = 6;
                gameOver = true;
                splicedWord.push(gameWord);
                wordBank.splice(gameIndex, 1);
                document.getElementById("howToWrapper").innerHTML = "";



            }
        }
    }

displayPlayagain.onclick = function() {
    if (gameOver === true) {
        hangman.newGame();
    }
};

document.getElementById("startBtn").onclick = function() {
    if (gameStart === false) {
        hangman.newGame();
    } else if (gameStart === true) {
        powerOff();
    }

};

document.getElementById("resetBtn").onclick = function() {
    if (gameStart === true) {
        powerOff();
        hangman.newGame();
    }
};


document.onkeyup = function(event) {
    var UserGuess = event.key;
    hangman.guessCheck(UserGuess);
    hangman.gameProgress();
}
