import React from "react";

const SideBar = props => (
  <ul className="nav side-Bar">
    <li onClick={() => props.HandlePageChange("inv")}
    className={props.CurrentPage === "inv" ? "active" : "navComp"} >
      <p>Inventory</p>
    </li>
    <li onClick={() => props.HandlePageChange("air")}
    className={props.CurrentPage === "air" ? "active" : "navComp"} >
      <p>In the Air</p>
    </li>
    <li onClick={() => props.HandlePageChange("ground")}
    className={props.CurrentPage === "ground" ? "active" : "navComp"} >
      <p>On the Ground</p>
    </li>
    <li onClick={() => props.HandlePageChange("records")}
    className={props.CurrentPage === "records" ? "active" : "navComp"} >
      <p>Records</p>
    </li>
  </ul>
);

export default SideBar;
