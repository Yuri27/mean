var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var httpRequest= new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
	//console.log("state change: "+httpRequest.readyState+" / "+httpRequest.status);
	if (httpRequest.readyState === 4 &&
		httpRequest.status === 200) {
		var weather = JSON.parse(httpRequest.responseText);
		console.log("Температура " + (weather.main.temp - 273).toFixed(1) + ' \u00B0C');
		console.log("Давление " + weather.main.pressure + " гПа");
		console.log("Влажность " + weather.main.humidity + " %");
		console.log("Облачность " + weather.clouds.all + " %");
		console.log("Скорость ветра " + weather.wind.speed + " м/с");
	}
};

console.log("Погода в городе Киев");
httpRequest.open('GET', "http://api.openweathermap.org/data/2.5/weather?q=kiev&appid=0f4dd996ec5c19547bb331992d9acd73");
httpRequest.send();
