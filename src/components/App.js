import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import uuid from 'uuid/v4';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: {}
        }
    }

    addToDo = text => {
        const todo = {
            uuid: uuid(),
            text: text,
            done: false
        }

        this.setState(state => {
            state.toDoItems[todo.uuid] = todo;
            return state;
        })
    }

    updateToDoText = (uuid, text) => {
        this.setState(state => {
            state.toDoItems[uuid].text = text;
            return state;
        })
    }

    render() {
        return (
            <div className="container">
                <Header tagline='Here ar all the next tasks' />
                <ToDoForm addToDo={this.addToDo} />
                <ToDoList items={this.state.toDoItems} />
            </div>
        )
    }
}
export default App;