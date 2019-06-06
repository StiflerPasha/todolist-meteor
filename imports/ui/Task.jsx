import React from 'react'

const Task = ({task, deleteTask, updateTask}) => {

	 const taskClassName = task.isDone ? 'checked' : '';

	 return (
		 <tr className={taskClassName}>
				<td>
					 {task.isDone ?
						 <i onClick={() => updateTask(task)} className="far fa-check-square fa-2x"/> :
						 <i onClick={() => updateTask(task)} className="far fa-square fa-2x"/>}
				</td>
				<td className="text-center">
					 {task.text}
				</td>
				<td className="text-right">
					 <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task)}
					 >Delete
					 </button>
				</td>
		 </tr>
	 );
};

export default Task