import React from 'react';

const Counts = ({tasks, incompleteCount}) => {
	 return (
		 <div className='counts'>
				<pre>All: <span>{tasks.length}</span> </pre>
				<pre>Completed: <span>{tasks.length - incompleteCount}</span> </pre>
				<pre>Incomplete: <span>{incompleteCount}</span></pre>
		 </div>
	 );
};

export default Counts;
