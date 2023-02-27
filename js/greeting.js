import { user } from '../config.js';

var d = new Date();
var h = d.getHours();
const greetElem = document.getElementById('greeter')
const userElem = document.getElementById('username')

let greeting_text;
if (h >= 6 && h < 12) {
	greeting_text = "Good morning,";
} else if (h >= 12 && h <= 13) {
	greeting_text = "Good day,";
} else if (h >= 13 && h < 16) {
	greeting_text = "Good afternoon,";
} else {
	greeting_text = "Good evening,";
}

userElem.innerText = user
greetElem.innerText = greeting_text
