import React, { useState } from 'react';
import AddTaskForm         from './AddTaskForm';
import Task                from './Task';
import Counts              from './Counts';
import { withTracker }     from 'meteor/react-meteor-data';
import { Tasks }           from '../api/tasks';
import AccountsUIWrapper   from './AccountsUIWrapper';
import PropTypes           from 'prop-types';


const App = ({ tasks, incompleteCount, loading }) => {

   const [hideCompleted, setHideCompleted] = useState(false);

   const addTask = (text) => {
	  if (!text) return false;
	  Tasks.insert({
		 text,
		 createdAt: new Date().toLocaleString(),
	  });
   };

   const updateTask = (task) => {
	  Tasks.update(task._id, {
		 $set: { isDone: !task.isDone },
	  });
   };

   const deleteTask = (task) => {
	  Tasks.remove(task._id);
   };

   const toggleHideCompleted = () => {
	  setHideCompleted(!hideCompleted);
   };

   const renderTasks = () => {
	  let filteredTasks = tasks;
	  if (hideCompleted) {
		 filteredTasks = filteredTasks.filter(task => !task.isDone);
	  }
	  return filteredTasks.map(task => (
		 <Task key={ task._id }
			   task={ task }
			   updateTask={ updateTask }
			   deleteTask={ deleteTask } />
	  ));
   };


   return loading ? (<div>Loading</div>) :
	  (<div className="container">
		 <div className="row">
			<div className="col-md-6 mx-auto component">
			   <header>
				  <Counts tasksCount={ tasks.length } incompleteCount={ incompleteCount } />

				  <AccountsUIWrapper />

				  <h1 className="text-center">Todo List</h1>

				  <AddTaskForm addTask={ addTask } />

				  <label className="mb-4">
					 <input type="checkbox"
							readOnly
							checked={ hideCompleted }
							onClick={ () => toggleHideCompleted() } />
					 Hide Completed Tasks
				  </label>
			   </header>

			   <table className="table">
				  <tbody>
				  { renderTasks() }
				  </tbody>
			   </table>
			</div>
		 </div>
	  </div>);
};

App.propTypes = {
   tasks: PropTypes.array.isRequired,
   incompleteCount: PropTypes.number,
   loading: PropTypes.bool,
};

export default withTracker(() => {
   const loading = !Meteor.subscribe('tasks').ready();
   return {
	  loading,
	  tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
	  incompleteCount: Tasks.find({ isDone: { $ne: true } }).count(),
   };
})(App);

