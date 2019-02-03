import React from 'react';

const FlightsPage = () => (
	<div className='flightsholder'>
	<h1 className='titleOfPage'><u>In Flight</u></h1>
	<div className='buttonContainer'>
		<div className='largeButtons inFlight'>
			<h4>In Flight</h4>
		</div>
		<div className='largeButtons unloaded'>
			<h4>Unloaded</h4>
		</div>
	</div>
	</div>
);

export default FlightsPage;