
function displayClock() {
	const monthNames = [
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	];

	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	var d = new Date();
	var dd = d.getDate();
	var day = weekday[d.getDay()];
	var mm = monthNames[d.getMonth()];
	var yr = d.getFullYear();
	var hh = d.getHours();
	var min = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

	let currentTime = hh + ":" + min;
	document.getElementById('clock').innerText = currentTime;

	let currentDay = day + " " + dd + ", " + mm + " " + yr
	document.getElementById('date').innerText = currentDay;
}

setInterval(displayClock, 1000);

