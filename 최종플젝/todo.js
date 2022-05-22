const savedToDos = localStorage.getItem('todos');
const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');
let toDos = [];

if (savedToDos) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}

function paintToDo(todo) {
	const li = document.createElement('li');
	li.id = todo.id;
	const span = document.createElement('span');
	span.innerText = todo.text;
	const button = document.createElement('button');
	button.innerText = 'X';
	button.addEventListener('click', deleteTodo);

	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmint(e) {
	e.preventDefault();
	const todo = toDoInput.value;
	const todoObj = {
		text: todo,
		id: Date.now()
	};
	toDoInput.value = '';
	toDos.push(todoObj);
	paintToDo(todoObj);
	saveToDos();
}

function deleteTodo(e) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}

function saveToDos() {
	localStorage.setItem('todos', JSON.stringify(toDos));
}

toDoForm.addEventListener('submit', handleToDoSubmint);
