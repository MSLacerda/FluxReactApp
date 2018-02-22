import { Component } from React;


export default class App extends Component {
    constructor () {
        super();
        this.hello = "Olá Mundo!";
    }

    render() {
        return (
            <div>
                <p> 
                    {this.hello}
                </p>
            </div>
        )
    }
}
