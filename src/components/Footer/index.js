import React from 'react';
import "./index.css";

function Footer(props) {
    return (
    <div className="containerFooter">
        <h1>Footer, {props.userFam}</h1>
        <b>about us</b>
    </div>
    );
}

export default Footer;