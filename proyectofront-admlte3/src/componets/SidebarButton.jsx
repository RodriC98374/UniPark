import React from "react";

const SidebarButton = ({ name}) => {
  return (
    // <button onClick={onClick}>
    //   {name}
    // </button>
    <li className="nav-item">
      <a href="/" className="nav-link active">
        <i className="far fa-circle nav-icon" />
        <p>{name}</p>
        </a>
    </li>
  );
};

export default SidebarButton;
