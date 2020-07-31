import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="title">
                <h1>{props.title}</h1>
            </div>
        </header>
    );
}

export default Header;