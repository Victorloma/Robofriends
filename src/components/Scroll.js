import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '0px solid black', height: '700px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;