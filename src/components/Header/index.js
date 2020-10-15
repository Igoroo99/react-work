import React from 'react';
import "./index.css";

function Header(props) {
    return (
         <div className="containerHeader">
        <h1>Hello, {props.userName}</h1>
        <b>Menu</b>
    </div>
    );
}

export default Header;