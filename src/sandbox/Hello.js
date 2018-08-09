import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
// const Hello = (props) => {
    render() {
        return (
            <div className='f1 tc'>
                <h1>Hello World!</h1>
                <p>{this.props.greeting}, Welcome to React</p>
            </div>
        )
    }
}

export default Hello;