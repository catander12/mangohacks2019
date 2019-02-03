import React from 'react';
var Barcode = require('react-barcode');
const Genbar = (props) => (
	<div className='newPackageForm'>
	<Barcode value={Math.floor(Math.random(0,1)*10000000)} />
		<form>
			<label for='Dimensions'>Dimensions (LxWxH)</label>
			<input type='text' name='Dimensions' placeholder='1x1x1'></input>

			<label for='weight'>Weight Lbs</label>
			<input type='number' name='weight' placeholder='1'></input>

			<br/>

			<label for='Shipper'>Shipper's Name</label>
			<input type='text' name='shipper' placeholder='Name Required'></input>

			<label for='Reciever'>Expected Reciever's Name</label>
			<input type='text' name='Reciever' placeholder='Name Required'></input>


		</form>
	
	</div>
);

export default Genbar;