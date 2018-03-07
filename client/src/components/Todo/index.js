import React from "react";
import Divider, { Input } from "semantic-ui-react"
import AddTodoForm from './partials/AddTodoForm.jsx'

export default class Todo extends React.Component {
    render() {

        return (
            <div>
                <AddTodoForm />
            </div>
        );
    }
}