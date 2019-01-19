import React from 'react';
import { Button,Form, FormGroup, Input, FormText,Label } from 'reactstrap';
import './App.css';

class TaskBar extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      input: '',
      date: new Date().toLocaleTimeString()
    }
     
  }

  handleSubmit(e){
    e.preventDefault();

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
          <Button color="danger">Agregar</Button>
        </FormGroup>
      </Form>
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
        <TaskBar />

      </div>
    );
  }
}

export default App;
