var wordBank = [
{
	name: "Balloon Fight",
	art: "<img src='assets/images/balloon-fight.jpg'>"
},
{
	name: "Bubble Bobble",
	art: "<img src='assets/images/bubble-bobble.jpg'>"
},
{
	name: "Castlevania",
	art: "<img src='assets/images/castlevania.jpg'>"
},
{
	name: "Castlevania II\: Simon\'s Quest",
	art: "<img src='assets/images/Castlevania-Simons-Quest.jpg'>"
},
{
	name: "Donkey Kong",
	art: "<img src='assets/images/donkey-kong.jpg'>"
},
{
	name: "Donkey Kong Jr",
	art: "<img src='assets/images/donkey-kong-jr.jpg'>"
},
{
	name: "Double Dragon II\: The Revenge",
	art: ""
},
{
	name: "Dr\. Mario",
	art: ""
},
{
	name: "Excitebike",
	art: "<img src='assets/images/excitebike.jpg'>"
},
{
	name: "Final Fantasy",
	art: ""
},
{
	name: "Galaga",
	art: ""
},
{
	name: "Ghosts\'n Goblins",
	art: ""
},
{
	name: "Gradius",
	art: ""
},
{
	name: "Ice Climber",
	art: "<img src='assets/images/ice-climber.jpg'>"
},
{
	name: "Kid Icarus",
	art: "<img src='assets/images/kid-icarus.jpg'>"
},
{
	name: "Kirby\'s Adventure",
	art: ""
},
{
	name: "Mario Bros",
	art: "<img src='assets/images/mario-bros.jpg'>"
},
{
	name: "Mega Man 2",
	art: ""
},
{
	name: "Metroid",
	art: "<img src='assets/images/metroid.jpg'>"
},
{
	name: "Ninja Gaiden",
	art: ""
},
{
	name: "Pac\-Man",
	art: ""
},
{
	name: "Punch-Out\! Featuring Mr\. Dream",
	art: ""
},
{
	name: "StarTropics",
	art: ""
},
{
	name: "Super C",
	art: ""
},
{
	name: "Super Mario Bros",
	art: "<img src='assets/images/super-mario-bros.jpg'>"
},
{
	name: "Super Mario Bros 2",
	art: ""
},
{
	name: "Super Mario Bros 3",
	art: ""
},
{
	name: "Tecmo Bowl",
	art: ""
},
{
	name: "The Legend of Zelda",
	art: ""
},
{
	name: "Zelda II\: The Adventure of Link",
	art: ""
}
];

var gameWord = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var blanks = [];
var correctGuesses = [];
var incorrectGuesses = [];
var boxArtImage = document.getElementById("boxArt").innerHTML = "<img src='assets/images/nes-classic-edition.png' alt='NES MINI'>";
var alphabetBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "2", "3"]

var displayIncorrectGuesses = document.getElementById('wrongGuesses')
var displayCorrectGuesses = document.getElementById('blankWord')
var displayWins = document.getElementById('wins')
var displayLosses = document.getElementById('losses')
var displayChances = document.getElementById('chancesLeft')


var hangman = {
	newGame: function() {
		displayWins.innerHTML = wins;
		displayLosses.innerHTML = losses;
		chancesLeft.innerHTML = guessesLeft;

	},

	wrongGuess: function() {
		guessesLeft = guessesLeft - 1;
		chancesLeft.innerHTML = guessesLeft;
		// incorrectGuesses.push(key);
		for (var i = 0; i < incorrectGuesses.length; i++) {
			displayCorrectGuesses.innerHTML = incorrectGuesses;
		};
		document.getElementById("hungMario").innerHTML = "<img src='assets/images/"+guessesLeft+"-chances-left.png' alt='Hangman Progress'>";
	},

	correctGuess: function() {
		correctGuess.push(key);
	}



};

var toPlay = confirm("Would you like to play?");
if (toPlay) {
	hangman.newGame();
}