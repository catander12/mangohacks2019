import React from 'react';

const RecordsPage = () => (
	<div className='recordsholder'>
	<h1 className='titleOfPage'><u>All Records</u></h1>
	<div className='buttonContainer'>
		<div className='largeButtons current'>
			<h4>View Current Batches</h4>
		</div>
		<div className='largeButtons delete'>
			<h4>View Completed <br/> Batches</h4>
		</div>
		<div className='largeButtons search'>
			<h4>View All</h4>
		</div>
	</div>
	</div>
);

export default RecordsPage;