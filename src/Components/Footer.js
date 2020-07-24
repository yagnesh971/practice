import React from 'react';
class Footer extends React.Component {

    constructor() {
        super();
        this.state = { 'test': false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('this ', this);
        this.setState({ 'test': !this.state.test });
    }
    render() {
        return (
            <footer>
                <h3>Footer Component</h3>
                {this.state.test ? <p>Hello Footer</p> : <p></p>}
                <button onClick={this.handleClick}>Click me</button>
            </footer>
        )
    }
}
export default Footer;
