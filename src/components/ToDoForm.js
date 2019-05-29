import React from 'react';

class ToDoForm extends React.Component {
    render() {
        return (
            <form className="input-group my-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add a new to-do item ..."
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