import React, {Component} from 'react';
import {Task} from './Task';
import {withTracker} from 'meteor/react-meteor-data';
import {Tasks} from "../api/tasks";
import ReactDOM from 'react-dom'

/*
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
*/


class App extends Component {
	 handleSubmit(event) {
			event.preventDefault();
			const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

			if(text === "") return false;

			Tasks.insert({
				 text,
				 createdAt: new Date().toLocaleString()
			});

			ReactDOM.findDOMNode(this.refs.textInput).value = "";
	 }

	 renderTasks() {
			return this.props.tasks.map(task => (
				<Task key={task._id} task={task}/>
			))
	 }

	 render() {
			return (
				<div className='container'>
					 <div className='row'>
							<div className="col-md-6 mx-auto component">
								 <header>
										<h1 className="text-center">Todo List</h1>
										<form onSubmit={this.handleSubmit.bind(this)}>
											 <div className="input-group mb-5 d-flex justify-content-center">
													<div className="input-group-prepend">
														 <input
															 type="text"
															 ref="textInput"
															 className="form-control is-valid"
															 placeholder="Enter the task..."
															 aria-label="ToDo task"
															 aria-describedby="button-addon2"
															 autoComplete='off'
														 />
														 <div className="input-group-append">
																<button
																	className="btn btn-outline-info ml-3"
																	type="submit"
																	id="button-addon2"
																	onClick={this.handleSubmit.bind(this)}
																>Add_Task
																</button>
														 </div>
													</div>
											 </div>
										</form>
								 </header>

								 <table className="table">
										<tbody>
										{this.renderTasks()}
										</tbody>
								 </table>
							</div>
					 </div>
				</div>
			);
	 }
}

export default withTracker(() => {
	 return {
			tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch(),
	 };
})(App)

