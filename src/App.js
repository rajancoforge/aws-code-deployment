
import React, { Component } from 'react';
import './App.css';


const SubmitButton = (props) => {
  return <button className="btn btn-primary" type="submit" >Submit</button>;
}
class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


   firstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

     lastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

     emailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state.firstName+" - "+this.state.lastName+" - "+this.state.email+" - "+this.state.contact);
    event.preventDefault();
  }
  render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>  
 
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">FirstName</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="fname"  value={this.state.firstName} onChange={this.firstNameChange} />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">LastName</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="lname"  value={this.state.lastName} onChange={this.lastNameChange} />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" value={this.state.email} onChange={this.emailChange} />
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" value={this.state.password} onChange={this.passwordChange} />
    </div>
  </div>
  <SubmitButton />
     </form>
  </div>
  );
}
}
export default App;
