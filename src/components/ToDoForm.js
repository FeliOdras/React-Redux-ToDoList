import React from 'react';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    textInput = React.createRef();

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Create new item`);
    }

    render() {
        return (
            <form className="input-group my-3" onSubmit={this.handleSubmit}>
                <input
                    className="form-control"
                    name="name"
                    type="text"
                    placeholder="Add a new to-do item ..."
                    ref={this.textInput}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" true="submit">
                        <i className="fas fa-plus" aria-hidden="true" />&nbsp;Add item
                    </button>
                </div>
            </form>
        )
    }
}
export default ToDoForm;