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
    art: ""
}, {
    name: "Dr\. Mario",
    art: ""
}, {
    name: "Excitebike",
    art: "<img src='assets/images/excitebike.jpg'>"
}, {
    name: "Final Fantasy",
    art: ""
}, {
    name: "Galaga",
    art: ""
}, {
    name: "Ghosts\'n Goblins",
    art: ""
}, {
    name: "Gradius",
    art: ""
}, {
    name: "Ice Climber",
    art: "<img src='assets/images/ice-climber.jpg'>"
}, {
    name: "Kid Icarus",
    art: "<img src='assets/images/kid-icarus.jpg'>"
}, {
    name: "Kirby\'s Adventure",
    art: ""
}, {
    name: "Mario Bros",
    art: "<img src='assets/images/mario-bros.jpg'>"
}, {
    name: "Mega Man 2",
    art: ""
}, {
    name: "Metroid",
    art: "<img src='assets/images/metroid.jpg'>"
}, {
    name: "Ninja Gaiden",
    art: ""
}, {
    name: "Pac\-Man",
    art: ""
}, {
    name: "Punch\-Out\! featuring Mr\. Dream",
    art: ""
}, {
    name: "Startropics",
    art: ""
}, {
    name: "Super C",
    art: ""
}, {
    name: "Super Mario Bros",
    art: "<img src='assets/images/super-mario-bros.jpg'>"
}, {
    name: "Super Mario Bros 2",
    art: ""
}, {
    name: "Super Mario Bros 3",
    art: ""
}, {
    name: "Tecmo Bowl",
    art: ""
}, {
    name: "The Legend of Zelda",
    art: ""
}, {
    name: "Zelda II\: the Adventure of Link",
    art: ""
}];

var gameWord = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var blanks = [];
var correctGuesses = [];
var incorrectGuesses = [];
var correctIndex = [];
var boxArtImage = document.getElementById("boxArt");
var alphabetBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "2", "3"]

var displayIncorrectGuesses = document.getElementById('wrongGuesses');
var displayCorrectGuesses = document.getElementById('blankWord');
var displayWins = document.getElementById('wins');
var displayLosses = document.getElementById('losses');
var displayChances = document.getElementById('chancesLeft');
var displayBoxArt = document.getElementById('boxArt');


function newGame() {
    displayWins.innerHTML = wins;
    displayLosses.innerHTML = losses;
    chancesLeft.innerHTML = guessesLeft;
    gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(gameWord);

    for (var i = 0; i < gameWord.name.length; i++) {
        if (gameWord.name[i] === " ") {
            blanks.push("\u00A0");
        } else if (gameWord.name[i] === "\'") {
            blanks.push("\'");
        } else if (gameWord.name[i] === "\:") {
            blanks.push("\:");
        } else if (gameWord.name[i] === "\.") {
            blanks.push("\.");
        } else if (gameWord.name[i] === "\-") {
            blanks.push("\-");
        } else if (gameWord.name[i] === "\!") {
            blanks.push("\!");
        } else {
            blanks.push("_");
        }
    }


    displayCorrectGuesses.textContent = blanks.join(" ");

    document.getElementById("hungMario").innerHTML = "<img src='assets/images/" + guessesLeft + "-chances-left.png' alt='Hangman Progress'>";
}


function guessCheck(UserGuess) {
    //This checks to see if the User Guess input was found in the array or not
    if (gameWord.name.toLowerCase().indexOf(UserGuess) >= 0 && correctGuesses.indexOf(UserGuess) < 0) {
        
        correctIndex = [];
        for (var i = 0; i < gameWord.name.length; i++) {
            if (gameWord.name[i].toLowerCase() === UserGuess) {
                correctIndex.push(i);
            }
        }

        // replace the appropriate blank(s) with the letter
        for (var i = 0; i < correctIndex.length; i++) {
            blanks[correctIndex[i]] = UserGuess;
        }

        // update the display on the web page
        displayCorrectGuesses.textContent = blanks.join(" ");


    } else if (gameWord.name.toLowerCase().indexOf(UserGuess) < 0 && alphabetBank.indexOf(UserGuess) >= 0 && incorrectGuesses.indexOf(UserGuess) < 0) {
        guessesLeft = guessesLeft - 1;
        chancesLeft.innerHTML = guessesLeft;
        document.getElementById("hungMario").innerHTML = "<img src='assets/images/" + guessesLeft + "-chances-left.png' alt='Hangman Progress'>";
        if (guessesLeft > 0) {
            incorrectGuesses.push(UserGuess);
            displayIncorrectGuesses.innerHTML = incorrectGuesses.join(", ");

        }
    }
}

function gameProgress() {
	
	if (blanks.indexOf["_"] < 0 ) {
		alert("You Win");
		wins++;
		boxArt.innerHTML = 
		newGame();
	}
	else if (chancesLeft === 0) {
		losses++;
		alert("You Lost");
		chancesLeft = 6;
		newGame();
	}
}

var toPlay = confirm("Would you like to play?");
if (toPlay) {
    newGame();
}

document.onkeyup = function(event) {
    var UserGuess = event.key;
    guessCheck(UserGuess);
    gameProgress();
}
