// Access buttons
var buttons = document.querySelectorAll('div.btn');
var background = document.querySelector('body');

// console.log(buttons);
var buttonOne = buttons[0];
var buttonTwo = buttons[1];
var buttonThree = buttons[2];
var buttonFour = buttons[3];
var buttonFive = buttons[4];
var buttonSix = buttons[5];
var buttonSeven = buttons[6];
var buttonEight = buttons[7];
var buttonNine = buttons[8];

// Access web page background
var background = document.querySelector('body');

// functions to change background colors
function oneBg() {
	background.style.backgroundImage="url(images/fabric1.jpg)";
	requestAnimationFrame(repeatOften);
}

function twoBg() {
	background.style.backgroundImage="url(images/fabric2.jpg)";
	requestAnimationFrame(repeatOften);
}

function threeBg() {
	background.style.backgroundImage="url(images/fabric3.jpg)";
	requestAnimationFrame(repeatOften);
}

function fourBg() {
	background.style.backgroundImage="url(images/fabric4.jpg)";
	requestAnimationFrame(repeatOften);
}

function fiveBg() {
	background.style.backgroundImage="url(images/fabric5.jpg)";
	requestAnimationFrame(repeatOften);
}

function sixBg() {
	background.style.backgroundImage="url(images/fabric6.jpg)";
}

function sevenBg() {
	background.style.backgroundImage="url(images/fabric7.jpg)";
}

function eightBg() {
	background.style.backgroundImage="url(images/fabric8.jpg)";
}

function nineBg() {
	background.style.backgroundImage="url(images/fabric9.jpg)";
}

// Event listeners
buttonOne.addEventListener('click', oneBg);
buttonTwo.addEventListener('click', twoBg);
buttonThree.addEventListener('click', threeBg);
buttonFour.addEventListener('click', fourBg);
buttonFive.addEventListener('click', fiveBg);
buttonSix.addEventListener('click', sixBg);
buttonSeven.addEventListener('click', sevenBg);
buttonEight.addEventListener('click', eightBg);
buttonNine.addEventListener('click', nineBg);

