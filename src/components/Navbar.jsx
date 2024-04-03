import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">We Chat</div>
      <div className="user">
        <img
          src="https://notashow.altervista.org/wp-content/uploads/2023/10/chandler-bing-friends-matthew-perry-1200x900.png"
          alt="Chandler"
        />
        <span>Chandler Bing</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
