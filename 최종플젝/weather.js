const weater = document.querySelector('#weater span:first-child');
const city = document.querySelector('#weater span:last-child');
const API_KEY = '020607c8dd2a5c61369e5d5368ffba85';

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url).then((respons) => respons.json()).then((data) => {
		city.innerHTML = data.name;
		weater.innerText = `${data.weather[0].main} / ${data.main.temp}`;
	});
}
function onGeoError() {
	alert('니가 어딘지 모르겠음');
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
