import React from 'react';
import { Component } from 'react';

// Styles
import './style.scss';


export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.hello = 'Hot Module Activated!';
    }

    multiples() {
        let arr = [
            "Olá",
            "Hello",
            "Hola"
        ]
        const mappedArray = arr.map((elem, index) => {
            return (<h2 key={index}> {elem} </h2>)
        })

        return mappedArray;
    }   

    render() {
        return (
            <div>
                {this.multiples()}
            </div>
        );
    }
}
