import React from 'react';

const TrucksPage = () => (
	<div className='trucksholder'>
	<h1 className='titleOfPage'><u>Packages in Transit</u></h1>
	<div className='buttonContainer'>
		<div className='largeButtons inTransit'>
			<h4>In Transit</h4>
		</div>
		<div className='largeButtons waiting'>
			<h4>Waiting to be Loaded</h4>
		</div>
		<div className='largeButtons pickUp'>
			<h4>Waiting for Customer Pick up</h4>
		</div>
	</div>
	</div>
);

export default TrucksPage;