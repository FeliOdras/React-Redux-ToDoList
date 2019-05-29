import React, { Fragment } from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>What to do?</h1>
                <span className="tagline">This could be a bucket list.</span>
            </header>
        );
    }
}

export default Header;