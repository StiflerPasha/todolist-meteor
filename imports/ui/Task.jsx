import React from 'react'
import {Tasks} from "../api/tasks";

export const Task = ({task}) => {
	 const toggleDone = () => {
			Tasks.update(task._id, {
				 $set: {isDone: !task.isDone}
			})
	 };

	 const deleteTask = () => {
			Tasks.remove(task._id);
	 };

	 const taskClassName = task.isDone ? 'checked' : '';

	 return (
		 <tr className={taskClassName}>
				<td>
					 {task.isDone ?
						 <i onClick={toggleDone} className="far fa-check-square fa-2x"/> :
						 <i onClick={toggleDone} className="far fa-square fa-2x"/>}
				</td>
				<td className="text-center">
					 {task.text}
				</td>
				<td className="text-right">
					 <button className="btn btn-danger btn-sm" onClick={deleteTask}
					 >Delete
					 </button>
				</td>
		 </tr>
	 );
};