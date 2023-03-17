import { useState } from "react";
import uuid from 'react-uuid'

export default function App() {
	return (
		<div className="App">
			<Form />
		</div>
	);
}

function Form() {
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState([]);

	const handleChange = event => {
		setTodo(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault();
		setTodoList([...todoList, todo]);
		setTodo('');
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					New Todo : <input type="text" className="text" value={todo} onChange={handleChange}></input>
				</label>
				<input type="submit" className="submit"></input>
			</form>
			<List todoList={todoList} />
		</>
	);
}

function List(props) {
	let newTodoList = props.todoList.map((todo) => (
		<ListItem text={todo} />
	));
	
	return (
		<ul className="list">
			{newTodoList}
		</ul>
	)
}

function ListItem(props) {
	return <li key={uuid()}>{props.text}</li>
}
