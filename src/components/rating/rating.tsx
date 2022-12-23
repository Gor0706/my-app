import {FC} from "react";
import './rating.css'

import axios from "axios";

const arr = [4, 12, 21, 18];
const Rating: FC= () => {

	const axUrl: string = 'https://jsonplaceholder.typicode.com/todos/1'

const createPassword = (name: string = 'Tigran', age?: number | string ): string => `${name}${age}`;

createPassword('Tiko', '41');

const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skills are ${skills.join()}`;


createSkills('Tiko', 'JS', 'typeScript', 'React', 'ES6')

	type person = {name: string, age: number, nickName: string, getPass?: () => string }

	class User  {
	constructor(
		private age: number,
		public name?: string,
		readonly nickName?: string,
		protected pass?: number,
		public pass1?: string,
		) {}
	}
	 const user = new User(33, 'Gor0706', '28', 28,  'Tigran my bro');

console.log(user, 'user')

	interface Todo {
	id: number;
	title: string;
	completed: boolean;
	}

	axios.get(axUrl).then((response) => {
		const todo = response.data as Todo;

		const id = todo.id;
		const title = todo.title;
		const finished = todo.completed;
		todoLog(id, title, finished);
	})
	function todoLog(id: number, title: string, finished: boolean): void {
		console.log(`
	 ID: ${id}
	 TITLE: ${title}
	 IS FINISHED: ${finished}
	`)
	}



	return <div>
		{
			arr.map((item: any, i: number) => {
				return <div style={{width: item * 10}} key={item + i} className="rating">{item}</div>
			})
		}
	</div>

}

export default Rating
