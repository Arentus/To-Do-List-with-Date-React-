import React from 'react';
import { Button,Form, FormGroup, Input, FormText,Label } from 'reactstrap';
import './App.css';

class TaskBase extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      tasks: [],
      input: '',
      date: new Date().toLocaleTimeString()
    }

  }

  handleClick(e){

    e.preventDefault();

    if(!this.state.input.length){
      return;
    }

    this.setState({input: e.target.value});

    const newTask = {
      text: this.state.input,
      date: this.state.date
    }
    
    this.setState( state => ({
      tasks: state.tasks.concat(newTask),
      input: '',
      date: new Date().toLocaleTimeString()
    }));

  }

  handleChange(e){
    this.setState({input: e.target.value});
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="taskText">Task : </Label>
          <Input type="text" id="taskText" placeholder={"agregar a las "+this.state.date} value={this.state.input} onChange={this.handleChange}/>
          <Button onClick={this.handleClick} color="danger">Agregar</Button>
        </FormGroup>
        <div>
          <Tasks tasks={this.state.tasks} />
        </div>
      </Form>
    );
  }

}


class Tasks extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <ul>
        {this.props.tasks.map(task => (  
              <div className="taskBox" key={task.id} id={task.id}>
                  {task.date}
                  <p className="taskText">{task.text}</p>
              </div>
            )
          )
        }
        </ul>
    );
  }
}

function Welcome(props){
  return <h4>Hello, {props.name}.</h4>
}

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Welcome name="Anthony" />
        <TaskBase />
      </div>
    );
  }
}

export default App;
