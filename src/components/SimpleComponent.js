import React from 'react';

function SimpleComponent(props) {
    return ( 
    <div >
        <p>I am simple component, {props.uber}</p>
    </div>
    );
}

export default SimpleComponent;