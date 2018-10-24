import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {

    constructor(props){
        super(props);

        this.createTask = this.createTask.bind(this);
    }

    createTask(tasks){
        return <li onClick={() => this.delete(tasks.key)}
                    key={tasks.key}>{tasks.text}</li>
    }

    delete(key){
        console.log("Key is "+key);
        this.props.delete(key);
        
    }

    render(){
        var todoEntries = this.props.entries;
        var listTasks = todoEntries.map(this.createTask);
        return(
            <ul className="theTask">
                <FlipMove duration={250} easing="ease-out">
                    {listTasks}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;