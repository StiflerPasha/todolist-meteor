import React, {useState} from 'react';

const AddTaskForm = ({addTask}) => {

	 const [value, setValue] = useState('');

	 const handleSubmit = (event) => {
			event.preventDefault();
			if (!value) return false;
			addTask(value);
			setValue('');
	 };

	 const onChangeText = (event) => {
			setValue(event.target.value)
	 };

	 return (
		 <form onSubmit={handleSubmit}>
				<div className="input-group d-flex justify-content-center mt-2 mb-1">
					 <div className="input-group-prepend">
							<input type="text"
										 className="form-control is-valid"
										 placeholder="Enter the task..."
										 aria-label="ToDo task"
										 aria-describedby="button-addon2"
										 autoComplete='off'
										 onChange={onChangeText}
										 value={value}/>
							<div className="input-group-append">
								 <button className="btn btn-outline-info ml-3"
												 type="submit"
												 id="button-addon2">
										Add_Task
								 </button>
							</div>
					 </div>
				</div>
		 </form>
	 );
};

export default AddTaskForm;
