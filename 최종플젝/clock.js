const clock = document.querySelector('#clock');

function getClock() {
	const date = new Date();
	clock.innerText = `${date.getMonth()}.${date.getDate()}`;
}
getClock();
setInterval(getClock, 1000);
