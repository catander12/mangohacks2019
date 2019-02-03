import React from 'react';

const AddPackage = props => (
	<div className='addPackage'>
		<h1><u>Add a Package to the most current Batch</u></h1>
		<h4> {props.date} </h4>
		<button
			onClick={() => props.addPackage('genBar')}>Create New Package
		</button>

	</div>
);

export default AddPackage;