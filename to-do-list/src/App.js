import './App.css';
import { useState } from 'react';

function App() {
	const [ toDo, setToDo ] = useState('');
	const [ toDos, setToDos ] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();

		if (toDo === '') {
			return;
		}
		setToDo('');
		setToDos((currentArray) => [ toDo, ...currentArray ]);
		console.log(toDos);
	};
	return (
		<div>
			<h1>My To Dos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={toDo} onChange={onChange} placeholder="write your to do..." />
				<button>Add To Do</button>
			</form>
		</div>
	);
}

export default App;
