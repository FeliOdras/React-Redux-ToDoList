import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: {}
        }
    }
    render() {
        return (
            <div className="container">
                <Header tagline='Here ar all the next tasks' />
                <ToDoForm />
                <ToDoList />
            </div>
        )
    }
}
export default App;