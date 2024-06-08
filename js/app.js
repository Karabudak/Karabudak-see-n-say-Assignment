// Assignment 1 | COMP1073 Client-Side JavaScript
//(200560262)
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.querySelector('#speakBtn');

/* Arrays for random words
-------------------------------------------------- */
const nouns = ["THE Dog", "the cat", "My Teacher", "Mom", "Dad"];
const verbs = ["Ate", "Saw", "Doesn't like", "kissed", "danced With"];
const adjectives = ["A Funny", "A Scary", "A Barking", "A Fat", "A slimy"];
const secondNouns = ["Goat", "Monkey", "Fish", "Cow", "Frog"];
const places = ["On the Moon", "On the chair", "On the grass", "in my soup", "in my shoes"];

/* Functions
-------------------------------------------------- */
function getRandomWord(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Event listeners for each button to add random words to the textToSpeak variable
document.getElementById("nounBtn").addEventListener("click", function() {
	textToSpeak += getRandomWord(nouns) + " ";
});

document.getElementById("verbBtn").addEventListener("click", function() {
	textToSpeak += getRandomWord(verbs) + " ";
});

document.getElementById("adjectiveBtn").addEventListener("click", function() {
	textToSpeak += getRandomWord(adjectives) + " ";
});

document.getElementById("secondNounBtn").addEventListener("click", function() {
	textToSpeak += getRandomWord(secondNouns) + " ";
});

document.getElementById("placeBtn").addEventListener("click", function() {
	textToSpeak += getRandomWord(places) + " ";
});

// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
	textToSpeak = ''; // Reset the text after speaking
}
