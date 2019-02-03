import React from 'react';


const NewBatch = props => (
	<div className='newBatchHolder'>
		<h1><u>New Batch</u></h1>
		<h4> {props.date} </h4>
		<button
			 
			onClick={() => props.addPackage('genBar')}>Create New Package
		</button>

	</div>
);

export default NewBatch;