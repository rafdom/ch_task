import React from "react";
import "../scss/components/tableHeader.scss";

function Header() {
  return (
    <div className="header-container">
      <div>STATUS</div>
      <div>DELIVERY DAY</div>
      <div>SUPPLIER</div>
      <div>TOTAL</div>
    </div>
  );
}

export default Header;
