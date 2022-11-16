// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


var player = new Plyr('.about__video-player');

function weatherBalloon( cityID ) {
	var key = 'c87e30dc724a6837d6b6b97a464a2670';
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + 536625+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
	  // catch any errors
	});
 }
 
 window.onload = function() {
	weatherBalloon( 6167865 );
 }

//  function drawWeather( d ) {
// 	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
// 	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
// 	document.getElementById('description').innerHTML = d.weather[0].description;
// 	document.getElementById('temp').innerHTML = celcius + '&deg;';
// 	document.getElementById('location').innerHTML = d.name;
// }

// or//

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	var description = d.weather[0].description;
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
	
	if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  }
}