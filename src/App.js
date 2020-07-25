import React,  { Component } from 'react'
import './App.css';



export default class ToDo extends Component {
    render () {
        return (
        <div className="App">
            <h3>ToDo List</h3>
            <Form />
        </div>
        )
    }
}
class Form extends Component {
    constructor () {
       super()
       this.state = {
          todo:'',
          time:'',
          location:'',
          todoList:[]
       }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { todoList, todo, time, location } = this.state //destructuring
        const todoObject = {
            todo, 
            time,
            location,
        }
        todoList.push(todoObject)
        this.setState({ todoList })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form id="form"onSubmit={this.handleSubmit}>
                    <input name="todo" onChange={this.handleChange} placeholder="To do" />
                    <input name="time" onChange={this.handleChange} placeholder="Time" />
                    <input name="location" onChange={this.handleChange} placeholder="Location" />
                    <button type="submit">Add</button>
                </form>

                <ol>
                    {this.state.todoList.map((item, index) => 
                  <li className="List"> {item.todo}  {item.time} {item.location} </li>
                    )}
                </ol>
                <div class="footer">
                  <p>Created and Designed by Fyne Tonye Angala </p>
                </div>
            </div>
        )
    }
}