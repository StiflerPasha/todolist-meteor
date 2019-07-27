import React     from 'react';
import PropTypes from 'prop-types';

const Counts = ({ tasksCount, incompleteCount }) => {
   return (
	  <div className="counts">
		 <pre>All: <span>{ tasksCount }</span> </pre>
		 <pre>Completed: <span>{ tasksCount - incompleteCount }</span> </pre>
		 <pre>Incomplete: <span>{ incompleteCount }</span></pre>
	  </div>
   );
};

Counts.propTypes = {
   tasksCount: PropTypes.number.isRequired,
   incompleteCount: PropTypes.number.isRequired,
};

export default Counts;
