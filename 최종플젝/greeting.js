const login = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const HIDDEN_CLASSNAME = 'hidden';
const greeting = document.querySelector('#greeting');

function nameSubmit(e) {
	e.preventDefault();
	login.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	loginInput.innerHTML = loginInput;
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	localStorage.setItem('name', username);
}
login.addEventListener('submit', nameSubmit);
