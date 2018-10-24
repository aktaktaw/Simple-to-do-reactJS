import React, { Component } from 'react';
import TodoItem from './TodoItems';
import "./todolist.css"

class TodoList extends Component {
    constructor(props){
        super(props);
        
        this.state={
            tasks:[]
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(e){
        if(this._inputElement.value !==""){
            var newTask = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) =>{
                return{
                    tasks: prevState.tasks.concat(newTask)
                };
            });
        }


        this._inputElement.value ="";
        console.log(this.state.tasks);
        e.preventDefault();
    }

    deleteTask(key){
        console.log("Key in deleteItem:"+key);


        var filteredTask= this.state.tasks.filter(function(tasks){
            return(tasks.key !==key)
        });

        this.setState({
            tasks: filteredTask
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        <input ref={(a)=>this._inputElement=a} 
                            placeholder="Things To Do"></input>
                        <button type="submit">Create Task</button>
                    </form>
                </div>
                <TodoItem entries={this.state.tasks}
                          delete ={this.deleteTask}></TodoItem>
            </div>
        );
    }
}

export default TodoList;