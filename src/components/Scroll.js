import React from 'react';

const Scroll = (props) => {
    return (
        <React.StrictMode>
            <br />
            <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px' }}>
                {props.children}
            </div>
        </React.StrictMode>
    );
}

export default Scroll;