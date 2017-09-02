var wordFinder = [
["W", "O", "O", "D", "H", "O", "U", "S", "E"],
  ["J","A","V","A","J","2","E","E"],
  ["H","E","R","O","K","U"],
  ["W","E","B","S","E","R","V","I","C","E","S"],
  ["C","O","M","P","U","T","E","R","S"],
  ["G","I","T","H","U","B"],
  ["S","U","B","L","I","M","E","T","E","X","T"]
]
var rand = Math.floor((Math.random()*(wordFinder.length-1))); 

var bigWord = wordFinder[rand]; 
var ratewort = new Array(bigWord.length);
var variable = 0;

for (var i = 0; i < ratewort.length; i++){
	ratewort[i] = "_ ";
}

var refreshButton = function(){
	var f = document.hangmanGame; 
	var b = f.elements["textBox"]; 
	var temp = b.value; 
	temp = temp.toUpperCase();


	for (var i = 0; i < bigWord.length; i++){
		if(bigWord[i] === temp){
			ratewort[i] = temp + " ";
			var trueFalse = true;
		}


	b.value = "";
	}
	var ratefeld = document.getElementById("ratefeld");
	ratefeld.innerHTML=""; 
	printRatewort();
	
	if(!trueFalse){
		var generateLetters = document.getElementById("generateLetters");
		var temp2 = document.createTextNode(" " + temp);
		generateLetters.appendChild(temp2); 
		variable++;
		var hangman = document.getElementById("hangman");
		window.alert("You have lost A life !!!")
	}

	var winag = true;
	for (var y = 0; y < ratewort.length; y++){
		if(ratewort[y] === "_ "){
			winag = false;
		}
	}
	if(winag){
		window.alert("You HAVE won this Game!");
	}
	
	if(variable === 5){
		window.alert("Game is over !!! Game is over !!! Game is Over!!!");
	}
}

function printRatewort(){

	for (var x = 0; x < ratewort.length; x++){
	var ratefeld = document.getElementById("ratefeld");
	var temp2 = document.createTextNode(ratewort[x]);
	ratefeld.appendChild(temp2);

	}
}


function init(){
	printRatewort();
}

window.onload = init;