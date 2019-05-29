import React from 'react';
import Header from './Header';

class Help extends React.Component {
    componentDidMount() {
        document.title = "Help | Wht to do?";
    }

    render() {
        return (
            <div className="container">
                <Header tagline="Your questions will be answered here." />
                <dl>
                    <dt>Where is the data stored?</dt>
                    <dl>We store all information in your browser's LocalStorage.</dl>
                </dl>
            </div>
        )
    }
}
export default Help;