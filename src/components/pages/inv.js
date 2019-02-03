import React from 'react';

const InvPage = props => (
	<div className='invholder'>
	<h1 className='titleOfPage'><u>Current Inventory</u></h1>
	<div className='buttonContainer'>
 		<div className={props.CurrentTask === "newBatch" ? "activeTask largeButtons newBatch " : "largeButtons newBatch"} 
 			onClick={() => props.HandleTaskChange("newBatch")}>
			<h4>Start New Batch</h4>
		</div>
		<div className={props.CurrentTask === "addPack" ? "activeTask largeButtons addPack " : "largeButtons addPack"} 
			onClick={() => props.HandleTaskChange("addPack")}>
			<h4>Add Package to Batch</h4>
		</div>
		<div className={props.CurrentTask === "deletePackage" ? "activeTask largeButtons deletePackage " : "largeButtons deletePackage"} 
			onClick={() => props.HandleTaskChange("deletePackage")}>
			<h4>Delete <br/> Package</h4>
		</div>
		<div className={props.CurrentTask === "searchInv" ? "activeTask largeButtons searchInv " : "largeButtons searchInv"} 
			onClick={() => props.HandleTaskChange("searchInv")}>
			<h4>Search Package</h4>
		</div>
		<div className={props.CurrentTask === "viewAllInv" ? "activeTask largeButtons viewAllInv " : "largeButtons viewAllInv"} 
			onClick={() => props.HandleTaskChange("viewAllInv")}>
			<h4>View All Packages</h4>
		</div>
	</div>
	</div>

);

export default InvPage;