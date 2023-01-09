// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {
	setTimeout(initYandexMap, 5000);
});

document.addEventListener("scroll", initYandexMapOnEvent);
document.addEventListener("mousemove", initYandexMapOnEvent);
document.addEventListener("touchstart", initYandexMapOnEvent);

function initYandexMapOnEvent(e) {
	initYandexMap();
	e.currentTarget.removeEventListener(e.type, initYandexMapOnEvent);
}

function initYandexMap() {
	if (window.yandexMapDidInit) {
		return false;
	}
	window.yandexMapDidInit = true;

	var script = document.createElement("script");
	script.type = "text/javascript";
	script.async = true;

	script.src =
		"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abb5e2da36ced51eeb2559103acb5547f520b185b9b55ab4c3e49699dba36001e&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=false";

	document.getElementById("map__body").appendChild(script);
}


// var player = new Plyr('.about__video-player');

// function weatherBalloon(cityID) {
// 	var key = 'c87e30dc724a6837d6b6b97a464a2670';
// 	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + 536625 + '&appid=' + key + '&lang=RU')
// 		.then(function (resp) { return resp.json() }) // Convert data to json
// 		.then(function (data) {
// 			drawWeather(data); // Call drawWeather
// 		})
// 		.catch(function () {
// 			// catch any errors
// 		});
// }

// window.onload = function () {
// 	weatherBalloon(6167865);
// }

//  function drawWeather( d ) {
// 	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
// 	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 

// 	document.getElementById('description').innerHTML = d.weather[0].description;
// 	document.getElementById('temp').innerHTML = celcius + '&deg;';
// 	document.getElementById('location').innerHTML = d.name;
// }

// or//

function drawWeather(d) {
	var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
	var description = d.weather[0].description;

	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	// document.getElementById('location').innerHTML = d.name;

	if (description.indexOf('rain') > 0) {
		document.body.className = 'rainy';
	} else if (description.indexOf('cloud') > 0) {
		document.body.className = 'cloudy';
	} else if (description.indexOf('sunny') > 0) {
		document.body.className = 'sunny';
	}
}


//--------------------- Маска ввода номера телефона=
window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll(".input-tel"), function (input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___ ____",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i);
			}
			var reg = matrix
				.substr(0, this.value.length)
				.replace(/_+/g, function (a) {
					return "\\d{1," + a.length + "}";
				})
				.replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (
				!reg.test(this.value) ||
				this.value.length < 5 ||
				(keyCode > 47 && keyCode < 58)
			)
				this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = "";
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false);
	});
});




var checkbox = document.getElementById("popup-form__input-checkbox");
var btn_submit = document.querySelector(".popup-form__button");

checkbox.addEventListener("change", () => {
	if (checkbox.checked) {
		btn_submit.removeAttribute("disabled");
	} else {
		btn_submit.setAttribute("disabled", true);
	}
});